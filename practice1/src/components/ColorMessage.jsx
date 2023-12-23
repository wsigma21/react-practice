export const ColorMessage = (props) => {
  const { color, fontSize, children } = props;
  const pStyle = {
    color,
    fontSize
  }
  return (
    <>
      <p style={pStyle}>{children}</p>
    </>
  )
}