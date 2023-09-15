-- 문제 1) 사원 테이블에서 JOB이 MANAGER인 사원의 데이터를 뽑아서 ENAME으로 오름차순 정렬
SELECT * FROM EMPLOYEE
WHERE JOB='MANAGER'
ORDER BY ENAME;


-- 문제 2) 사원 테이블에서 JOB이 CLERK인 사원의 데이터를 ENAME으로 내림차순 정렬
SELECT * FROM EMPLOYEE
WHERE JOB='CLERK'
ORDER BY ENAME DESC;

-- 문제 3) 덧셈 연산자를 이용하여 모든 사원에 대해 300 의 급여 인상을 계산 한 후 
-- 사원의 이름, 급여, 인상된 급여를 출력하세요
SELECT ENAME,SALARY,SALARY+300 AS "인상된 급여" FROM EMPLOYEE;

-- 문제 4) 사원의 이름, 급여, 연간 총수입을 총수입이 많은것부터 작은순으로 출력하세요.
SELECT ENAME
       ,SALARY
       ,SALARY*12+100 AS "연간 총수입" 
FROM EMPLOYEE
ORDER BY "연간 총수입" DESC;

-- 문제 5) 급여가 2000을 넘는 사원의 이름과 급여를 급여가 많은것부터 출력하세요.
SELECT ENAME,SALARY FROM EMPLOYEE
WHERE SALARY>2000
ORDER BY SALARY DESC;

-- 문제 6) 사원번호가 7788인 사원의 이름과 부서번호를 출력하세요
SELECT ENAME, DNO FROM EMPLOYEE
WHERE ENO=7788;

-- 문제 7) 급여가 2000에서 3000사이에 포함되지 않는 사원의 이름과 급여 출력
SELECT ENAME, SALARY FROM EMPLOYEE
WHERE SALARY NOT BETWEEN 2000 AND 3000;

-- 문제 8) 1981년 2월 20일 부터 1981년 5월 1일 사이에 입사한 사원의 
-- 이름(ENAME), 담당 업무(JOB), 입사일(HIREDATE)을 출력하세요
-- 사원테이블 : EMPLOYEE
SELECT ENAME, JOB, HIREDATE FROM EMPLOYEE
WHERE HIREDATE BETWEEN '81/02/20' AND '81/05/01';


-- 문제 9)부서번호(DNO)가 20 및 30에 속한 (이거나,또는 OR, IN)
--       사원의 이름(ENAME)과 부서번호(DNO)를 출력하되
--        이름을 기준으로 내림차순 출력하세요(정렬)
-- 사원테이블 : EMPLOYEE
SELECT ENAME, DNO FROM EMPLOYEE
--WHERE DNO IN(20,30)
WHERE DNO = 20 OR DNO = 30
ORDER BY ENAME DESC;

-- 문제 10) 급여가 2000에서 3000사이에 포함되고 부서번호가 20 또는 30인 사원의 
--           이름,급여,부서번호를 출력하되 이름(오름차순)으로 출력하시오
SELECT ENAME,SALARY,DNO FROM EMPLOYEE
WHERE SALARY BETWEEN 2000 AND 3000 
AND DNO IN (20,30)
ORDER BY ENAME;

-- 문제 11) 1981년도에 입사한 사원의 이름과 입사일을 출력하세요
--         단, LIKE 연산자를 사용하세요
SELECT ENAME,HIREDATE FROM EMPLOYEE
WHERE HIREDATE LIKE '81%';

-- 문제 12) 관리자가 없는 사원의 이름과 담당업무를 출력하세요.
SELECT ENAME,JOB FROM EMPLOYEE
WHERE MANAGER IS NULL;

-- 문제 13) COMMISSION 을 받을 수 있는 자격이 되는 사원의 이름,급여,상여금을 출력하되
--         급여 및 커미션을 기준으로 내림차순 정렬
SELECT ENAME, SALARY, COMMISSION FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL
ORDER BY SALARY DESC,COMMISSION DESC;

-- 문제 14) 이름(ENAME)의 세번째 문자가 R인 사원의 이름을 표시하세요.
-- 사원테이블 : EMPLOYEE
SELECT ENAME FROM EMPLOYEE
WHERE ENAME LIKE '__R%';

-- 문제 15) 이름에(ENAME) A와(1번조건) E를(2번조건) 모두 포함하고 있는 
--         사원의 이름을 표시하세요.
-- 사원 테이블 : EMPLOYEE
SELECT ENAME FROM EMPLOYEE
WHERE ENAME LIKE '%A%' AND ENAME LIKE '%E%';

-- 문제 16) JOB이 CLERK 또는 SALESMAN 이면서 급여가 1600,950,1300이 아닌 사원의
-- 이름, JOB, SALARY 를 출력하시오
SELECT ENAME, JOB,SALARY FROM EMPLOYEE
WHERE JOB IN ('CLERK','SALESMAN')
AND SALARY NOT IN (1600,950,1300);

-- 문제 17) COMMISSION이 500 이상인 이름,급여,상여금 출력
SELECT ENAME, SALARY, COMMISSION FROM EMPLOYEE
WHERE COMMISSION >= 500;

-- 문제 18) 사원테이블에서(EMPLOYEE) 사원 이름이(ENAME) S 로 끝나는 사원 데이터를 
-- 모두 출력하는 SQL 문을 작성해 보세요
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '%S';


