import React, { useRef } from "react";
import ScrollBox from "./ScrollBox";

function App() {
  const scrollBoxRef = useRef();

  return (
    <div>
      <ScrollBox ref={scrollBoxRef} />
      <button onClick={() => scrollBoxRef.current.scrollToBottom()}>
        맨 밑으로
      </button>
    </div>
  );
}

export default App;
