import './index.css';
// import { TailWindCss } from "./components/TailwindCss";
// import { Message } from "./components/Message";
// import { CountApp } from "./components/CountApp";
import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
  const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <>
      <div className="p-10">
        {/* <Message />
        <CountApp /> */}
        {/* <TailWindCss />  */}
        {isAdmin ? <span>管理者です</span>:<span className="text-red-400 font-bold">管理者以外です</span>}
        <button onClick={onClickSwitch} className="bg-blue-300 border-0 p-2 m-2 rounded-md hover:text-white">切り替え</button>
        <Card isAdmin={isAdmin} />
      </div>
    </>
  );
};