-- 뷰 연습문제
-- 1) 20번 부서에 소속된 사원의 사원번호와 이름과 부서번호를 출력하는
-- 뷰를 정의하시오. (VW_EMP_DNO)
CREATE OR REPLACE VIEW VW_EMP_DNO
AS SELECT ENO, ENAME, DNO FROM EMPLOYEE WHERE DNO = 20;

SELECT * FROM VW_EMP_DNO;
-- 2) 이미 생성되어 있는 상기 뷰에 대해 급여 역시 출력하도록 수정해서 재생성하세요.
CREATE OR REPLACE VIEW VW_EMP_DNO
AS SELECT ENO, ENAME, DNO, SALARY FROM EMPLOYEE WHERE DNO = 20;

-- 3) 생성된 뷰 제거
DROP VIEW VW_EMP_DNO;
