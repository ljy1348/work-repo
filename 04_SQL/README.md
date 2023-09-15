# 도커 설치 및 윈도우 가상화 설정 : 
# 도커 (요즘 뜨는 기술) : 가상화 기술
# 윈도우즈 설치된 pc : 윈도우에서 실행되는 프로그램만 사용이 가능
# 기업) 리눅스/유닉스 : 리눅스/유닉스에서 실행되는 프로그램만 사용 가능
# (자바 특징 : 윈도우/리눅스/유닉스 모두 실행됨 - JVM)
# 도커를 이용해서 여러 운영체제를 바꿔 가면서 실행시킬 수 있음
# 도커로 오라클을 설치

# 도커 설치 및 윈도우 가상화 설정
# 1) 윈도우 가상화 설정
#    제어판 - 검색창 - windows 기능 켜기/끄기 - Hyper-V , Linux용 windows 하위 시스템 체크 - 컴퓨터 재부팅 - cmd 실행(관리자) - wsl --install(리눅스 설치) - wsl --set-default-version 2 - 컴퓨터 리부팅

# 2) 도커 데스크탑 다운로드(무료, 기업(상용)) 및 도커허브 회원가입
#   - 도커허브     : https://hub.docker.com/
#   - 도커데스크탑 : https://www.docker.com/products/docker-desktop/ 

# 3) 오라클 접속툴 : sql-developer 다운로드
#    - SQL Developer 23.1 다운로드 https://www.oracle.com/database/sqldeveloper/technologies/download/

# 4) 도커에서 오라클 이미지 다운로드
#    - 도커 데스크탑 실행 : 왼쪽탭 images 클릭
#    - 중앙 버튼 클릭 후 : Kangtaegyung  검색 : kangtaegyung/oraclexe-18c
#    - 위의 목록 선택 후 PULL 버튼 클릭(도커허브 사이트에서 다운로드됨)

# 5) 오라클 설치 및 실행 
#   - 관리자 명령 프롬프트에서 아래 명령어 실행
#   C:> docker run --name oraclexe-18c -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=Ds1234567890 kangtaegyung/oraclexe-18c

#   - 도커 container 왼쪽탭에서 설치하면 목록이 보임
#   - 도커 오라클 실행 / 중지 : Action 에 아이콘 클릭

# DBMS 사용하려면 로그인해서 사용해야함
# 기타 : 오라클 관리자 계정 : system
#                 패스워드 : Ds1234567890
#                  DB 이름 : xepdb1
# 패스워드 대소문자 구분함(대문자,소문자 12자 이상 사용해야함)

# 6) 데이터베이스 접속 툴 - oracle SQL Developer
# 새로 만들기(데이터 베이스 접속 선택)
# 사용자 이름 : 오라클 관리자 계정, 비밀번호 : 오라클 패스워드
# 호스트 이름 : url, 포트 : 1521, 서비스 이름 : db 이름(xepdb1)
# 메뉴 - 도구 - 환경설정 - 인코딩 - UTF-8 적용

# 개발자 계정 생성 - 개발시 관리자 계정은 사용하지 않음
# sql 주석 (ctrl+/)
# CREATE USER SCOTT IDENTIFIED BY "!Ds1234567890"
# DEFAULT TABLESPACE USERS
# TEMPORARY TABLESPACE TEMP;
# 명령문 실행(ctrl+enter)

# CREATE USER 계정명 IDENTIFIED BY "비밀번호"

# 유저가 사용할 기본 공간 : USERS
# DEFAULT TABLESPACE USERS

# 유저가 사용할 임시 공간 : TEMP
# TEMPORARY TABLESPACE TEMP

# 권한 부여
# GRANT CONNECT, RESOURCE, CREATE VIEW TO SCOTT;
# GRANT UNLIMITED TABLESPACE TO SCOTT;

# connect : 접속 권한
# resource : 테이블 사용할 권한
# create view : view를 만들 권한
# unlimited tablespace : 테이블 생성시 사용할 물리 공간을 무한으로 사용하는 권한

# 개발자 계정 만들면 새로 만들기로 개발자 계정으로 접속(설치 할때 외에 관리자 계정 사용 절대 금지)


