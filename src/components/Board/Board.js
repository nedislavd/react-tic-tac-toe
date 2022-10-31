import { Square } from "../Square";
import { colors } from "../../utils/colors";

const boardStyle = {
  border: `4px solid ${colors.orange}`,
  borderRadius: "8px",
  backgroundImage: "url('/blackboard.jpg')",
  backgroundSize: "cover",
  margin: "40px auto",
  alignContent: "flex-start",
  display: "flex",
  flexFlow: "row wrap",
};

const Board = (props) => {
  const { squares, onClick, winner } = props;
  const boardWidth = {
    width: `${Math.sqrt(squares.length) * 75}px`,
  };
  return (
    <section style={{ ...boardStyle, ...boardWidth }}>
      {squares.map((square, i) => {
        const highlight = winner && winner.includes(i);
        return (
          <Square
            key={i}
            value={square}
            highlight={highlight}
            onClick={() => onClick(i)}
          />
        );
      })}
    </section>
  );
};

export default Board;
