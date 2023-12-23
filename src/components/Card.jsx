import { EditButton } from "./EditButton"

export const Card = props => {
  const {isAdmin} = props;
  console.log("isAdmin=", isAdmin);
  return (<>
    <div className="container">
      <div className="h-64 bg-amber-300 rounded-md w-2/3 text-center flex flex-col justify-center">
        <p>山田たろう</p>
        <EditButton isAdmin={isAdmin}/>
      </div>
    </div>
  </>);
}