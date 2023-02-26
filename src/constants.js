// images of black pieces
import bb from "./assets/bb.png";
import bk from "./assets/bk.png";
import bn from "./assets/bn.png";
import bp from "./assets/bp.png";
import bq from "./assets/bq.png";
import br from "./assets/br.png";

// images of white pieces
import wb from "./assets/wb.png";
import wk from "./assets/wk.png";
import wn from "./assets/wn.png";
import wp from "./assets/wp.png";
import wq from "./assets/wq.png";
import wr from "./assets/wr.png";

export const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const yAxis = [8, 7, 6, 5, 4, 3, 2, 1];

export const whitesPosition = [
  {
    name: "Pawn",
    length: 8,
    image: wp,
    position: {
      letter: ["a", "b", "c", "d", "e", "f", "g", "h"],
      number: 2,
    },
  },
  {
    name: "Knight",
    length: 2,
    image: wn,
    position: { letter: ["b", "g"], number: 1 },
  },
  {
    name: "Bishop",
    length: 2,
    image: wb,
    position: { letter: ["c", "f"], number: 1 },
  },
  {
    name: "Rook",
    length: 2,
    image: wr,
    position: { letter: ["a", "h"], number: 1 },
  },
  {
    name: "Queen",
    length: 1,
    image: wq,
    position: { letter: ["d"], number: 1 },
  },
  {
    name: "King",
    length: 1,
    image: wk,
    position: { letter: ["e"], number: 1 },
  },
];

export const blacksPosition = [
  {
    name: "Pawn",
    length: 8,
    image: bp,
    position: {
      letter: ["a", "b", "c", "d", "e", "f", "g", "h"],
      number: 7,
    },
  },
  {
    name: "Knight",
    length: 2,
    image: bn,
    position: { letter: ["b", "g"], number: 8 },
  },
  {
    name: "Bishop",
    length: 2,
    image: bb,
    position: { letter: ["c", "f"], number: 8 },
  },
  {
    name: "Rook",
    length: 2,
    image: br,
    position: { letter: ["a", "h"], number: 8 },
  },
  {
    name: "Queen",
    length: 1,
    image: bq,
    position: { letter: ["d"], number: 8 },
  },
  {
    name: "King",
    length: 1,
    image: bk,
    position: { letter: ["e"], number: 8 },
  },
];
