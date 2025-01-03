# macOS에서 <응용프로그램> / <에이전트> / <데몬> 제거 순서

### 1. 실행 중인 프로세스 확인 및 종료

#### 1.1. 프로세스 검색

```
ps aux | grep <MyApp>
ps aux | grep <myagent>
ps aux | grep <mydaemon>
```

여기서 원하는 프로세스의 PID나 정확한 프로세스 이름을 확인

#### 1.2. 프로세스 종료

```
kill -9 <PID>
또는
killall <MyApp>
```

* 프로세스가 자동으로 재실행된다면, LaunchAgent/LaunchDaemon 때문일 가능성이 높음.
* 아래 2\~3단계를 먼저 수행 후 재시도 필요.

### 2. LaunchAgent에서 제거

#### 2.1. 등록된 LaunchAgent 검색

```
launchctl list | grep <myagent>
```

`com.company.<myagent>` 같은 라벨명을 확인

#### 2.2. plist 파일 경로 찾기

```
find ~/Library/LaunchAgents -name "*<myagent>*.plist" 2>/dev/null
find /Library/LaunchAgents -name "*<myagent>*.plist" 2>/dev/null
```

(보통 `/Library/LaunchAgents/com.company.<myagent>.plist` 형태로 나타남)

#### 2.3. 언로드(unload) 및 파일 삭제

사용자 GUI 도메인(UID 501 예시)라면:

```
launchctl bootout gui/501 /Library/LaunchAgents/com.company.<myagent>.plist
rm /Library/LaunchAgents/com.company.<myagent>.plist
```

또는

```
sudo -u <사용자계정> launchctl bootout gui/<UID> /Library/LaunchAgents/com.company.<myagent>.plist
rm /Library/LaunchAgents/com.company.<myagent>.plist
```

* **트러블슈팅**: `sudo launchctl unload /Library/LaunchAgents/...` 명령에서 “Expecting a LaunchDaemons path...” 경고가 뜰 수 있음. LaunchAgents는 사용자 GUI 도메인에서 제어해야 하므로 `bootout gui/<UID>` 형태를 사용해야 함.
* **트러블슈팅**: “No such process” 오류는 이미 언로드됐거나 라벨명이 달라서 발생. `launchctl list`로 라벨 재확인 후 재시도

실행 됐던 커맨드:

```
sudo -u mac launchctl bootout gui/501 /Library/LaunchAgents/com.doctorsoft.n6helper.plist
```

### 4. 실제 앱(응용 프로그램) 파일 삭제

```
sudo rm -rf "/Applications/<MyApp>.app"
또는
sudo rm -rf "/usr/local/bin/<MyApp>"
```

### 5. \[선택] 추가 로그 파일 삭제

`~/Library/Preferences/`, `~/Library/Application Support/`, `~/Library/Logs/` 등에 `<MyApp>`, `<myagent>`, `<mydaemon>` 이름이 포함된 파일·폴더가 있을 수 있음. 필요하다면 검색 후 삭제하기

```
find ~/Library -iname "*<MyApp>*" -o -iname "*<myagent>*" -o -iname "*<mydaemon>*"
```

* `Operation not permitted`는 macOS 보안 정책(SIP 등)에 의해 접근이 차단된 디렉터리를 의미. 무시하거나, SIP 비활성화 후 작업해야 할 수도 있음.
* 일부 앱은 Group Containers나 Application Scripts 폴더에 추가 파일을 생성함. 발견 시 수동 삭제해야 함.
