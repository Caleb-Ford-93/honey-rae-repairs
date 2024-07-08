import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0); // returns [stateVariable, setterFunction] pass 0 into useState() to initialize count as 0
  const handleBtnClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Hello!</h1>
      <div>This is amazing!</div>
      <button className="btn-secondary" onClick={handleBtnClick}>
        Click me!
      </button>
      <div>Count: {count}</div>
    </>
  );
};