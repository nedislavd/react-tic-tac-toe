import { React } from "react";
import { colors } from "../../utils/colors";

const squareStyle = {
  border: `3px solid ${colors.orange}`,
  background: "transparent",
  cursor: "pointer",
  outline: "none",
  fontSize: "4rem",
  fontWeight: "600",
  color: "#fff",
};

/* Tic-Tac-Toe Square Element */
const Square = (props) => {
  const { value, onClick } = props;

  return (
    <button style={squareStyle} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
