-- 테이블 생성
-- CRUD : 약어, DB 또는 실무 프로젝트에서 많이 사용하는 용어
-- 테이블 의미 : DB에서 자료를 저장하는 곳(논리적 공간)

-- 1) 테이블 생성 DDL( DATA DEFINITION LANGUAGE : 데이터 정의어(용어))
-- 자료형 : NUMBER(숫자), VARCHAR(문자열)
-- NUMBER : 실수, 정수 등
-- 예) NUMBER(2) <- 두자리수 정수(10~99)
--    NUMBER(2, 3) <- 2자리수 정수와 3자리수 실수(10.000 ~ 99.000)
--    NUMBER : 실수, 정수 무한 크기로 지정 가능
-- 단, 크기가 지정되면 그 크기 이하만 값을 넣을 수 있음
-- VARCHAR2 : 문자열, 가변자료형(VS CHAR : 고정자료형)
-- 예) VARCHAR2(4000) <- 최고 크기
--     VARCHAR2 : 1글자만 들어감 따라서 반드시 크기 정해줘야함
-- 사용법) CREATE TABLE 테이블명(
--        컬럼명 자료형(자료형 크기)
--        컬럼명2 자료형2(자료형 크기)
--        ...
--        );
CREATE TABLE DEPT(DNO NUMBER(2),
                DNAME VARCHAR2(14),
                LOC VARCHAR2(13));

-- 예제 1) 사원테이블 : EMP
--        컬럼명 : ENO(사원번호, 숫자(4,0)
--                ENAME (사원명, 문자형(10)
--                JOB(직위, 문자형(9)
--                MANAGER(관리자) 숫자(4,0)
--                HIREDATE 입사일, 날짜형 (DATE)
--                SALARY 월급, 숫자형(7,2)
--                COMMISSION 상여금, 숫자형(7,2)
--                DNO  부서번호,  숫자형(2,0)  
CREATE TABLE EMP(
                ENO NUMBER(4,0),
                ENAME VARCHAR2(10),
                JOB VARCHAR2(9),
                MANAGER NUMBER(4,0),
                HIREDATE  DATE,
                SALARY NUMBER(7,2),
                COMMISSION NUMBER(7,2),
                DNO  NUMBER(2,0) );
                
-- 실무 예 : 테이블 만들기 : 테이블 복사
-- 예제2 DEPARTMENT 테이블 복사하기 : DEPT_COPY 테이블을 만드세요
-- 1) 데이터까지 포함해서 복사
CREATE TABLE DEPT_COPY
AS
SELECT * FROM DEPARTMENT;

-- 2) 데이터 빼고 테이블 설계(디자인)만 복사
CREATE TABLE DEPT_COPY2
AS
SELECT * FROM DEPARTMENT
WHERE 1=2; -- 거짓 조건 아무거나 붙이면 디자인만 복사됨

-- 컬럼/테이블 주석 : 테이블/컬럼에 상세 설명을 붙일 수 있음
-- 예제 3) DEPT 테이블에 컬럼 주석 달기
-- 1) 테이블 주석 달기
-- 사용법) COMMENT ON TABLE 테이블명 IS '내용';
COMMENT ON TABLE DEPT IS '부서정보';

-- 2) 컬럼 주석 달기
-- 사용법) COMMENT ON COLUMN 테이블명.컬럼명 IS '내용';
COMMENT ON COLUMN DEPT.DNO IS '부서번호';
COMMENT ON COLUMN DEPT.DNAME IS '부서이름';
COMMENT ON COLUMN DEPT.LOC IS '부서위치';

-- 예제 3) 사원테이블의 EMP 의 테이블 주석/컬럼주석을 작성해서
--      만들어 주세요
--    보기 : EMP ( 테이블주석 : 사원정보 )
--       컬럼주석 : ENO(사원번호), 
--                 ENAME(사원명), 
--                 JOB(직위), 
--                 MANAGER(관리자), 
--                 HIREDATE(입사일), 
--                 SALARY(월급), 
--                 COMMISSION(상여금), 
--                 DNO(부서번호)
COMMENT ON TABLE EMP IS '사원정보';
COMMENT ON COLUMN EMP.ENO IS '사원번호';
COMMENT ON COLUMN EMP.ENAME IS '사원명';
COMMENT ON COLUMN EMP.JOB IS '직위';
COMMENT ON COLUMN EMP.MANAGER IS '관리자';
COMMENT ON COLUMN EMP.HIREDATE IS '입사일';
COMMENT ON COLUMN EMP.SALARY IS '월급';
COMMENT ON COLUMN EMP.COMMISSION IS '상여금';
COMMENT ON COLUMN EMP.DNO IS '부서번호';

