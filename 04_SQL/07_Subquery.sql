-- 서브쿼리 : 단일행 서브쿼리(1건만 나옴)
-- 예제 1) SCOTT 사원보다 급여를 많이 받는 사원을 찾기 위한 SQL문을 작성하세요.
-- 해결 : 1-1) 사원테이블에서 SCOTT 사원의 급여를 찾은 후 
--       1-2) 그 급여를 비교해서 많이 받는 사원을 추가로 찾아야한다.
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE ENAME = 'SCOTT'; -- <- 급여 3000

-- 사원 찾기
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE SALARY > 3000;

-- 문제점) 성능 저하(쿼리 2번 실행)
-- 해결법) SUBQUERY 활용
-- 주의점) WHERE의 컬럼명과 서브쿼리의 컬럼명이 같아야 한다.
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE SALARY > (
SELECT SALARY
FROM EMPLOYEE
WHERE ENAME = 'SCOTT');

-- 예제 1) SCOTT 사원과 동일한 부서에서 근무하는 사원 출력하기
-- WHERE 에서 사용
SELECT ENAME
FROM EMPLOYEE
WHERE DNO = (
SELECT DNO
FROM EMPLOYEE
WHERE ENAME = 'SCOTT') AND NOT ENAME='SCOTT';

-- 예제 2) 30번 부서에서 최소급여를 구한 후 그 최소 급여보다 부서별 최소 급여가 큰 부서만 출력하세요.
-- GROUP BY 의 HAVNIG에서 사용
SELECT DNO, MIN(SALARY)
FROM EMPLOYEE
GROUP BY DNO
HAVING MIN(SALARY) > (
SELECT MIN(SALARY)
FROM EMPLOYEE
WHERE DNO = 30);

-- 3) 특수한 경우 아래처럼 사용도 가능
-- SELECT에서 사용한 경우
SELECT 2*3, (SELECT 4*2 FROM DUAL)
FROM DUAL;
-- FROM에서도 사용이 가능하다.
SELECT  EMP.*
FROM (SELECT ENAME, ENO FROM EMPLOYEE) EMP;


-- 2) 다중 행 서브쿼리
-- 예제 4) 부서별 최소 급여를 받는 사원 중에서 사원 번호와 이름을 출력하세요.
-- (1) 부서별 최소 급여
SELECT MIN(SALARY)
FROM EMPLOYEE
GROUP BY DNO;

-- (2) 사원 번호와 이름을 출력(950,1300,800)
SELECT ENAME, ENO
FROM EMPLOYEE
WHERE SALARY IN (950,1300,800);

-- 다중 행 서브쿼리
SELECT ENAME, ENO
FROM EMPLOYEE
WHERE SALARY IN (SELECT MIN(SALARY)
                FROM EMPLOYEE
                GROUP BY DNO);
                
