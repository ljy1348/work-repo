# 모델링(db 설계) 기초
# 선임 개발자가 주로 작성함
# db 모델링 툴 : ER-WIN 툴(무료 없음 : 상용 몇백만원)
# 무료 : 온라인 모델링 툴 : ERD CLOUD
# DB 모델링(그림) : ER-Diagram(ERD), Entity-Relation-Diagram
# 설계 용어 설명 : 테이블(엔티티 : ENTITY), 컬럼(속성), 자료형및크기(도메인)
#                   스키마(DB에 생성되는 테이블, 인덱스 등 모든것을 총칭함)
# DB 모델링 표기법 : IE 표기법[삼발이표기법](우리나라 표준) VS Barker 표기법

# 관계 설정 : 참조키 설정을 위한 3가지(2개의 테이블(엔티티))
# 1) 1:1 관계 : 사람 <-> 핸드폰
# 사람은 1개의 핸드폰만 가지고 있다고 가정
# 1:1 관계에서 join을 하면 값의 갯수는 같음(사람, 핸드폰 둘 다 값이 늘어나지 않음)

# 2) 1:n 관계 : 부서 <-> 사원
# 1개의 부서는 여러명의 사원이 있다.
# 반면에 1명의 사원은 1개의 부서만 가질 수 있다.
# 1:n관계에서는 1의 값이 n개 만큼 늘어남
# 예) 부서의 정보가 사원의 갯수만큼 늘어남
부서정보(4개) -> 사원 정보(14개) == 부서정보가 14개로 늘어남

# 3) n:n 관계 : 회원 <-> 권한 (좋지 않음)
# 1명의 회원은 여러개의 권한을 가질 수 있다.
# 1개의 권한은 여러명의 회원을 가질 수 있다.
# 이럴 때는 정규화 하여 1:n 관계로 변환을 해 주어야한다.

# 참고) 식별관계(참조키 설정) : 부모(기본키) <-> 자식(기본키, 참조키)
# 자식의 참조키가 자식의 기본키 일 때 식별관계가 된다.

#       비식별관계(참조키 설정) : 부모(기본키) <-> 자식(일반컬럼, 참조키)
# 자식의 참조키가 일반컬럼 일 때 비식별관계
# 예) 부서(부서번호 : 기본키) <-> 사원(부서번호 : 일반컬럼) : 비식별 관계