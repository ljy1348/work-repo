-- 서브쿼리 연습문제
-- 1) 사원번호가 7788인 사원과 담당 업무가 같은 사원을 이름, 업무 표시하세요.
SELECT ENAME, JOB
FROM EMPLOYEE
WHERE JOB = (SELECT JOB
            FROM EMPLOYEE
            WHERE ENO = 7788);

-- 2) (사원번호가(ENO) 7499인 사원)보다 
--   급여가(SALARY) 많은 사원을(사원이름(ENAME),담당업무(JOB)) 표시하세요. 
-- 대상 : EMPLOYEE
SELECT ENAME, JOB
FROM EMPLOYEE
WHERE SALARY > (SELECT SALARY
                FROM EMPLOYEE
                WHERE ENO = 7499);

-- 3) (최소(MIN) 급여를(SALARY) 받는 사원)의 이름,(ENAME) 
--    담당 업무(JOB) 및 급여(SALARY)를 표시하세요.
-- 대상 : EMPLOYEE
SELECT ENAME, JOB, SALARY
FROM EMPLOYEE
WHERE SALARY = (SELECT MIN(SALARY)
                FROM EMPLOYEE);

-- 4) 평균 급여가 가장 적은 사원의 담당 업무를 찾아
-- 직급과 평균 급여를 표시하세요.
SELECT JOB, ROUND(AVG(SALARY),1)
FROM EMPLOYEE
GROUP BY JOB
HAVING ROUND(AVG(SALARY),1) = (SELECT MIN(ROUND(AVG(SALARY),1))
                FROM EMPLOYEE
                GROUP BY JOB);

-- 5) (각 부서의 최소(MIN) 급여(SALARY))를 받는 
--   사원의 이름(ENAME), 급여(SALARY), 부서번호(DNO)를 표시하세요.
SELECT ENAME, SALARY, DNO
FROM EMPLOYEE
WHERE SALARY IN (SELECT MIN(SALARY)
                FROM EMPLOYEE
                GROUP BY DNO);
                
-- 6) 매니저가(MANAGER) 없는 사원의 이름을(ENAME) 표시하세요.
SELECT ENAME
FROM EMPLOYEE
WHERE ENAME IN (SELECT ENAME
                FROM EMPLOYEE
                WHERE MANAGER IS NULL);
                
-- 7) 매니저가(MANAGER) 있는 사원의 이름을(ENAME) 표시하세요.
-- 단, 서브쿼리를 이용하세요
-- 사원테이블 : EMPLOYEE
SELECT ENAME
FROM EMPLOYEE
WHERE ENO IN (SELECT ENO
                FROM EMPLOYEE
                WHERE MANAGER IS NOT NULL);


-- 8) (BLAKE와 동일한 부서(DNO))에 속한 사원의 이름과(ENAME) 
--    입사일을(HIREDATE) 표시하는 질의를 작성하세요.
-- 단, BLAKE는 제외
-- 사원테이블 : EMPLOYEE
SELECT ENAME, HIREDATE
FROM EMPLOYEE
WHERE DNO = (SELECT DNO
            FROM EMPLOYEE
            WHERE ENAME='BLAKE' ) AND ENAME <> 'BLAKE';


-- 9) 급여가(SALARY) (평균(AVG) 급여(SALARY))보다 많은 사원들의 
--    사원번호와(ENO) 
--    이름을(ENAME) 표시하되 결과를 급여(SALARY)에 대해서
--    오름차순으로 정렬하세요.
-- 사원테이블 : EMPLOYEE
SELECT ENO, ENAME
FROM EMPLOYEE
WHERE SALARY > (SELECT AVG(SALARY)
                FROM EMPLOYEE)
ORDER BY SALARY;

-- 10) 이름에 K가 포함된 사원과 같은 부서에서 일하는 사원의 사원번호와 이름을 표시하라.
SELECT ENO, ENAME
FROM EMPLOYEE
WHERE DNO IN (SELECT DNO
            FROM EMPLOYEE
            WHERE ENAME LIKE '%K%');
            
-- 11) 부서 위치가 DALLAS인 사원의 이름과 부서번호 및 담당 업무를 표시하세요.
SELECT ENAME, DNO, JOB
FROM EMPLOYEE EMP
WHERE DNO IN (SELECT DNO
                FROM DEPARTMENT
                WHERE LOC='DALLAS');
                
SELECT ENAME, EMP.DNO, JOB
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO AND LOC = (SELECT LOC
                                    FROM DEPARTMENT
                                    WHERE LOC = 'DALLAS');

-- 12)  (KING에게) 보고하는 사원의 이름과(ENAME) 급여를(SALARY) 표시하세요.
-- 힌트 : 보고하는 사원의 매니저가(MANAGER) KING 임(7839)
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE MANAGER = (SELECT ENO
                FROM EMPLOYEE
                WHERE ENAME = 'KING');
                
-- 13) RESEARCH 부서의 사원에 대한 부서번호, 사원이름, 및 담당 업무를 표시하세요.
SELECT DNO, ENAME, JOB
FROM EMPLOYEE
WHERE DNO = (SELECT DNO
            FROM DEPARTMENT
            WHERE DNAME = 'RESEARCH');
            
--14) 평균 급여보다 많은 급여를 받고 이름에 M이 포함된 사원과 같은 부서에서 근무하는
-- 사원의 사원번호, 이름, 급여를 표시하세요.
SELECT ENO, ENAME, SALARY
FROM EMPLOYEE
WHERE SALARY > (SELECT AVG(SALARY)
                FROM EMPLOYEE)
AND DNO IN (SELECT DNO
            FROM EMPLOYEE
            WHERE ENAME LIKE '%M%');
            
-- 15) 평균(AVG) 급여가(SALARY) 가장 적은(MIN) 업무를(JOB) 찾으세요.
--  출력은 담당업무(JOB), 평균(AVG)급여(SALARY) 출력하세요
--  설명) 담당 업무별(JOB) 평균(AVG) 급여를(SALARY) 찾아서 
--       그중에서 가장 평균 급여가 적은(MIN) 업무를 찾으면 됨
SELECT JOB, AVG(SALARY)
FROM EMPLOYEE
GROUP BY JOB
HAVING AVG(SALARY) = (SELECT MIN(AVG(SALARY))
                    FROM EMPLOYEE
                    GROUP BY JOB);
                    
-- 16) 전체 사원중 ALLEN과 같은 직위인 사원들의 직위, 사원번호, 사원명, 급여, 부서번호
-- 부서명 출력하시오.
SELECT EMP.JOB, EMP.ENO, EMP.ENAME, EMP.SALARY, EMP.DNO, DEP.DNAME
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO AND JOB = (SELECT JOB
            FROM EMPLOYEE
            WHERE ENAME = 'ALLEN');
            
-- 17) 10번 부서에 근무하는 사원 중 30번 부서에는 존재하지 않는 직책을 가진 사원들의
-- 사원번호(ENO), 사원명(ENAME), 직위(JOB), 부서번호(DNO), 부서명(DNAME), 
-- 부서위치를(LOC) 출력하세요
-- 힌트) 조인 + 서브쿼리
SELECT ENO, ENAME, JOB, EMP.DNO, DNAME, LOC
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
AND NOT JOB IN (SELECT JOB
                FROM EMPLOYEE
                WHERE DNO = 30)
AND EMP.DNO = 10;






