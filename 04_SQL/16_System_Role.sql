-- 유저 만들기(계정 생성), 권한 부여
-- 1) 유저 만들기
-- ORACLE DB 생성하면 기본으로 만들어지는 관리자 계정 : SYSTEM 계정(SYS(최고관리자) 등 여러개 있음)

-- 예제 1)  USERTEST01 이라는 유저를 만들고 암호를 pass1 이라고 지정하세요
-- 사용법) CREATE USET 계정명 IDENTIFIED BY 비밀번호;
CREATE USER USERTEST01 IDENTIFIED BY pass1;

-- 예제 2) USERTEST01 유저에 접속 권한을 부여하세요
-- 사용법) GRANT 권한명 TO 유저명;
--          CREATE SESSION : 접속 권한
--          CREATE TABLE : 테이블 생성 권한
GRANT CREATE SESSION TO USERTEST01;

-- 공간에 대한 권한 주기 : 테이블(논리공간) -> 물리공간 할당
-- UNLIMITED : 무제한 공간 사용 가능
GRANT UNLIMITED TABLESPACE TO USERTEST01;

-- 롤(ROLE) : 자주 쓰는 권한들의 집합
-- 개발자가 자주 쓰는 권한을 모아둠
-- 접속 권한들의 모임 == CONNECT 롤
-- 테이블, 인덱스, 함수등을 사용하는 권한 모임 == RESOURCE 롤
-- 뷰(VIEW) 생성 권한이 없음
GRANT CONNECT, RESOURCE, CREATE VIEW TO USERTEST01;

-- 유저 삭제(DROP)
DROP USER USERTEST01;

-- 2) 동의어(SYNONYM)
-- 다른 데이터베이스나 다른 계정의 테이블,인덱스 등에 별명을 붙이는 것
-- 예제)
-- 샘플테이블(SYSTEM 계정) : SAMPLETBL
-- 컬럼 : MEMO VARCHAR2(50)
CREATE TABLE SAMPLETBL (MEMO VARCHAR2(50));
SELECT * FROM SAMPLETBL;

-- 데이터 2건 생성
INSERT INTO SAMPLETBL VALUES('오월은 푸르구나');
INSERT INTO SAMPLETBL VALUES('최선을 다합시다.');
COMMIT;

-- SYSTEM 계정의 테이블 -> 권한 부여 : SELECT (조회 권한)
-- SELECT 권한 주기
-- 사용법) GRANT SELECT ON 테이블명 TO 계정명;
GRANT SELECT ON SAMPLETBL TO SCOTT;

-- 동의어 생성 권한
GRANT CREATE SYNONYM TO SCOTT;


--------------------------------------------------------------------------------
-- 동의어 실습 (SCOTT 계정으로 변경)
--------------------------------------------------------------------------------

-- 다른 계정의 테이블 조회
-- 사용법) SELECT 컬럼명 FROM 계정명.테이블명;
SELECT * FROM SYSTEM.SAMPLETBL ST;
-- 위와 같이 다른 유저의 테이블 조회시 테이블명 길어짐
-- 동의어(별명) 생성으로 간결하게 만들어줌
CREATE SYNONYM SAMPLETBL FOR SYSTEM.SAMPLETBL;

SELECT * FROM SAMPLETBL; -- 동의어로 조회됨

-- 동의어 삭제하기
DROP SYNONYM SAMPLETBL;





