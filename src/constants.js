export const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const yAxis = [8, 7, 6, 5, 4, 3, 2, 1];

export const whitesPosition = [
  {
    name: "Pawn",
    length: 8,
    alias: "wp",
    position: {
      letter: ["a", "b", "c", "d", "e", "f", "g", "h"],
      number: 2,
    },
  },
  {
    name: "Knight",
    length: 2,
    alias: "wn",
    position: { letter: ["b", "g"], number: 1 },
  },
  {
    name: "Bishop",
    length: 2,
    alias: "wb",
    position: { letter: ["c", "f"], number: 1 },
  },
  {
    name: "Rook",
    length: 2,
    alias: "wr",
    position: { letter: ["a", "h"], number: 1 },
  },
  {
    name: "Queen",
    length: 1,
    alias: "wq",
    position: { letter: ["d"], number: 1 },
  },
  {
    name: "King",
    length: 1,
    alias: "wk",
    position: { letter: ["e"], number: 1 },
  },
];

export const blacksPosition = [
  {
    name: "Pawn",
    length: 8,
    alias: "bp",
    position: {
      letter: ["a", "b", "c", "d", "e", "f", "g", "h"],
      number: 7,
    },
  },
  {
    name: "Knight",
    length: 2,
    alias: "bn",
    position: { letter: ["b", "g"], number: 8 },
  },
  {
    name: "Bishop",
    length: 2,
    alias: "bb",
    position: { letter: ["c", "f"], number: 8 },
  },
  {
    name: "Rook",
    length: 2,
    alias: "br",
    position: { letter: ["a", "h"], number: 8 },
  },
  {
    name: "Queen",
    length: 1,
    alias: "bq",
    position: { letter: ["d"], number: 8 },
  },
  {
    name: "King",
    length: 1,
    alias: "bk",
    position: { letter: ["e"], number: 8 },
  },
];
