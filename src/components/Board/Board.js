import { React } from "react";
import { Square } from "../Square";
import { colors } from "../../utils/colors";

const boardStyle = {
  border: `6px solid ${colors.orange}`,
  borderRadius: "10px",
  backgroundImage: "url('/blackboard.jpg')",
  backgroundSize: "cover",
  width: 300,
  height: 300,
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  margin: "40px auto",
};

const Board = (props) => {
  const { squares, onClick } = props;
  return (
    <section style={boardStyle}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </section>
  );
};

export default Board;
