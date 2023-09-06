import React, { useState } from 'react'

function B_Exam() {
    let [title, setTitle] = useState("제목");
    let [publisher, setPublisher] = useState("출판사");
    let [author, setAuthor] = useState("작자");
    let [stock, setStock] = useState("재고");
  return (
    <div className="wrapper">
    {/* 빈공간 */}
    <div className="imageContainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        className="image"
      />
    </div>

    {
      //TODO : 컴포넌트를 작성하세요
      //TODO : title = "제목", publisher="출파나",  author="작자", stock="재고"
    }
    <div className="contentContainer">
      <span className="nameText">{title} </span>
      <span className="commentText">{publisher} <br/> </span>
      <span className="commentText">{author}  </span>
      <span className="commentText">{stock}  </span>
    </div>
  </div>
  )
}

export default B_Exam