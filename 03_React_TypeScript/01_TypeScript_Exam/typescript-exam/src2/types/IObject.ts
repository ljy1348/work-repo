// 객체 자료형을 정의하는 파일
// 사용법 : export default <- 다른 자바스크립트에서 사용하게 만들어주는것
// export default interface 객체자료형명 {속성 : 자료형| 자료형2, 속성2 : 자료형,....}
// 속성?: 자료형|자료형2 <- 옵셔널(?), 속성이 없어도 오류 없이 실행되게 해줌
// 즉, IObject를 사용했는데, 객체 안에 name값만 있고 id가 설정되어 있지 않아도
// 오류 없이 실행 가능(출력하면 오류 출력)
export default interface IObject {
    id?: any | null, //id에 값이 있으면 any, 없으면 null 
    name : string   //name에는 문자열만 들어올 수 있다.
}