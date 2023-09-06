import React from 'react'

function F_Clock() {

    let date = new Date().toLocaleTimeString();
  return (
    <div>
        <h1>안녕, 리액트</h1>
        <h2>
            현재 시간 : {date}
            </h2>
    </div>
  )
}

export default F_Clock