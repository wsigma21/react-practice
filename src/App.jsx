import { TailWindCss } from "./components/TailwindCss";
import { Message } from "./components/Message";
import { CountApp } from "./components/CountApp";
import './index.css';

export const App = () => {

  return (
    <>
      <div className="p-10">
        <Message />
        <CountApp />
        <TailWindCss />
      </div>
    </>
  );
};