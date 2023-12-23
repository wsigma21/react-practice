import { ColorMessage } from "./components/ColorMessage";
export const App = () => {
  const contentPinkStyle = {
    color: "pink",
    fontSize: "30px"
  }
  return (
    <>
      <ColorMessage color={contentPinkStyle.color} fontSize={contentPinkStyle.fontSize}/>
    </>
  );
};