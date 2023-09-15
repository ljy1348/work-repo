-- PL/SQL : 프로시저/펑션, DB 프로그래밍 분야(SQL 숙련자들)
-- 난이도 높음
-- 소스 : ORACLE DB에 저장됨
-- 장점 : 1) 성능향상
-- 자바/자바스크립트 처럼 코딩하는 것을 말함
-- 코딩 특징 : 1) 제어문 (조건문/반복문), 변수/상수
-- 예제 1)
-- 화면 출력 모드 변경 : ON (출력 켜기)
-- 콘솔창에 프로시저 출력 ON
SET SERVEROUTPUT ON;

-- 입력
-- 사용법) ACCEPT 변수명 PROMPT 설명
-- 대화상자 입력값이 변수명에 저장됨
-- 변수 명명법) P : 입력값이 저장되는 변수
--            V : 단순 변수
ACCEPT p_num1 PROMPT '첫번째 숫자를 입력하세요'
ACCEPT p_num1 PROMPT '두번째 숫자를 입력하세요'
-- 1) 선언부
-- 변수 초기화, 변수 정의
-- DECLARE 변수명 자료형(크기)
DECLARE v_sum NUMBER(10);
-- 프로시저 코딩 : 업무 코딩
-- 2) 실행부 : BEGIN
BEGIN 
    -- 사용법)
    -- 입력된 값은 &를 붙여야 사용할 수 있다.
    -- 대입연산자(:=)
    v_sum := &p_num1 + &p_num2; -- 입력값 2개를 더해서 v_sum에 저장
    
    -- 문자열 붙이기 ||
    dbms_output.put_line('총합은 : '|| v_sum); -- v_sum에 저장된 값 출력하기
-- 3) 종료부
END;
-- 프로시저의 끝 / 붙여줘야 함
/

-- 예제 2) 입력받은 사원번호에 해당하는 월급 출력하기 : EMPLOYEE
ACCEPT p_empno PROMPT '사원번호를 입력하세요.'
DECLARE v_empno NUMBER(4);
BEGIN
    -- 테이블에서 출력된 값을 v_empno에 집어넣기 (v_empno에 대입)
    SELECT SALARY INTO v_empno
    FROM EMPLOYEE
    WHERE ENO = &p_empno;
    
    -- v_empno의 값을 출력하기
    DBMS_OUTPUT.PUT_LINE('해당 사원의 월급은' || v_empno);
END;
/

-- 예제 3) 조건문 : IF/ELEIF/ELSE/END IF
-- 입력부
ACCEPT p_num PROMPT '숫자를 입력하세요.'
-- 선언부 생략 가능
-- 실행부
BEGIN
    -- IF문
    -- MOD(숫자1,숫자2) 숫자1을 숫자2로 나눈 나머지
    -- 2로 나눴을 때 나머지가 0 이라면 짝수입니다.
    -- 0이 아니라면 홀수입니다. 출력
    IF MOD(&p_num, 2) = 0 THEN
        DBMS_OUTPUT.PUT_LINE('짝수입니다.');
    ELSE 
        DBMS_OUTPUT.PUT_LINE('홀수입니다.');
    -- IF 문 종료 선언
    END IF;
END;
/

SELECT CASE WHEN(DNO = 10) THEN 1 ELSE DNO END
FROM EMPLOYEE;
/
-- 4) 조건문 계속 : IF/ELSIF/ELSE/END IF;
--   사원테이블에 사원명을 입력받아 급여가 3000 이상이면 고소득자입니다. 출력
--                                   2000 이상이면 중간 소득자입니다. 출력
--                                   모두 아니면 저소득자입니다. 출력
ACCEPT p_ename PROMPT '사원 이름를 입력하세요.'
-- 선언부(정의부)
DECLARE
    -- 변수 선언
    -- EMPLOYEE.ENAME%TYPE <- 자료형을 ENAME의 자료형으로 설정
    -- := UPPER('&p_ename') <- 테이블의 이름이 대문자로 저장되어 있으므로
    --                          입력된 이름을 대문자로 변환 해서 대입
    v_ename EMPLOYEE.ENAME%TYPE := UPPER('&p_ename');
    -- v_sal 변수 선언 (초기화 되지 않음)
    v_sal   EMPLOYEE.SALARY%TYPE;
