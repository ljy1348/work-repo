import React, { useState } from 'react'

function H_ProfileCard() {
    let [title, setTitle] = useState("Inje Lee");
  return (
    <div style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#4ea04e"
    }}>
        {/* title에 값이 있으면 h1태그 출현 */}
        {/* 코딩의 관례적 사용 : 어떤 변수에 값이 있으면 true */}
        {/* false = null, undefined, [], "", {}, 0 */}
        {title && <h1>{title}</h1>}
        <p>안녕하세요, 소플입니다.</p>
        <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    </div>
  )
}

export default H_ProfileCard