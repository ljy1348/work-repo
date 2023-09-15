-- UPDATE(수정)
-- DEPT_COPY 로 실습
SELECT * FROM DEPT_COPY;

-- 예제 1) 10번 부서의 이름 수정하기 : 'ACCOUNTING' -> 'PROGRAMING'
-- 사용법 : UPDATE 테이블명
--          SET 컬럼명 = 변경할 값
--          (조건) WHERE 컬럼명 = 값;
UPDATE DEPT_COPY
SET DNAME = 'PROGRAMING'
WHERE DNO = 10;

-- 영구반영 : 다른 사람이 변경된 데이터를 볼 수 있음
COMMIT;
ROLLBACK;

-- 연습 1) 20번 부서 이름 수정하기 : 'HR'(인사팀)
UPDATE DEPT_COPY
SET DNAME = 'HR'
WHERE DNO = 20;

-- 연습(응용) 2) 컬럼 값을 여러개 수정하기
-- 10번 부서의 DNAME을 'PROGRAMMING2', LOC를 'SEOUL'로 수정
UPDATE DEPT_COPY
SET DNAME = 'PROGRAMMING2'
    ,LOC = 'SEOUL'
WHERE DNO = 10;

-- 예제 4) 10번 부서의 지역명을 20번 부서의 지역명으로 수정하기
UPDATE DEPT_COPY
SET LOC = (SELECT LOC
            FROM DEPT_COPY
            WHERE DNO = 20)
WHERE DNO = 10;

-- 연습 3) 10번 부서의 부서명, 지역명을 30번 부서의 부서명, 지역명으로 변경하기
-- 힌트) 서브쿼리
UPDATE DEPT_COPY
SET DNAME = (SELECT DNAME
            FROM DEPT_COPY
            WHERE DNO = 30)
    ,LOC =(SELECT LOC
            FROM DEPT_COPY
            WHERE DNO = 30)
WHERE DNO = 10;

-- 다른 풀이
UPDATE DEPT_COPY
SET (DNAME, LOC) = (SELECT DNAME, LOC
            FROM DEPT_COPY
            WHERE DNO = 30)
WHERE DNO = 10;

ROLLBACK;
SELECT * FROM DEPT_COPY;

-- DELETE : 삭제(D), 전체삭제, 부분삭제 모두 가능, 취소 가능
-- VS TRUNCATE TABLE 테이블; (빠른 전체 삭제, 취소불가)
-- 예제 6) 10번 부서를 삭제하세요
-- 사용법 : DELETE 테이블명
--          (조건)WHERE 컬럼명 = 값;
DELETE DEPT_COPY
WHERE DNO = 10;
COMMIT;

-- 연습 1) 영업부(SALES)에 근무하는 사원 삭제하기
DELETE DEPT_COPY
WHERE DNO = (SELECT DNO
            FROM DEPT_COPY
            WHERE DNAME = 'SALES');
SELECT * FROM DEPT_COPY;

COMMIT;

-- 기타 명령어
-- 테이블 설계구조 보기 : DESC 테이블명
DESC DEPT_COPY;