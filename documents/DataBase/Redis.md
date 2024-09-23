# Redis Data Structures

## Sorted Set
ZADD, ZREVRANCE 등
- 연산이 많지만 도큐먼트에 다 있고 찾아서 쓰면 되므로 일일히 기억할 필욘 없음
- 동시성이 떨어짐
  + 구현할 때는 샤딩해서 사용

## Hyperloglog
- Does not store calues; cannot retreive them
- Set 대신 사용 추천
- 앞으로의 릴리즈에서 더 빠른 데이터형이 더 나올 예정

## Pub/Sub & Strems
PSUBSCRIBE, PUBLISH
- Creators-Receivers간 데이터가 전달되는 구조
- **Pub/Sub** = 휘발성. *Fire and Forget*
- Subscriber의 멀쩡한 정신이 요구

## AWS Cacheup Day 실습 : Elastic Cache를 사용한 아키텍처 예시
![image](https://github.com/user-attachments/assets/71bf1c8d-b206-47f2-92c6-2a6a79188407)