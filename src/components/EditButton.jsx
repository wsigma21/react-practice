export const EditButton = (props) => {
  const {isAdmin} = props;
  const onClickEdit = () => alert("編集"); 
  const normalStyle = "bg-green-300 w-48 mx-auto border-0 p-2 m-2 rounded-md hover:text-white";
  const disabledStyle = "bg-gray-300 w-48 mx-auto border-0 p-2 m-2 rounded-md";
  const style = isAdmin ? normalStyle : disabledStyle;
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