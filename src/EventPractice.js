import React, { useState } from "react";

const EventPractice = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="사용자명"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />

      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert(user + " : " + message);
        }}
      >
        확인
      </button>
    </div>
  );
};

export default EventPractice;
