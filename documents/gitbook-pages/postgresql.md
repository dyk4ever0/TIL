---
description: public -> precit
---

# PostgreSQL에서 두 스키마 간 데이터 이동

#### 1. PostgreSQL에서 데이터 이동 및 권한 설정

**1.1 `predict` 스키마 삭제**

`predict` 스키마를 삭제하여 초기화하고 모든 데이터를 새롭게 복사할 준비를 함.

```sql
DROP SCHEMA IF EXISTS predict CASCADE;
```

**1.2 `predict` 스키마 생성**

`predict`라는 새 스키마 생성

```sql
CREATE SCHEMA predict;
```

**1.3 `public` 테이블을 `predict`로 복사**

`public.ready_to_predict` 테이블의 모든 데이터를 `predict.ready_to_predict` 테이블로 복사

```sql
CREATE TABLE predict.ready_to_predict AS
SELECT * FROM public.ready_to_predict;
```

**1.4 `aiserver` 사용자에게 `predict` 스키마 권한 부여**

`aiserver` 사용자에게 `predict` 스키마에 대한 접근 및 테이블 권한 부여

```sql
GRANT USAGE ON SCHEMA predict TO aiserver;
GRANT ALL ON ALL TABLES IN SCHEMA predict TO aiserver;
```

**1.5 앞으로 생성되는 테이블 권한 자동 부여 설정**

새로 생성되는 테이블에도 자동으로 권한 부여되는 설정임

```sql
ALTER DEFAULT PRIVILEGES IN SCHEMA predict
GRANT ALL ON TABLES TO aiserver;
```

#### 2. 데이터 비교 및 검증

**2.1 `EXCEPT`를 통한 데이터 차이 비교**

* `public`에만 존재하는 데이터:

```sql
SELECT *
FROM public.ready_to_predict
EXCEPT
SELECT *
FROM predict.ready_to_predict;
```

* `predict`에만 존재하는 데이터:

```sql
SELECT *
FROM predict.ready_to_predict
EXCEPT
SELECT *
FROM public.ready_to_predict;
```

2.2 행 수 확인

```
SELECT COUNT(*) AS row_count
FROM predict.ready_to_predict;
```

#### 3. 서버 코드 수정 사항

**3.1 데이터베이스 적재 시 `predict` 스키마 지정**

`pandas.DataFrame.to_sql` 메서드에서 `schema='predict'`를 지정하여 데이터가 `predict` 스키마에 저장되도록 변경

```python
df_DB.to_sql(
    'ready_to_predict',  # 테이블 이름
    engine,              # 데이터베이스 엔진
    schema='predict',    # 스키마 지정
    if_exists='append',  # 데이터가 존재하면 추가
    index=False          # 인덱스 제외
)
```

**3.2 데이터베이스 연결 테스트 엔드포인트 추가**

서버에서 데이터베이스 연결 및 `predict.ready_to_predict` 테이블 조회를 테스트하기 위한 엔드포인트 추가

```
from sqlalchemy import text

@app.get("/test-db-connection/")
def test_db_connection():
    """
    데이터베이스 연결 테스트 및 predict.ready_to_predict에서 데이터 확인
    """
    try:
        with engine.connect() as conn:
            query = text("SELECT * FROM predict.ready_to_predict LIMIT 1")
            result = conn.execute(query)
            df = pd.DataFrame(result.fetchall(), columns=result.keys())
            
            if df.empty:
                return {"status": "success", "message": "Table is accessible but contains no data."}
            
            return {
                "status": "success",
                "message": "Database connection successful and data retrieved.",
                "data": df.to_dict(orient="records")
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
```



### PostgreSQL에서 두 스키마 간 데이터 이동 및 서버 코드 수정 흐름

#### 1. PostgreSQL에서 데이터 이동 및 권한 설정

**1.1 `predict` 스키마 삭제**

`predict` 스키마를 삭제하여 초기화하고 모든 데이터를 새롭게 복사할 준비를 함.

```sql
sql코드 복사DROP SCHEMA IF EXISTS predict CASCADE;
```

***

**1.2 `predict` 스키마 생성**

