import { EditButton } from "./EditButton"

export const Card = () => {
  return (<>
    <div className="container">
      <div className="h-64 bg-amber-300 rounded-md w-2/3 text-center flex flex-col justify-center">
        <p>山田たろう</p>
        <EditButton />
      </div>
    </div>
  </>);
}