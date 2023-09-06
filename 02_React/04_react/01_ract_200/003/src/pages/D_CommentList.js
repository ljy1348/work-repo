import React, { useState } from 'react'

function D_CommentList() {
    // todo 리액트의 반복문
    // 객체배열 : [{},{},....] == JSON 문서 데이터 형태(인터넷 통신 표준)
    // 프론트(데이터 보내기) <= JSON(데이터) => 백엔드(DB넣기)
    let arr = [ 
        {
            name : "이인제",
            comment : "안녕하세요, 소플입니다."
        }, {
            name : "유재석",
            comment : "리액트, 재미있어요!!"
        }, {
            name : "강민경",
            comment : "저도 리액트 배워보고 싶어요!!"
        }
    ];
    // 변수, 함수
    let [comments, setComments] = useState(arr);
    
    // HTML 태그 작성 부분 : return 부분
    // 사용법 : 배열변수.map((value, index, array)=>{반복문;});
    // value : 배열의 값, index : 배열의 번호, array : 배열
  return (
    <div>
        {arr.map((a,idx)=>{
            return (
                <div className="wrapper" key={idx}>
                <div className="imageContainer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    className="image"
                  />
                </div>
    
                <div className="contentContainer">
                  <span className="nameText">{a.name}</span>
                  <span className="commentText">{a.comment}</span>
                </div>
              </div>
            )
        })
        }
    </div>
  )
}

export default D_CommentList