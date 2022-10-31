import { colors } from "../../utils/colors";

const squareStyle = {
  border: `2px solid ${colors.orange}`,
  backgroundColor: "transparent",
  boxSizing: "border-box",
  cursor: "pointer",
  outline: "none",
  fontSize: "50px",
  lineHeight: "70px",
  height: "75px",
  width: "75px",
  textAlign: "center",
  fontWeight: "600",
  color: "#fff",
  fontFamily: "sans-serif",
};

/* Tic-Tac-Toe Square Element */
const Square = (props) => {
  const { value, onClick, highlight } = props;

  const backgroundStyles = {
    backgroundColor: highlight ? colors.green : "transparent",
  };

  return (
    <button style={{ ...squareStyle, ...backgroundStyles }} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
