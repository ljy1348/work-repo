-- 그룹 함수 : 데이터 집계 함수(총액, 평균, 최고, 최저)
-- SUM, AVG, MAX, MIN, COUNT
-- 전체 집계 함수 -> 결과 1건
-- 집계 함수는 NULL을 자동으로 제외한다.
-- 전체 집계 함수 특징
-- 1. 1건이 결과로 나옴
-- 2. 일반 컬럼과 같이 사용할 수 없음 - 에러 발생
-- 예제1) 사원들의 급여 총액, 평균액, 최고액, 최소액 출력하기
SELECT ROUND(AVG(SALARY)) AS 평균
        , SUM(SALARY) AS 총액
        , MAX(SALARY) AS 최대
        ,MIN(SALARY) AS 최소
FROM EMPLOYEE;

-- 예제 1) 최근에 입사한 사원과 가장 오래전에 입사한 사원의 입사일 출력하기
SELECT MAX(HIREDATE) AS 최근, MIN(HIREDATE) AS 최고
FROM EMPLOYEE;

-- 예제 2) 상여금 총액 출력하기
SELECT SUM(COMMISSION)
FROM EMPLOYEE;

-- 예제 3) 사원들의 총인원을 출력하세요
-- 사용법 COUNT(컬럼명 OR *(전체 컬럼))
SELECT COUNT(*) AS 사원수
FROM EMPLOYEE;

-- 예제 4) 상여금을 받는 사원의 수 계산하기
SELECT COUNT(COMMISSION) AS 사원수
FROM EMPLOYEE;

-- 예제 5) NOT NULL인 데이터만 계산하기
SELECT COUNT(COMMISSION) AS 사원수
FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL;

-- 예제 6) 직위의 종류가 몇개인지 출력하기
-- 사용법) 중복을 제거하고 출력
-- DISTINCT : 중복 제거 키워드
-- COUNT(DISTINCT 컬럼명)
-- 컬럼별칭 : 컬럼명 AS 별칭
-- 테이블 별칭 : 테이블명 별칭
-- 사용법 : 테이블별칭.컬럼명
SELECT COUNT(DISTINCT EMP.JOB) AS 직업개수
FROM EMPLOYEE EMP;

-- 2) 부분(컬럼별) 집계 하기 : GROUP BY (예약어)
-- 소속 부서별 평균 급여를 부서번호와 함께 출력하세요.
-- TRUNC : 버림, 절삭
SELECT DNO
        ,TRUNC(AVG(SALARY)) AS 평균급여
FROM EMPLOYEE
GROUP BY DNO; -- 부서번호 컬럼별 집계(부서번호 컬럼은 출력할 수 있음)

-- 주의점 : 그룹 함수와 일반 컬럼은 같이 사용할 수 없음.
--           (단, 컬럼별 집계에서 그 컬럼은 그룹함수와 같이 사용할 수 있음)
-- 위 경우에서 DNO를 제외한 나머지 컬럼은 사용할 수 없다.

-- 예제 8) 부서번호별, 직위별, 데이터 건수 및 급여 총액
SELECT DNO, JOB
--        ,COUNT(DNO) AS 부서번호
--        , COUNT(JOB) AS 직위
        , COUNT(*)
        , SUM(SALARY) AS 평균급여
FROM EMPLOYEE
GROUP BY DNO, JOB;

-- GROUP BY 사용시 조건을 추가 : HAVING 키워드(그룹 함수에만 사용함)
-- 사용법) HAVING 그룹함수(컬럼명) > 값
-- 예제 9) 부서번호별 최고급여가 3000 이상인 부서의 번호와 
--        최고 금액 출력하시오.
SELECT DNO, MAX(SALARY)
FROM EMPLOYEE
GROUP BY DNO
HAVING MAX(SALARY) >= 3000;

-- 연습 1) 사원 테이블에서 직업이 MANAGER인 값을 제외하고 급여 총액이 5000 이상인
-- 직급별 총액 구하기
SELECT JOB, SUM(SALARY)
FROM EMPLOYEE
WHERE NOT JOB = 'MANAGER'
GROUP BY JOB
HAVING SUM(SALARY) >= 5000;












