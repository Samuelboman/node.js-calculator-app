import fs from "fs";

export function saveResult(operation, result) {
  const log = `${operation}: ${result}\n`;
  fs.appendFileSync("calculations.log", log, "utf8"); 
}