-- 2) 테이블 삭제 : DROP TABLE 테이블명
DROP TABLE DEPT_COPY;

-- 예제) DEPT_COPY2 테이블 삭제
DROP TABLE DEPT_COPY2;

-- 추가(INSERT(==CREATE))/삭제(DELETE)/수정(UPDATE)
-- DML 문(DATA MANIPULATION LANGUAGE : 데이터 조작어)
-- 특징 : 명령문 실행 후 취소(ROLLBACK) 가능
-- 1) 테이블 복사 : DEPT_COPY (원본 : DEPARTMENT(부서))
CREATE TABLE DEPT_COPY
AS SELECT * FROM DEPARTMENT WHERE 1=2;

-- 예제 6) DEPT_COPY 테이블에 데이터 INSERT
-- 컬럼 : DNO(NUMBER(2,0)), DNAME(VARCHAR2(14)), LOC(VARCHAR2(13))
-- 사용법) INSERT INTO 테이블명(컬럼1, 컬럼2, ...)
--        VALUES(컬럼1의 값, 컬럼2의 값, ...);
INSERT INTO DEPT_COPY(DNO, DNAME, LOC)
VALUES(10, 'ACCOUNTING', 'NEW YORK');

-- DML문 취소 명령어
ROLLBACK;

-- DML문 영구 반영
-- 의미 : 영구 반영하면 다른 유저가 현재 생성한/수정/삭제한 데이터를 볼 수 있음
COMMIT; -- COMMIT 하면 ROLLBACK 명령어 먹히지 않음

-- 예제 7) 임시적으로 NULL 값을 입력해서 INSERT 하기
-- 1) 암묵적으로 NULL 값 INSERT하기
INSERT INTO DEPT_COPY(DNO, DNAME)
VALUES(30, 'SALES');

SELECT * FROM DEPT_COPY;
-- 2) 명시적으로 NULL 값 INSERT하기
INSERT INTO DEPT_COPY(DNO, DNAME, LOC)
VALUES(40, 'OPERATIONS', NULL);

-- 연습 2) DEPT_COPY 테이블에 50부서 'COMPUTING' 만들고
--        LOC는 ' ' 공백으로 INSERT하세요.
INSERT INTO DEPT_COPY(DNO, DNAME, LOC)
VALUES(50, 'COMPUTING', ' ');
COMMIT;

-- 연습용 테이블 복사 : EMP_COPY (원본 : EMPLOYEE)
CREATE TABLE EMP_COPY
AS SELECT * FROM EMPLOYEE WHERE 1=2;

-- 연습 2) EMP_COPY 테이블에 데이터 입력하기
--  ENO - 7000, ENAME - 'CANDY', JOB - 'MANAGER',
--  HIREDATE - '2012/05/01', DNO - 10
INSERT INTO EMP_COPY(ENO, ENAME, JOB, HIREDATE, DNO)
VALUES(7000, 'CANDY', 'MANAGER', '2012/05/01', 10);

SELECT * FROM EMP_COPY;
COMMIT;

-- 예제 8) 명시적으로 날짜형으로 변환해서 INSERT 하기
-- 날짜 포맷 : 'YYYY-MM-DD HH24:MI:SS'
INSERT INTO EMP_COPY(ENO, ENAME, JOB, HIREDATE, DNO)
VALUES(7010, 'CANDY2', 'MANAGER', TO_DATE('2012/05/01', 'YYYY/MM/DD HH24:MI:SS'), 10);
COMMIT;

-- 예제 9) 현재날짜 데이터 넣기
INSERT INTO EMP_COPY(ENO, ENAME, JOB, HIREDATE, DNO)
VALUES(7020, 'CANDY3', 'MANAGER', SYSDATE, 10);

-- 예제 10) 다른 테이블의 데이터만 복사하기
SELECT * FROM DEPT_COPY;
-- 빠른 삭제 : DELETE 문 보다 속도 빠름
-- 전체 삭제만 됨, 취소(ROLLBACK) 불가능
-- TRUNCATE TABLE 테이블명; 
TRUNCATE TABLE DEPT_COPY;

-- 다른 테이블의 데이터 복사(원본데이터 : DEPARTMENT(부서))
-- 사용법) INSERT INTO 복사될테이블명
--        SELECT * FROM 원본테이블명;
INSERT INTO DEPT_COPY
SELECT * FROM DEPARTMENT;
-- 결과 확인
SELECT * FROM DEPT_COPY;
-- 영구 반영
COMMIT;




