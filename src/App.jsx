import { useState,useCallback } from "react";
import { ColorMessage } from "./components/ColorMessage";
import { TailWindCss } from "./components/TailwindCss";
import { Child } from "./components/Child"
import './index.css';

export const App = () => {
  const [num, setNum] = useState(0);
  console.log("Appレンダリング")
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
      <div className="p-10">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <ColorMessage color={"pink"} fontSize={"30px"}>
          元気ですか？
        </ColorMessage>
        <ColorMessage color={"red"} fontSize={"15px"}>
          もちろん元気です！
        </ColorMessage>
        <button  className="bg-green-300 border-0 p-2 rounded-md hover:bg-green-400 hover:text-white" onClick={onClickIncement}>+2</button>
        <p>{num}</p>
        <TailWindCss />
        <Child onClickReset={onClickReset}/>
      </div>
    </>
  );
};