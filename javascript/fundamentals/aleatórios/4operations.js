// const native = (operation, num1, num2) => {
//   switch (operation) {
//     case "-":
//       return num1 - num2;
//       break;

//     case "+":
//       return num1 + num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       break;
//   }
// };

const native = (operation, num1, num2) => {
  return eval(num1 + operation + num2);
};

console.log(native("/", 2, 2));
