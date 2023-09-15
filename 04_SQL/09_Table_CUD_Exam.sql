-- CUD 연습문제
-- 1) EMPLOYEE 테이블의 구조만 복사하여
-- EMP_INSERT 란 이름의 빈 테이블을 만드시오.
CREATE TABLE EMP_INSERT
AS SELECT * FROM EMPLOYEE
WHERE 1 = 2;

-- 2) 본인을 EMP_INSERT 테이블에 추가하되 SYSDATE를 이용해서 입사일을 
--    오늘로 입력하세요.
--   예) ENO(사번) : 1, ENAME(사원명) : 'KTG', JOB(직위): 'STUDENT',
--      MANAGER(관리자) : NULL, HIREDATE(입사일) : SYSDATE, 
--      SALARY(월급): 2700, COMMISSION(상여금): 230, DNO(부서번호):10
INSERT INTO EMP_INSERT(ENO, ENAME, JOB, MANAGER, HIREDATE, SALARY, COMMISSION, DNO)
VALUES (1, 'KTG', 'STUDENT', NULL, SYSDATE, 2700, 230, 10);

-- 3) EMP_INSERT 테이블에 옆(아시는분) 사람을 추가하되 
--    TO_DATE 함수를 이용해서 입사일을 어제로 입력하세요.
-- 참고) INSERT시 VALUES에 모든 컬럼 데이터가 순서(테이블에서 컬럼순서)대로 적혀있다면
-- 컬럼명 생략 가능
-- 예) INSERT INTO EMP_INSERT
--      VALUES (2, 'LJH', 'STUDENT', NULL, TO_DATE(SYSDATE-1), 2700, 230, 10);
INSERT INTO EMP_INSERT(ENO, ENAME, JOB, MANAGER, HIREDATE, SALARY, COMMISSION, DNO)
VALUES (2, 'LJH', 'STUDENT', NULL, TO_DATE(SYSDATE-1), 2700, 230, 10);

SELECT * FROM EMP_INSERT;
COMMIT;

-- 4) EMPLOYEE 테이블의 구조와 내용을 복사하여 
--    EMP_COPY란 이름의 테이블을 만드세요.
-- 단, EMP_COPY 테이블이 있으면 테이블을 삭제하고 다시 만드세요
DROP TABLE EMP_COPY;

CREATE TABLE EMP_COPY
AS SELECT * FROM EMPLOYEE;

SELECT * FROM EMP_COPY;


-- 5) 사원번호가 7788인 사원의 부서번호를 10번으로 수정하세요.
--   ( 대상테이블 : EMP_COPY )
UPDATE EMP_COPY
SET DNO = 10
WHERE ENO = 7788;

-- 6) 사원번호가 7788의 담당 업무(JOB) 및 급여를(SALARY) 
--    사원번호 7499의 담당 업무(JOB) 및 급여와(SALARY) 
--    일치하도록 갱신하세요.( 대상테이블 : EMP_COPY )
--  힌트 : UPDATE 서브쿼리
UPDATE EMP_COPY
SET (SALARY, JOB) = (SELECT SALARY, JOB
                    FROM EMP_COPY
                    WHERE ENO = 7499)
WHERE ENO = 7788;

COMMIT;

-- 7) 사원번호 7369와 업무가 동일한 모든 사원의 부서번호를 
-- 사원 7369의 현재 부서번호로 갱신하세요.
UPDATE EMP_COPY
SET DNO = (SELECT DNO
            FROM EMP_COPY
            WHERE ENO = 7369)
WHERE JOB = (SELECT JOB
            FROM EMP_COPY
            WHERE ENO = 7369);
            
-- 8) DEPARTMENT 테이블의 구조와 내용을 복사하여
-- DEPT_COPY란 이름의 테이블을 만드세요.
DROP TABLE DEPT_COPY;
CREATE TABLE DEPT_COPY
AS SELECT * FROM DEPARTMENT;

SELECT * FROM DEPT_COPY;

-- 9) DEPT_COPY테이블에서 부서명이 RESEARCH인 부서를 제거하세요.
DELETE DEPT_COPY
WHERE DNAME = 'RESEARCH';

-- 10) DEPT_COPY 테이블에서 부서 번호가(DNO) 10이거나 40인 부서를 제거하세요.
DELETE DEPT_COPY
WHERE DNO IN (10, 40);

COMMIT;