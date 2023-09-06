// DOM : Document Object Model, html 문서(태그 등이 있음)
// html 웹 문서 동작
// 1) 웹 브라우저에서 html 문서를 읽어들임(파싱 : 문법 해석)
// 2) 파싱된 문서 -> 메모리에 저장(DOM 저장됨)
// 파싱된 문서(dom) : 트리구조(자료구조)
// 예) html 현재 문서 (03_dom.detail.html)
//                      window(최상위 부모객체 : html문서, 주소창, 메뉴, 상태바)
//                          |
//                      document(객체, html문서)
//                          |
//                      html(태그)
//                          |
//                    head  -  body
//                              |
//                       div    -     script
//                        |             |
//                      내용            js

// todo html 문서(DOM) 특징(노드) : 태그(tag), 속성(atribute), 텍스트(text, 내용), 주석(comment)
// todo 태그, 속성, 텍스트, 주석 별로 구분해서 트리구조로 메모리에 저장
// todo 위의 그림이 dom을 시각화한 것임
// todo DOM 접근(선택)함수 : querySelector(css선택자)



