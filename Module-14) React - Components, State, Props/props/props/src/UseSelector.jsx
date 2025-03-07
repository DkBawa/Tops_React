import React, { useRef } from "react";

function InputFocus() {
  let inputRef = useRef(null);

  let handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type Something Here......!" />
      <button onClick={handleFocus}> Focus input </button>
    </div>
  );
}
export default InputFocus;