-- 실행부
BEGIN
    SELECT SALARY INTO v_sal
    FROM EMPLOYEE
    WHERE ENAME = v_ename;
    
    IF v_sal >= 3000 THEN
        DBMS_OUTPUT.PUT_LINE('고소득자입니다.');
    ELSIF v_sal >= 2000 THEN
        DBMS_OUTPUT.PUT_LINE('중간 소득자입니다.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('저소득자입니다.');
    END IF;
END;
/

-- 5) 반복문 : 커서
-- 입력값
ACCEPT p_dno PROMPT '부서번호를 입력하세요.'
-- 선언부(정의부)
DECLARE
    -- 커서(배열) : 여러 데이터를 가지고 있는 SELECT 조회문
    -- SELECT로 얻은 테이블 데이터가 저장된다.
    -- 사용법)
    -- CURSOR 커서명 IS 값(SELECT문);
    CURSOR emp_cursor IS
        SELECT ENAME, SALARY, DNO
        FROM EMPLOYEE
        WHERE DNO = &p_dno;
-- 실행부
BEGIN
    -- FOR LOOP 반복문
    -- 사용법) FOR 반복변수명(객체) IN 데이터변수명
    -- LOOP 실행문 END LOOP;
    -- 데이터변수명에 CURSOR 변수를 사용하면 CURSOR에 들어있는 데이터 수 만큼 반복한다.
    -- 자바스크립트의 MAP 이나 FOREACH 문과 비슷하다.
    -- 반복변수명.컬럼명 으로 값을 확인 할 수 있다.
    FOR emp_record IN emp_cursor LOOP
        -- 차례로 화면에 출력하기
        DBMS_OUTPUT.PUT_LINE(emp_record.ename || ' ' || emp_record.salary
                            || ' ' || emp_record.dno);
    END LOOP;
END;
/

-- 참고) 실무에서 사용하는 프로시저 형태(이름을 붙여 재사용 가능)
-- CREATE OR REPLACE PROCEDURE 프로시저명(매개변수 IN 자료형  <- 함수처럼 선언
--                                    매개변수 OUT 자료형) <- OUT 변수 == RETURN 값
-- IS ACCENT 입력부 DECLARE 선언부 BEGIN 실행부 END
CREATE OR REPLACE PROCEDURE pro_ename_sal
(p_ename in employee.ename%type)
IS
-- 선언부
    v_sal employee.salary%type; -- 사원테이블의 급여 자료형을 참조
-- 실행부
BEGIN
    -- 사원명을 받아서 급여 조회 sql
    SELECT SALARY INTO v_sal
    FROM EMPLOYEE
    WHERE ENAME = p_ename;
    -- 화면 출력
    DBMS_OUTPUT.PUT_LINE(v_sal || ' 입니다.');
END;
/
-- 프로시저 실행 (2가지)
-- CALL 프로시저명(매개변수);
-- EXEC 프로시저명(매개변수);
CALL pro_ename_sal('SCOTT');
EXEC pro_ename_sal('SCOTT');

-- 7) FUNCTION 만들기
-- 특징) 무조건 RETURN 값이 있어야 함(프로시저는 OUT 생략 가능)
-- 예제) 부서번호를 매개변수로 받아서 위치를 출력하는 함수 정의
-- 사용법) CREATE OR REPLACE FUNCTION 함수명 (매개변수 IN 자료형)
-- RETURN 자료형
-- IS 선언부 BEGIN 실행부 RETURN 변수명 END;
CREATE OR REPLACE FUNCTION fn_ename_sal
(p_dno in department.dno%type)
RETURN department.loc%type
IS
-- 선언부
   v_loc department.loc%type; -- 부서테이블의 위치 자료형 참조
-- 실행부
BEGIN
--  부서번호를 매개변수로 받아 위치를 조회하는 SQL문
    SELECT LOC INTO v_loc
    FROM DEPARTMENT
    WHERE DNO = p_dno;
    
    RETURN v_loc;
END;
/

-- 함수 실행 : 쿼리로 실행
SELECT ENAME, DNO, fn_ename_sal(DNO) FROM EMPLOYEE;