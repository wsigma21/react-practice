import { ColorMessage } from "./ColorMessage";

export const Message = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ColorMessage color={"pink"} fontSize={"30px"}>
        元気ですか？
      </ColorMessage>
      <ColorMessage color={"red"} fontSize={"15px"}>
        もちろん元気です！
      </ColorMessage>
    </>
  )
}