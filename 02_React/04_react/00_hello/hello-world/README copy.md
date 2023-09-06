# react 프로젝트 만들기가 안될 때(최초에만 실행) :
npm install -g create-react-app

# react 프로젝트 만들기 :
npx create-react-app 프로젝트명

# react 프로젝트 실행하기 :
cd 프로젝트명 (프로젝트명 폴더로 들어가기)
npm start    (리액트 서버 가동 명령어)

# react 프로젝트 중단하기 :
vscode 터미널 창에서 : ctrl + c (2번이상 타이핑하고 엔터)

# react 화면 보기(웹 브라우저 주소창에 아래 입력)
http://localhost:3000

# React(페이스북 점유율 1위) / Vue(개인) / Angular js(구글 - 도태됨)

# React / vue : SPA(Single Page Application) 개발
html 1개로 사이트 개발(각 페이지가 js로 코딩되어 html로 변환됨) - 컴포넌트 개발

# 컴포넌트 개발 방법
전체 페이지가 아니라 필요한 부분만 변경하여 재사용성과 성능을 증가시킨다.

# 컴포넌트 
부모.js 가 있고 자식.js가 있다. 부모.js에 자식.js를 끼워 넣는다. 끼워넣는 자식.js가 바뀌면 컴포넌트가 바뀐다.
자식.js 의 이름으로 새로운 html태그가 생성된다.
<자식파일명>자식 파일의 내용</자식파일명>
이런식으로 작동된다.

# node_modules
리액트 라이브러리 파일
용량이 크기 때문에 소스파일 공유할 때 빼고 줘야함
npm install 로 다시 받을 수 있음.

# 통신 라이브러리 설치 : axios (과거 : ajax)
npm install axios

# 설치 확인 : pachage.json / dependancy 안에 axios 확인

# 가짜 서버 설치 : json-server(오픈소스 : 무료) : 기본기능만 존재



