-- 04_Function_3.sql
-- 자료형 변환 함수(**)
-- DB 자료형 : 문자열(VARCHAR2(가변문자열), CHAR(고정문자열))
--            숫자(NUMBER, 실수, 정수)
--            날짜(DATE)
-- 1) TO_CHAR : 날짜 -> 문자열로 바꾸는 함수
-- 사원 : EMPLOYEE
-- 날짜컬럼(DATE) : HIREDATE(입사일)
-- 사용법) TO_CHAR(컬럼명, '날짜포맷')
-- 날짜포맷 : YYYY(년도(4자리)), YY(2자리) [YEAR]
--           MM(월(2자리))               [MONTH]
--           DD(일(2자리))               [DAY]
--           DAY(요일)                   [요일]
--           HH(1~12까지의시간)           [HOUR]
--           HH24(1~24까지의시간)         [HOUR]
--           MI(분(2자리)                [MINUTES]
--           SS(초(2자리))               [SECOND]
SELECT ENAME, HIREDATE
       ,TO_CHAR(HIREDATE, 'YY-MM') AS 단축날짜
       ,TO_CHAR(HIREDATE, 'YYYY-MM-DD HH24:MI:SS') AS 날짜
FROM EMPLOYEE;

-- 연습 1) 현재 날짜와 시간을 표현하세요(날짜 -> 문자열로 변환하세요)
-- 단 출력포맷 예) 2011/05/01, 15:07:43  으로 출력하세요
-- 힌트) 현재날짜 : SYSDATE(날짜형)
SELECT TO_CHAR(SYSDATE, 'YYYY/MM/DD, HH24:MI:SS') FROM DUAL;

-- 2) TO_CHAR : 숫자 -> 문자로 변환
-- 사용법) TO_CHAR(숫자컬럼, '숫자포맷')
-- 예제 2) 급여를 출력하면서 통화기호를 (W, $ 등) 포함해서 출력하세요
-- 숫자포맷 : L - 각 나라별 통화 기호를 자동으로 붙여줌(W, $ 등)
--           9 - 3자리를 잡고 자리수가 모자라도 따로 0을 채워주지 않음
--           0 - 3자리를 잡고 자리수가 모자라면 0을 채움
--           , - 각 통화의 중간에 쉼표(,)를 자동으로 추가해줌
SELECT ENAME, SALARY
      ,TO_CHAR(SALARY, 'L999,999')
      ,TO_CHAR(SALARY, 'L000,000')
FROM EMPLOYEE;

-- 3) TO_DATE : 문자(숫자) -> 날짜로 변환
-- HIEREDATE 컬럼 : 날짜형
SELECT ENAME, HIREDATE
FROM EMPLOYEE
--WHERE HIREDATE = '19810220'; <- 자동 자료형 변환(문자 -> 날짜형으로)
WHERE HIREDATE = TO_DATE('19810220','YYYYMMDD');

-- 4) TO_NUMBER : 문자 -> 숫자로 변환
-- 예제 4) 숫자 형태의 문자 빼기
SELECT TO_NUMBER('100,000','999,999') - TO_NUMBER('50,000','999,999')
AS 계산
FROM DUAL;

-- 일반 함수들
-- 1) NVL : NULL -> 숫자나 문자로 변환
-- 사용법 : VNL(NULL있는 컬럼, 출력할 문자나 숫자)
-- NULL을 0으로 출력
-- NULL은 산술 연산이 안됨
SELECT NVL(COMMISSION, 0) FROM EMPLOYEE; 


-- 2) DECODE 함수 : SQL 에서 조건문을 표시하는 함수
-- DECODE로 부서이름 출력하기
-- 사용법) DECODE(컬럼명, 조건1, 결과1, 조건2, 결과2,... 기본값)
-- 조건1이 맞으면 결과1이 출력되고, 조건2가 맞으면 결과2 출력, 모두 아니면 기본값 출력
-- JAVA에서 SWITCH문이랑 비슷하다.
-- 옛날방식
SELECT ENAME, DNO
        ,DECODE(DNO, 10, '회계부'
                    ,20, '연구소'
                    ,30, '판매부'
                    ,40, '운영부'
                    ,'디폴트') AS 부서명
FROM EMPLOYEE
ORDER BY DNO;

-- 3) DECODE 업그레이드 : CASE WHEN (결과는 같음) <- 신규 방식
-- 사용법) CASE WHEN 조건1 THEN 결과1
--             WHEN 조건2 THEN 결과2 ...
--             ELSE 기본값 END
SELECT ENAME, DNO
        ,CASE WHEN DNO=10 THEN '회계부'
            WHEN DNO=20 THEN '연구소'
            WHEN DNO=30 THEN '판매부'
            WHEN DNO=40 THEN '운영부'
            ELSE '디폴트' END
            AS 부서명
FROM EMPLOYEE
ORDER BY DNO;


