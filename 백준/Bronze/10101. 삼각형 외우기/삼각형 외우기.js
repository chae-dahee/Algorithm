const filePath = process.platform === "linux" ? "dev/stdin" : "10_기하직사각형삼각형/10101.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const TRIANGLE_ANGLE_SUM = 180;
const TRIANGLE_TYPES = {
  ERROR: "Error",
  EQUILATERAL: "Equilateral",
  ISOSCELES: "Isosceles",
  SCALENE: "Scalene",
};
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
const getTriangleType = (angle1, angle2, angle3) => {
  if (angle1 + angle2 + angle3 !== TRIANGLE_ANGLE_SUM) {
    return TRIANGLE_TYPES.ERROR;
  }
  const isEquilateral = angle1 === angle2 && angle2 === angle3;
  const isIsosceles =
    angle1 === angle2 || angle2 === angle3 || angle3 === angle1;
  switch (true) {
    case isEquilateral:
      return TRIANGLE_TYPES.EQUILATERAL;
    case isIsosceles:
      return TRIANGLE_TYPES.ISOSCELES;
    default:
      return TRIANGLE_TYPES.SCALENE;
  }
};
console.log(getTriangleType(a, b, c));