import React, { useState } from "react";

// styles
import "./ChessBoard.css";

// components
import ChessBoardPiece from "../ChessBoardPiece";

// helpers
import { xAxis, yAxis } from "../../constants";
import { setRole } from "../../utils/chessboard";

const ChessBoard = () => {
  const [knightPossibleMoves, setKnightPossibleMoves] = useState([]);

  // Check if move is valid or not on chessboard
  const testSquare = (x, y, moves) => {
    if (x > 8 || x < 1 || y > 8 || y < 1) return;
    moves.push({ x, y });
  };

  const getPossibleMovesForKnight = (x, y) => {
    let possibleMoves = [];

    // Top side possible moves
    testSquare(x - 1, y + 2, possibleMoves);
    testSquare(x + 1, y + 2, possibleMoves);

    // Bottom side possible moves
    testSquare(x - 1, y - 2, possibleMoves);
    testSquare(x + 1, y - 2, possibleMoves);

    // Left side possible moves
    testSquare(x - 2, y - 1, possibleMoves);
    testSquare(x - 2, y + 1, possibleMoves);

    // Right side possible moves
    testSquare(x + 2, y - 1, possibleMoves);
    testSquare(x + 2, y + 1, possibleMoves);

    setKnightPossibleMoves(possibleMoves);
  };

  return (
    <div className="chessboard">
      {yAxis.map((row) => {
        return xAxis.map((column, columnIdx) => (
          <div
            key={`${column}${row}`}
            className={`chessboard-square ${
              knightPossibleMoves.some(
                (pos) => pos.y === row && pos.x === columnIdx + 1
              )
                ? "possible-move"
                : ""
            }`}
            role={setRole(row, columnIdx)}
            data-position={`${column}${row}`}
            onClick={() => getPossibleMovesForKnight(columnIdx + 1, row)}
          >
            <ChessBoardPiece row={row} column={column} />
          </div>
        ));
      })}
    </div>
  );
};

export default ChessBoard;
