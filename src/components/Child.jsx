import { memo } from "react";

export const Child = memo((props) => {
  console.log("Child レンダリング")
  const { onClickReset } = props;
  console.log(props);
  return (
    <div>
      <p>Childコンポーネント</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white" onClick={onClickReset}>リセット</button>
    </div>);
})