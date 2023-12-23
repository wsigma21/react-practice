import { useState,useCallback } from "react";

import { Child } from "./Child"
export const CountApp = () => {
  const [num, setNum] = useState(0);
  console.log("CountAppレンダリング")
  const onClickIncement = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0)
  },[]);
  return (
    <>
      <button className="bg-green-300 border-0 p-2 rounded-md hover:bg-green-400 hover:text-white" onClick={onClickIncement}>+2</button>
      <p>{num}</p>
      <Child onClickReset={onClickReset}/>
    </>
  )
}