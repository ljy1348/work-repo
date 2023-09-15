-- 테이블 구조(설계) 변경하기 : DBA(DATA BASE ADMINISTRATOR : DB 관리자)
-- ROLLBACK 안됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-- 실습 테이블 : DEPT20 (구조만 복사)
CREATE TABLE DEPT20
AS
SELECT * FROM DEPARTMENT
WHERE 1=2;

-- 예제 1) 부서 테이블에 날짜 자료형을 가지는 BIRTH 컬럼 추가하기
-- 테이블에 새로운 컬럼 추가하기
-- 사용법) ALTER TABLE 테이블명 ADD(컬럼명 자료형);
ALTER TABLE DEPT20
ADD(BIRTH DATE);

SELECT * FROM DEPT20;

-- 예제 2) 부서테이블에 부서명의 크기를 변경하기
-- 테이블의 컬럼 수정하기(크기 변경, 자료형 변경 등)
-- 사용법 ALTER TABLE 테이블명 MODIFY 컬럼명 자료형(크기);
ALTER TABLE DEPT20
MODIFY DNAME VARCHAR2(30);

-- 테이블 구조보기
DESC DEPT20;

-- 예제 3) 부서 테이블 BIRTH 컬럼 삭제하기
-- 사용법) ALTER TABLE 테이블명 DROP COLUMN 컬럼명;
ALTER TABLE DEPT20
DROP COLUMN BIRTH;

-- 예제 4) 테이블 이름 변경하기
-- 사용법) RENAME 테이블명 TO 변경테이블명;
RENAME DEPT20 TO DEPT30;
SELECT * FROM DEPT30;