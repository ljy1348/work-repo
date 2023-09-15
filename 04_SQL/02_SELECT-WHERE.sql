-- 데이터를 조건을 붙여 조회하기
-- 예제 1) 월급(SALARY)이 1500 이상인 사원 조회하기
-- 사용법 : SELECT 컬럼명, 컬럼명2 ... FROM 테이블명
--         WHERE 조건절(컬럼명 > 값)
-- 비교연산자 : > , < , >= , <= , =(같다), <>(같지 않다)
SELECT ENAME, SALARY FROM EMPLOYEE
WHERE SALARY > 1500;

-- 예제2) 10번 부서의 소속 사명
SELECT * FROM EMPLOYEE
WHERE DNO=10;

-- 예제 3) 사원명(ENAME) 이 SCOTT인 사원을 출력하세요
SELECT * FROM EMPLOYEE
WHERE ENAME='SCOTT';

-- 예제 4) 입사일(HIREDATE)이 '1981/01/01' 이전인 사원만 출력하기 (전체 출력)
SELECT * FROM EMPLOYEE
WHERE HIREDATE <= '1981/01/01';

-- 2) 논리 연산자와 함께 조건절 사용하기
-- 논리연산자 (AND, OR, NOT)
-- 성능 : AND > OR,NOT 
-- 따라서 AND를 사용하도록 조건식을 짜야 한다.
-- 예제 5) 부서번호(DNO)가 10이고 직급이(JOB) 'MANAGER' 인 사원을 출력하세요.
SELECT * FROM EMPLOYEE
WHERE (DNO=10) AND JOB='MANAGER';

-- 연습 1) 급여가 1000과 1500 사이의 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE SALARY >= 1000 AND SALARY <= 1500;

-- 예제 6) 부서번호가 10이거나 직급이 'MANAGER'인 사원만 출력하기
SELECT * FROM EMPLOYEE
WHERE DNO=10 OR JOB='MANAGER';

-- 예제 7) 10번 부서에 소속된 사원들을 제외하고 나머지 사원 출력하기
SELECT * FROM EMPLOYEE
WHERE NOT DNO=10;

-- 결과는 같은 다른 방법
SELECT * FROM EMPLOYEE
WHERE DNO <> 10;

-- 연습 2) 급여가 1000 미만이거나 1500 초과인 사원 출력하기
SELECT * FROM EMPLOYEE
WHERE SALARY < 1000 OR SALARY > 1500;

-- 연습 3) 커미션이 300이거나 500이거나 1400인 사원 출력하기
SELECT * FROM EMPLOYEE
WHERE COMMISSION = 300 OR COMMISSION = 500 OR COMMISSION = 1400;

-- BETWEEN 사용
-- 급여가 1000 이상 1500 이하인 사원 출력하기 
-- 사용법 : 컬럼명 BETWEEN 작은값 AND 큰값; <- 값 사이의 결과 출력됨
-- 사용처 : 작은값 ~ 큰값 사이의 결과 조회하기 할때 사용
SELECT * FROM EMPLOYEE
WHERE SALARY BETWEEN 1000 AND 1500; 

-- 예제 9) NOT 비트윈 사용
--        급여가 1000미만이거나 1500 초과인 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE SALARY NOT BETWEEN 1000 AND 1500; 

-- 연습 3) 1982년에 입사한 사원 조회하기
-- 단 BETWEEN ~ AND 사용하기
SELECT * FROM EMPLOYEE
WHERE HIREDATE BETWEEN '82/01/01' AND '82/12/31';

-- 4) IN 예약어 - 원하는 값을 가진 데이터만 출력
-- 예제 10) 상여금 300 이거나 500 이거나 1400 이거나
-- 사용법 : WHERE 컬럼명 IN (값,값2,값3...);
SELECT * FROM EMPLOYEE
WHERE COMMISSION IN (300, 500, 1400);

-- NOT IN -
-- 예제 11) 상여금 300이 아니고 500이 아니고 1400이 아닌 사원
SELECT * FROM EMPLOYEE
WHERE COMMISSION NOT IN (300, 500, 1400);

-- 5) LIKE 검색(*****)
-- 일부 키워드(영문자, 한글)만 사용해서 비슷한 것들만 추려서 조회하기
-- WHERE 컬럼 LIKE 조건;
-- 아래 ENAME이 F로 시작 되는 사원 'F%'
-- F% <- % : 이 위치에 뭐가 올지 모르겠다. 즉 F이후에 아무거나 와도 된다 = F로 시작되는 단어
-- %F% <- F를 가진 모든 데이터(F시작,F중간,F끝 모두)
-- F_ <- _ : 이 위치에 한 글자 있음. 즉 F이후에 한글자만 있는 단어 검색됨
-- F_ 라면 FA,FB,FC...FZ 이고 _F_ 라면 AFA,AFB...ZFZ 같은 형태가 검색 된다.
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE 'F%';

-- 연습 4) 이름에 'M'이 포함되어 있는 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '%M%';

-- 연습 5) 이름이 N으로 끝나는 사원
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '%N';

-- 예제 13) 이름의 두번째 글자가 A인 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '_A%';

-- 연습6) 이름의 세번째 글자가 A인 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '__A%';

-- 예제 14) IN과 BETWEEN 의 반대를 나타낼 때 NOT을 앞에 붙여서 사용했음
--         LIKE의 반대를 나타낼 때에도 NOT을 붙여 쓴다.
--         이름에 A가 포함되지 않는 사원을 조회
SELECT * FROM EMPLOYEE
WHERE ENAME NOT LIKE '%A%';

-- 6) NULL 검색(조회)
-- 예제 15) 상여금(COMMISSION)이 NULL인 사원을 조회
-- NULL의 특징 : 연산, 비교 모든것이 안됨
-- 따라서 NULL 조회시 : WHERE 컬럼명 IS NULL;
SELECT * FROM EMPLOYEE
WHERE COMMISSION IS NULL;

-- IS도 NOT 사용 가능
SELECT * FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL;

-- 7) ORDER BY : 정렬 기능
-- 예제 16) 사원 테이블을 오름차순으로 정렬하시오
-- 단, 월급으로 정렬하세요
-- 오름차순(ASCENDING) : 작은수부터 큰수로 정렬
-- 사용법 : ORDER BY 정렬할컬럼명 (ASC <- 오름차순,생략가능)
SELECT * FROM EMPLOYEE
ORDER BY SALARY;

-- 내림차순(DESCENDING)
SELECT * FROM EMPLOYEE
ORDER BY SALARY DESC;

-- 정렬을 사용 하면 성능 대폭 저하
-- 따라서 어지간하면 사용하지 말것.

-- 연습 7) 사원 테이블에서(EMPLOYEE) 사원명(ENAME)으로 오름차순 정렬해서 조회하세요
SELECT * FROM EMPLOYEE
ORDER BY ENAME;

-- 연습 8) 사원 테이블에서 입사일(HIREDATE)로 내림차순 정렬
SELECT * FROM EMPLOYEE
ORDER BY HIREDATE DESC;

-- 연습 9) 급여 내림차순, 사원명 오름차순
SELECT * FROM EMPLOYEE
ORDER BY SALARY DESC, ENAME;

-- 연습 
















