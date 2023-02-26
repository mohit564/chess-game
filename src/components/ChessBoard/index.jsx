import React from "react";

// styles
import "./ChessBoard.css";

// components
import ChessBoardPiece from "../ChessBoardPiece";

// helpers
import { xAxis, yAxis } from "../../constants";
import { setRole } from "../../utils/chessboard";

const ChessBoard = () => {
  return (
    <div className="chessboard">
      {yAxis.map((row) => {
        return xAxis.map((column, columnIdx) => (
          <div
            className="chessboard-square"
            role={setRole(row, columnIdx)}
            data-position={`${column}${row}`}
          >
            <ChessBoardPiece row={row} column={column} />
          </div>
        ));
      })}
    </div>
  );
};

export default ChessBoard;
