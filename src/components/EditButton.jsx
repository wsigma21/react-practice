import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const EditButton = (props) => {
  const {isAdmin} = props;
  const onClickEdit = () => alert("編集"); 

  // ボタンのデザインの切り替え
  const normalStyle = "bg-green-300 w-48 mx-auto border-0 p-2 m-2 rounded-md hover:text-white";
  const disabledStyle = "bg-gray-300 w-48 mx-auto border-0 p-2 m-2 rounded-md";
  const style = isAdmin ? normalStyle : disabledStyle;

  // stateを使用したいコンポーネントでuseContextを使って呼び出す
  const contextValue = useContext(AdminFlagContext);
  const {sampleValue} = useContext(AdminFlagContext);
  console.log("contextValue=", contextValue);
  console.log("sampleValue=", sampleValue);
  return (
    <>
      <button 
        className={style}
        disabled={!isAdmin}
        onClick={onClickEdit}
      >編集する</button>
    </>
  );
}