-- 시퀀스와 인덱스
-- 1. 시퀀스(Sequence) : 호출(실행)할 때마다 자동적으로 숫자를 증가시키는 것(객체)
-- 목적) 기본키 용도로 사용(중복 없음, NULL 없음)
-- 기본키로 사용할 컬럼이 없을 때 시퀀스에 기본키 할당하여 사용
-- 활용 예) 자유게시판 : No 에 사용
--          고객 : 고객번호 등
-- 실무 용어) 채번 : 자동적으로 1씩 증가시키는 값(1 ~ N : 시퀀스 대상)
-- 예제 1) SAMPLE_SEQ 시퀀스를 1부터 시작해서 10씩 증가시키는 시퀀스를 만드세요
-- CREATE SEQUENCE 시퀀스명
-- INCREMENT BY 숫자(증가할 값)
-- START WITH 시작숫자
-- MINVALUE 최소값
-- MAXVALUE 최대값
CREATE SEQUENCE SAMPLE_SEQ
INCREMENT BY 10
START WITH 1;

-- 사용법) 1) 시퀀스명.NEXTVAL : 시퀀스가 증가함
SELECT SAMPLE_SEQ.NEXTVAL FROM DUAL;

-- 현재 증가된 시퀀스의 값을 확인 : NEXTVAL 최초 실행 후 사용 가능
-- 사용법) 시퀀스명.CURRVAL
SELECT SAMPLE_SEQ.CURRVAL FROM DUAL;

-- 시스템 테이블들 : 시퀀스 확인용 테이블(뷰) : 데이터사전(DICTIONARY VIEW)
SELECT *
FROM USER_SEQUENCES;

-- 예제 2) 임시테이블에 시퀀스 INSERT 하기
-- 임시 테이블(구조) : 부서(DEPARTMENT) 복사 -> DEPT_TEMP
CREATE TABLE DEPT_TEMP
AS SELECT * FROM DEPARTMENT
WHERE 1=2;
-- 시퀀스 INSERT
-- INSERT INTO 테이블명(컬럼명1, 컬럼명2 ...) VALUES (값1,값2...)
-- 에서 원하는 컬럼의 값에 시퀀스명.NEXTVAL
INSERT INTO DEPT_TEMP(DNO)
VALUES (SAMPLE_SEQ.NEXTVAL);

COMMIT;


-- INDEX
-- 사용) 컬럼에 인덱스를 지정하여 사용
-- 목적) 조회속도 향상을 위해 조건에 해당하는 컬럼에 인덱스를 생성함(지정함)
-- 기본키(PK) : UNIQUE + NOT NULL + INDEX 자동 생성

-- 예제 3) 사이트에서 조회시 이름검색이 많은데 속도가 느리다고 한다.
-- 해결) ENAME 컬럼에 인덱스 생성 -> 조회속도 향상
-- 명명법) IX_테이블명_컬럼명, IDX_테이블명_컬럼명
-- 사용법) CREATE INDEX 인덱스이름 ON 테이블이름(컬럼이름)
CREATE INDEX IX_EMPLOYEE_ENAME
ON EMPLOYEE(ENAME);

-- 속도 느린 대상 SQL문
SELECT * FROM EMPLOYEE WHERE ENAME LIKE '%SCOTT%'; -- 이 부분이 INDEX를 만들곳

-- 인덱스 조회
SELECT * FROM USER_IND_COLUMNS;

-- 인덱스 삭제하기(DROP)
DROP INDEX IX_EMPLOYEE_ENAME;

-- 인덱스를 만들어야 하는 기준
-- 목적) 조회속도 향상
-- 1) 테이블에 행의 갯수가 많을 경우(데이터 건수가 많을 경우) 약 10만건 이상이면 고민
-- 2) WHERE에 해당 컬럼이 많이 등장할 경우
-- 3) 테이블 조인의 공통컬럼으로 사용될 경우

-- 특수 인덱스
-- 1) 결합 인덱스 : 컬럼 여러개를 1번에 인덱스로 지정
-- 예) 아래 조회속도가 느림(가정)
--      조회 조건이 고정된다고 가정
SELECT * FROM DEPARTMENT
WHERE DNAME = 'SALES'
AND LOC = 'NEW YORK';

-- 결합 인덱스 만들기
-- 사용법) CREATE INDEX 인덱스명 ON 테이블명(컬럼1, 컬럼2 ...);
CREATE INDEX IX_DEPT_COM ON DEPARTMENT(DNAME, LOC);

-- 2) 함수 인덱스 : 함수에 인덱스 걸기
SELECT * FROM EMPLOYEE
WHERE SALARY = SALARY * 12;

-- 함수 인덱스(수식 인덱스) 
CREATE INDEX IX_EMP_ANNSAL ON EMPLOYEE(SALARY*12);













