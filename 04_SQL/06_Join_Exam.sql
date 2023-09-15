-- 조인 연습문제
-- 1) = 조인을 이용해서 SCOTT 사원의 부서번호와 부서이름을 출력하시오.
SELECT ENAME, DEP.DNO, DEP.DNAME
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO AND ENAME = 'SCOTT';

-- 2) 모든 사원의 사원이름과 그 사원이 소속된 부서이름과 지역명을 출력하시오
SELECT ENAME, DEP.DNAME, LOC
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO;

-- 3) 10번 부서에 속하는 사원번호에 대해 직급과 지역명을 출력하시오.
SELECT ENO, ENAME, JOB, LOC
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO AND EMP.DNO = 10;

-- 4) 커미션을(COMMISSION) 받는 모든사원의 이름(ENAME), 
--      부서이름(DNAME), 지역명(LOC)을 출력하시오.
SELECT ENAME, DNAME, LOC
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
AND COMMISSION IS NOT NULL;

-- 5) = 조인과 Like 검색(와일드카드(%))를 사용하여 
--     이름에 A가 포함된 모든 사원의 이름과(ENAME)
--    부서명을(DNAME) 출력하시오.
SELECT ENAME, DNAME
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
AND ENAME LIKE('%A%');

-- 6) NEW YORK 에 근무하는(LOC) 모든 사원의 이름(ENAME), 
--     업무(JOB), 부서번호(DNO) 
--     및 부서명을(DNAME) 출력하시오.
-- 사원테이블 : EMPLOYEE
-- 부서테이블 : DEPARTMENT
SELECT ENAME, JOB, EMP.DNO, DNAME
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
AND LOC='NEW YORK';

-- 고급 응용 문제
-- 7) 각 부서에 대해 부서번호, 부서명, 위치 별로
-- 사원수, 부서 내의 모든 사원의 평균 급여를 출력하세요.
-- 컬럼별칭을 사용해서 부서번호, 부서명, 위치, 사원수 출력하세요.
SELECT EMP.DNO AS 부서번호, DNAME AS 부서명, LOC AS 위치
        , COUNT(EMP.ENAME) AS 사원수
        , ROUND(AVG(SALARY),2) AS 평균급여
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
GROUP BY EMP.DNO, DNAME, LOC;

-- 8) 각 부서명(DNAME)별, 급여별(SALARY) 사원수(COUNT)를 출력하세요
--   단, 부서명, 급여, 사원수의 별칭을 써서 출력하세요
-- 사원테이블 : EMPLOYEE
-- 부서테이블 : DEPARTMENT
SELECT DNAME AS 부서명, SALARY AS 급여
        , COUNT(ENAME) AS 사원수
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
GROUP BY DNAME, SALARY
ORDER BY DNAME;

-- 9) 각 부서별, 담당업무별, 급여 총액에서 5000 이상인 결과만 출력하세요
SELECT DNAME, JOB, SUM(SALARY)
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
GROUP BY JOB, DNAME
HAVING SUM(SALARY) >= 5000;

-- 10) 급여가(SALARY) 2000 초과인 사원들의 
--  부서번호(DNO), 부서명(DNAME), 사원번호(ENO), 사원명(ENAME), 급여를 출력하세요
SELECT EMP.DNO, DNAME, ENO, ENAME, SALARY
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
AND SALARY > 2000;

-- 11 각 부서별(DNO) 평균 급여(SALARY), 최대급여, 최소급여, 사원수를 출력해 보세요
SELECT EMP.DNO AS 부서
        , ROUND(AVG(SALARY),2) AS 평균급여
        , MAX(SALARY) AS 최대급여
        , MIN(SALARY) AS 최소급여
        , COUNT(EMP.DNO) AS 사원수
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
GROUP BY EMP.DNO
ORDER BY EMP.DNO;

-- 12) 부서번호로 RIGTH OUTER JOIN 하여 모든 부서 정보와 사원정보를 출력하세요.
-- 단 부서번호, 사원명으로 오름차순 정렬하세요.
SELECT EMP.*, DEP.*
--FROM EMPLOYEE EMP
--    ,DEPARTMENT DEP
--WHERE EMP.DNO(+) = DEP.DNO ;
FROM EMPLOYEE EMP RIGHT OUTER JOIN DEPARTMENT DEP 
ON (EMP.DNO(+) = DEP.DNO) 
ORDER BY EMP.DNO, ENAME;


