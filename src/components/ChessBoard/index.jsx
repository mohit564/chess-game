import React from "react";

import "./ChessBoard.css";

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
          />
        ));
      })}
    </div>
  );
};

export default ChessBoard;