`predict`라는 새 스키마를 생성함.

```sql
CREATE SCHEMA predict;
```

***

**1.3 `public` 테이블을 `predict`로 복사**

`public.ready_to_predict` 테이블의 모든 데이터를 `predict.ready_to_predict` 테이블로 복사함.

```sql
CREATE TABLE predict.ready_to_predict AS
SELECT * FROM public.ready_to_predict;
```

***

**1.4 `aiserver` 사용자에게 `predict` 스키마 권한 부여**

`aiserver` 사용자에게 `predict` 스키마에 대한 접근 및 테이블 권한을 부여함.

```sql
GRANT USAGE ON SCHEMA predict TO aiserver;
GRANT ALL ON ALL TABLES IN SCHEMA predict TO aiserver;
```

***

**1.5 앞으로 생성되는 테이블 권한 자동 부여 설정**

새로 생성되는 테이블에도 자동으로 권한이 부여되도록 설정함.

```sql
ALTER DEFAULT PRIVILEGES IN SCHEMA predict
GRANT ALL ON TABLES TO aiserver;
```

***

#### 2. 데이터 비교 및 검증

**2.1 `EXCEPT`를 통한 데이터 차이 비교**

* `public`에만 존재하는 데이터:

```sql
SELECT *
FROM public.ready_to_predict
EXCEPT
SELECT *
FROM predict.ready_to_predict;
```

* `predict`에만 존재하는 데이터:

```sql
SELECT *
FROM predict.ready_to_predict
EXCEPT
SELECT *
FROM public.ready_to_predict;
```

***

**2.2 행 수 확인**

`predict.ready_to_predict` 테이블의 행 수를 확인하여 복사가 제대로 이루어졌는지 검증함.

```sql
SELECT COUNT(*) AS row_count
FROM predict.ready_to_predict;
```

***

#### 3. 서버 코드 수정 사항

**3.1 데이터베이스 적재 시 `predict` 스키마 지정**

`pandas.DataFrame.to_sql` 메서드에서 `schema='predict'`를 지정하여 데이터가 `predict` 스키마에 저장되도록 변경함.

```python
df_DB.to_sql(
    'ready_to_predict',  # 테이블 이름
    engine,              # 데이터베이스 엔진
    schema='predict',    # 스키마 지정
    if_exists='append',  # 데이터가 존재하면 추가
    index=False          # 인덱스 제외
)
```

***

**3.2 데이터베이스 연결 테스트 엔드포인트 추가**

서버에서 데이터베이스 연결 및 `predict.ready_to_predict` 테이블 조회를 테스트하기 위한 엔드포인트를 추가함.

```python
from sqlalchemy import text

@app.get("/test-db-connection/")
def test_db_connection():
    """
    데이터베이스 연결 테스트 및 predict.ready_to_predict에서 데이터 확인
    """
    try:
        with engine.connect() as conn:
            query = text("SELECT * FROM predict.ready_to_predict LIMIT 1")
            result = conn.execute(query)
            df = pd.DataFrame(result.fetchall(), columns=result.keys())
            
            if df.empty:
                return {"status": "success", "message": "Table is accessible but contains no data."}
            
            return {
                "status": "success",
                "message": "Database connection successful and data retrieved.",
                "data": df.to_dict(orient="records")
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
```

***

#### 4. 최종 흐름 요약

1. **`predict` 스키마 초기화**:
   * 기존 `predict` 스키마 삭제 후 새로 생성
   * `public.ready_to_predict` 데이터를 `predict.ready_to_predict`로 복사
2. **권한 설정**:
   * `aiserver` 사용자에게 `predict` 스키마와 테이블에 대한 권한 부여
   * 앞으로 생성되는 테이블에 대해 권한 자동 부여 설정
3. **데이터 검증**:
   * `EXCEPT` 쿼리를 사용하여 데이터 차이 확인
   * `row_count`를 통해 행 수 검증
4. **서버 코드 수정**:
   * `pandas.DataFrame.to_sql`에서 `schema='predict'` 지정
   * 데이터베이스 연결 및 쿼리 테스트 위한 GET 엔드포인트 추가
