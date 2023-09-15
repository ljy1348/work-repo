-- 테이블 제약 조건 : 테이블에 입력될 값을 제한하는 것
-- 제약 조건은 컬럼별로 각각 지정할 수 있음
-- 1) UNIQUE 제약조건 : 유일한 값만 입력될 수 있음(데이터 중복 금지), NULL 값은 입력 가능
--    NOT NULL 제약 조건 : NULL값이 입력될 수 없음
-- 예제 1) CUSTOMER 테이블을 정의하고 ID에 UNIQUE 제약조건을 지정하세요.
-- (ID  VARCHAR2(20) -> UNIQUE 제약 조건
--  PWD VARCHAR2(20)
--  NAME    VARCHAR2(20)
--  PHONE   VARCHAR2(30)
--  ADDRESS VARCHAR2(1000))
-- 사용법) 컬럼명 자료형(크기) 제약조건
-- 제약조건 : UNIQUE - 데이터 중복 금지
--          NOT NULL - NULL값 입력 금지
CREATE TABLE CUSTOMER (
        ID          VARCHAR2(20) UNIQUE
        ,PWD        VARCHAR2(20) NOT NULL
        ,NAME       VARCHAR2(20) NOT NULL
        ,PHONE      VARCHAR2(30)
        ,ADDRESS    VARCHAR2(1000));
DESC CUSTOMER;
DROP TABLE CUSTOMER;

-- 2) 기본키 제약조건 : PRIMARY KEY(PK)
-- 기본키의 특징 : 유일한 값만 입력되고(중복방지) + NOT NULL 제약조건 포함
-- UNIQUE + NOT NULL
-- INDEX 자동 생성
-- 특징) 주로 테이블 설계시 1개의 테이블당 거의 1개는 기본키가 존재함
-- 사용법) 컬럼명 PRIMARY KEY
-- 기본키 제약 조건에 이름 부여 가능 : CONSTRAINT 제약조건이름 제약조건
-- 사용법) CONSTRAINT 제약조건이름 제약조건(컬럼명);
-- 제약조건 명명법) PK_테이블명_컬럼명, UK_테이블명_컬럼명 ...
-- NOT NULL은 많이 쓰기 때문에 굳이 이름을 붙이지 않는다.
CREATE TABLE CUSTOMER2 (
        ID          VARCHAR2(20)
        ,PWD        VARCHAR2(20) NOT NULL
        ,NAME       VARCHAR2(20) NOT NULL
        ,PHONE      VARCHAR2(30)
        ,ADDRESS    VARCHAR2(1000)
        ,CONSTRAINT PK_CUSTOMER_ID PRIMARY KEY(ID));
DESC CUSTOMER2;
SELECT * FROM CUSTOMER2;
INSERT INTO CUSTOMER2
VALUES (NULL,NULL,NULL, '010-123-4567', 'SEOUL'); -- <- 에러 발생

-- 3) 외래키(참조키) 제약조건 : FOREIGN KEY(FK)
-- 무결성 제약조건 : 기본키/외래키
-- 무결성 : 데이터에 결점이 없는 것
-- 기본키 : 회원의 ID(중복되면 안됨 + NULL 입력되도 안됨)
-- 참조키 : 부서테이블의 부서번호(DNO : 10~ 40), 사원들의 부서번호(DNO : 10~30)
-- 참조키를 걸면 부서테이블의 부서번호에 없는 번호는 사원들의 부서번호에 쓸 수 없다.(참조 무결성)
-- 예제 3) EMP_SECOND 테이블을 만들고
-- ( ENO NUMBER(4) (기본키)
--   ENAME VARCHAR2(10)
--   JOB VARCHAR2(9)
--   DNO NUMBER(2) (참조키)
-- 사용법) 컬럼명 자료형(크기) REFERENCES 부모테이블명
CREATE TABLE EMP_SECOND (
    ENO NUMBER(4)   CONSTRAINT PK_EMP_SECOND_ENO PRIMARY KEY
    ,ENAME VARCHAR2(10)
    ,JOB VARCHAR2(9)
    ,DNO NUMBER(2) CONSTRAINT FK_EMP_SECOND_DNO REFERENCES DEPARTMENT
);
DESC EMP_SECOND;
SELECT * FROM EMP_SECOND;
INSERT INTO EMP_SECOND
VALUES (1, 'NAME', 'JOB', 50); -- <- 에러발생(부모테이블에 DNO 50 없음)
DROP TABLE EMP_SECOND;

-- 4) CHECK 제약조건(참고) : CK
-- 컬럼에서 허용 가능한 데이터의 범위나 조건을 정의할 수 있음
-- 예제 4) EMP_SECOND 테이블에 CHECK 제약조건을 지정하세요(SALARY > 0)
-- 사용법) 컬럼명 자료형(크기) CONSTRAINT 제약조건이름 CHECK(조건)
CREATE TABLE EMP_SECOND(
    ENO NUMBER(4) CONSTRAINT PK_EMP_SECOND_ENO PRIMARY KEY
    ,ENAME VARCHAR2(10)
    ,SALARY NUMBER(7,2) CONSTRAINT CK_EMP_SECOND_SALARY CHECK(SALARY > 0)
);

