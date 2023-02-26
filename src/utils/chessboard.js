export function setRole(rowId, columnId) {
  if (rowId % 2 === 0) {
    if (columnId % 2 === 0) {
      return "black";
    }
    return "white";
  } else {
    if (columnId % 2 === 0) {
      return "white";
    }
    return "black";
  }
}
