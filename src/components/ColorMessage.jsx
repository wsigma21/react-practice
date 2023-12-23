export const ColorMessage = (props) => {
  const {color, fontSize} = props;
  const onClickButton = () => alert();
  return (
    <>
      <h1>こんにちは！</h1>
      <p style={{color, fontSize}}>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}