INSERT INTO EMP_SECOND
VALUES (1, 'NAME', -999); -- <- 오류(체크 제약조건 위배)

-- 실습 데이터 삭제
DROP TABLE EMP_SECOND;

-- 5) DEFAULT 제약조건 : NULL값이 INSERT 될 때 기본적으로 다른 값으로 생성하는 제약조건
 CREATE TABLE EMP_SECOND(
    ENO NUMBER(4) CONSTRAINT PK_EMP_SECOND_ENO PRIMARY KEY
    ,ENAME VARCHAR2(10)
    ,SALARY NUMBER(7,2) DEFAULT 1000
);
INSERT INTO EMP_SECOND (ENO, ENAME)
VALUES (1, 'NAME');
INSERT INTO EMP_SECOND
VALUES (2, 'NAME2', NULL);
SELECT * FROM EMP_SECOND;
COMMIT;

-- 기타사항 : 제약조건
-- 테이블 복사 : CREATE TABLE ~ AS SELECT ~ 
-- 제약조건 복사 안됨(제약조건 추가 생성작업 해야함 : 기본키/참조키)

-- 참고) 시스템용 테이블 또는 뷰(VIEW) : DB 관리용 테이블
-- 용도) 현재 생성된 테이블의 정보, 제약조건, 크기 등을 확인하는 용도
-- 테이블 정보(제약조건) : USER_CONSTRAINTS
SELECT *
FROM USER_CONSTRAINTS
WHERE TABLE_NAME IN ('EMPLOYEE', 'DEPARTMENT', 'EMP_COPY')
ORDER BY TABLE_NAME;

-- 테이블 생성 후 제약조건 추가/변경/제거하기
-- 제약조건 확인하기
SELECT *
FROM USER_CONSTRAINTS
WHERE TABLE_NAME IN ('EMP_COPY', 'DEPT_COPY')
ORDER BY TABLE_NAME;

-- 예제 1) 사원복사본 테이블(EMP_COPY)에 기본키 추가하기
-- 사용법) ALTER TABLE 테이블명 ADD CONSTRAINT 제약조건명 제약조건(컬럼명);
ALTER TABLE EMP_COPY
ADD CONSTRAINT PK_EMP_COPY_ENO PRIMARY KEY(ENO);

ALTER TABLE EMP_COPY
RENAME COLUMN ENO2 TO ENO;

-- 예제 2) 부서 복사본 테이블에 기본키 추가하기
ALTER TABLE DEPT_COPY
ADD CONSTRAINT PK_DEPT_COPY_DNO PRIMARY KEY(DNO);

-- 예제 3) 외래키 추가하기
ALTER TABLE EMP_COPY
ADD CONSTRAINT FK_DEPT_COPY_DNO 
FOREIGN KEY(DNO) REFERENCES DEPT_COPY(DNO);

SELECT * FROM EMP_COPY;
SELECT * FROM DEPT_COPY;

DROP TABLE EMP_COPY;
DROP TABLE DEPT_COPY;

CREATE TABLE EMP_COPY
AS SELECT * FROM EMPLOYEE;
CREATE TABLE DEPT_COPY
AS SELECT * FROM DEPARTMENT;

-- 예제 4) 테이블 생성 후에 제약조건 삭제하기
-- 부모테이블의 기본키(부서:부서번호) <-> 자식테이블의 참조키(사원:부서번호)
-- 부모테이블의 기본키 삭제하기
-- 참조키가 걸려 있어서 삭제 불가능
ALTER TABLE DEPT_COPY
DROP PRIMARY KEY;
-- 참조키가 걸려 있을때 강제 삭제 (CASCADE)
-- 참조키도 같이 삭제됨
ALTER TABLE DEPT_COPY
DROP PRIMARY KEY CASCADE;

-- 예제5) 제약조건 변경하기
-- EMP_COPY : ENAME (NULL허용) -> ENAME(NOT NULL 제약조건으로 변경)
-- 사용법) MODIFY 컬럼명 CONSTRAINT 제약조건이름 제약조건
ALTER TABLE EMP_COPY
MODIFY ENAME CONSTRAINT NN_EMP_COPY_ENAME NOT NULL;

-- 제약조건 이름으로 제약조건 삭제하기
-- 사용법) DROP CONSTRAINT 제약조건이름
ALTER TABLE EMP_COPY
DROP CONSTRAINT NN_EMP_COPY_ENAME;

-- 참고사항)
-- 1) 실무에서 참조무결성(참조키) 관련 논란의 여지가 있음.
--  (1) 참조키를 사용해서 참조무결성 해결
--      INSERT / UPDATE시 부모테이블에 해당 데이터 있는지 확인
--          -> 있으면 INSERT/UPDATE
--          -> 없으면 오류 발생
--      단점 : DB 성능 저하, 최악의 경우에 다른 테이블도 성능 저하를 일으킴
--  (2) 자바 코딩에서 참조키 로직을 만들어서 해결
--      IF (부모테이블에 해당 데이터 있는지 확인) {
--          INSERT/UPDATE 실행 }

--------------------------------------------------------------------------------



