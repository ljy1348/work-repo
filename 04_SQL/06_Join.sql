-- Join
-- 예제1) 사원 번호가 7788인 사원의 부서명은 뭘까요?
-- 사원 : EMPLOYEE
-- 부서명 : DEPARTMENT
-- 1) 사원 테이블에서 ENO=7788인 사람의 부서번호를 알아낸뒤
SELECT DNO
FROM EMPLOYEE
WHERE ENO=7788;
-- 2) 부서 테이블에서 부서번호에 해당하는 부서명을 출력한다.
SELECT DNAME
FROM DEPARTMENT
WHERE DNO=20;
-- 결과 : 조회 성능이 저하됨(SQL문 1번 실행하는것이 가장 좋음)
-- 1) 코딩(SQL) : 컴퓨터가 코드 해석(시간 소요)
-- 2) 네트워크 : 접속툴 <-> DB서버 간에 통신(시간 소요)
-- 이것을 해석하기 위해 JOIN을 쓴다.

-- 2) 조인을 사용하여 위의 코드를 1번으로 줄인다.
-- 테이블 여러개를 공통컬럼을 이용해서 연결할 수 있음(권장 : 4개 이내 그 이상은 속도 감소)
-- 사용법) SELECT 별칭1.컬럼명, 별칭2.컬럼명
-- FROM 테이블1 별칭1, 테이블2 별칭2
-- 성능 증가
SELECT ENO, DNAME, EMP.DNO, DEP.DNO
FROM EMPLOYEE EMP
     ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO; -- 공통 컬럼으로 연결함

-- 조인의 의미
-- 사원 테이블
SELECT * FROM EMPLOYEE
ORDER BY DNO;
-- 부서 테이블
SELECT * FROM DEPARTMENT
ORDER BY DNO;

-- 예제1) 사원번호가 7499 또는 7900인 사원들의 소속된 부서정보를 모두 출력하세요.
SELECT EMP.ENO,DEP.*
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
--        AND (ENO=7499 OR ENO=7900);
        AND EMP.ENO IN (7499,7900);
        
-- 연습 1) 조인하고 아래 조건을 추가하세요.
--       1-1) 사원번호가 7500 ~ 7700 사이에 있는 사원들의 소속된 부서정보를 출력하되
--            부서 이름이 SALES인 부서만 출력하세요.
SELECT EMP.*, DEP.*
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
        AND (EMP.ENO BETWEEN 7500 AND 7700 AND DNAME='SALES');
        
-- 특수한 조인
-- 0) 이퀄 조인(테이블1 = 테이블2)
-- 1) 범위 조인(테이블1.칼럼 BETWEEN 테이블2.LOW AND 테이블2.HIGH)
-- 단점 : 성능 대폭 하락(최후의 수단)
-- 급여 등급 테이블 : SALGRADE
SELECT EMP.*,SAL.*
FROM EMPLOYEE EMP
    ,SALGRADE SAL
WHERE EMP.SALARY BETWEEN SAL.LOSAL AND SAL.HISAL;

-- 2) 아우터 조인
-- 이퀄조인(=) : 두 테이블 공통컬럼에 NULL값이 있으면 NULL값을 제외하여 연결됨
-- 아우터조인 : NULL값이 있는 값을 보고 싶을 때 사용
-- 사용법 : = 조인을 하되 NULL값이 있는 쪽에 (+)를 붙이면 됨
-- MANAGER 칼럼 : 관리자 사원번호
SELECT EMP.ENAME
        ,MAN.ENAME AS MANAGER
FROM EMPLOYEE EMP
    ,EMPLOYEE MAN
--    WHERE EMP.MANAGER = MAN.MANAGER; <- 이퀄 조인 : NULL값이 조회되지 않음
-- 같은 테이블, 같은 컬럼의 조회 : 해당 칼럼의 값과 같은 값을 중복 조회됨
-- SMITH의 매니저와 같은 매니저를 가진 사원은 SMITH 혼자 뿐이다.
-- ALLEN과 같은 매니저를 가진 사원은 5명 이다. 따라서 이후 다음 다섯명도 같은 값을 보여준다.
WHERE EMP.MANAGER(+) = MAN.MANAGER; 

-- 3) SQL-99 표기법 : 오라클 DB나 MY SQL DB 등에서 지원함
-- 전 세계 SQL(질의어) 표준 : ANSI SQL(표준 기구)
-- 예제 1) 사원 X 부서 조인 : SQL-99 표기법으로
-- 오라클 조인 표기법
SELECT ENO, DNAME, EMP.DNO, DEP.DNO
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO;

-- SQL-99 표기법
-- 사용법 : FROM 테이블1 JOIN 테이블2 ON (조건);
SELECT ENO, DNAME, EMP.DNO, DEP.DNO
FROM EMPLOYEE EMP JOIN DEPARTMENT DEP 
ON (EMP.DNO = DEP.DNO);

-- 아우터 조인
-- 오라클 아우터 조인
-- +가 왼쪽에 있으면 라이트 아우터 조인
-- +가 오른쪽에 있으면 레프트 아우터 조인
SELECT EMP.ENAME
        ,MAN.ENAME AS MANAGER
FROM EMPLOYEE EMP
    ,EMPLOYEE MAN
WHERE EMP.MANAGER(+) = MAN.MANAGER; 

-- SQL-99 아우터 조인
-- 사용법 : FROM 테이블1 LEFT(RIGHT) OUTER JOIN 테이블2
--         ON(컬럼1 = 컬럼2(+));
-- +가 왼쪽에 있으면 라이트 아우터 조인
-- +가 오른쪽에 있으면 레프트 아우터 조인
SELECT EMP.ENAME
        ,MAN.ENAME AS MANAGER
FROM EMPLOYEE EMP LEFT OUTER JOIN EMPLOYEE MAN
ON (EMP.MANAGER = MAN.MANAGER(+));






