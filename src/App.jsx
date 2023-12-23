import { useState } from "react";
import { ColorMessage } from "./components/ColorMessage";
import { TailWindCss } from "./components/TailwindCss";
import './index.css';

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickIncement = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
  };
  const onClickReset = () => setNum(0);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ColorMessage color={"pink"} fontSize={"30px"}>
        元気ですか？
      </ColorMessage>
      <ColorMessage color={"red"} fontSize={"15px"}>
        もちろん元気です！
      </ColorMessage>
      <button onClick={onClickIncement}>+1</button>
      <p>{num}</p>
      <button onClick={onClickReset}>リセット</button>
      <TailWindCss />
    </>
  );
};