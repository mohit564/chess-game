import React from "react";

// styles
import "./ChessBoardPiece.css";

// helpers
import { whitesPosition, blacksPosition } from "../../constants";

const ChessBoardPiece = ({ row, column }) => {
  const piece = [...blacksPosition, ...whitesPosition].find(
    (piece) =>
      piece.position.number === row && piece.position.letter.includes(column)
  );

  if (!piece) return null;

  return (
    <img
      src={piece.image}
      className="chessboard-piece"
      alt="chessboard-piece"
    />
  );
};

export default ChessBoardPiece;
