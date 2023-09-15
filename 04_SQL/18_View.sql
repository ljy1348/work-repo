-- 뷰(VIEW) : 하나 이상의 테이블이나 다른 뷰를 이용해서 생성하는 가상의 테이블
-- 활용) 1) 보안을 유지하기 위해 사용 : 사원테이블 - 급여 컬럼(비밀 유지 : 대외비)
--      2) SQL 문을 미리 만들어 놓고 재활용 : 코딩 생산성 향상
-- 1) 뷰 생성
-- 사용법) CREATE OR REPLACE VIEW 뷰이름(뷰컬럼1, 뷰컬럼2 ...)
--          AS SELECT 원본컬럼1, 원본컬럼2 ... FROM 원본테이블명;
CREATE OR REPLACE VIEW VW_EMP_JOB(사번, 사원이름, 부서번호, 담당업무)
AS SELECT ENO, ENAME, DNO, JOB FROM EMPLOYEE WHERE JOB LIKE 'SALESMAN%';

-- 2) 뷰 확인
-- 사용법) 테이블 이름 대신 뷰 이름으로 사용 가능하다.
SELECT * FROM VW_EMP_JOB;

-- 예제1) 부서테이블과 사원테이블을 조인한 결과를 뷰로 만들어서 출력하세요.
-- 뷰이름 : VW_EMP_COMPLEX
CREATE OR REPLACE VIEW VW_EMP_COMPLEX
AS SELECT EMP.*, DNAME, LOC
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO;

SELECT * 
FROM VW_EMP_COMPLEX;

-- 뷰 정보 확인 : 데이터 사전 : USER_VIEWS
SELECT * FROM USER_VIEWS;

-- 뷰에 INSERT 가능한가?
INSERT INTO VW_EMP_JOB
VALUES (1, 'NAME', 30, 'SALESMAN');

ROLLBACK;

-- 예제) 뷰에 그룹함수 써서 만들기
-- 부서별 급여합계, 급여평균을 출력하는 SQL문을 만드세요.
-- 컬럼명은 SAL_SUM, SAL_AVG
-- 뷰 이름 VW_EMP_SALARY
CREATE OR REPLACE VIEW VW_EMP_SALARY --(DNO, SAL_SUM, SAL_AVG)
AS SELECT DNO, SUM(SALARY) AS SAL_SUM, ROUND(AVG(SALARY)) AS SAL_AVG FROM EMPLOYEE
GROUP BY DNO;

SELECT * FROM VW_EMP_SALARY;

-- 뷰 삭제
DROP VIEW VW_EMP_SALARY;

-- 참고) 뷰에 INSERT 기본 가능(그룹함수 없을 때)
-- 뷰에 INSERT 기능 제한 : 옵션 추가(WITH READ ONLY)
-- 예제) 뷰에 INSERT 기능 제한
CREATE OR REPLACE VIEW VW_EMP_JOB 
AS SELECT ENO , ENAME, DNO, JOB 
FROM EMPLOYEE 
WHERE JOB LIKE 'MANAGER'
WITH READ ONLY;

SELECT * FROM VW_EMP_JOB;

INSERT INTO VW_EMP_JOB
VALUES (1, 'NAME', 30, 'SALESMAN');






