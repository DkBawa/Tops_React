import React from "react";

function UseCallBack({ onClick }) {
  console.log("ChildComponent");

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
export default UseCallBack;
