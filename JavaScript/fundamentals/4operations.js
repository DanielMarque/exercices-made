const native = (operation, num1, num2) => {
  switch (operation) {
    case "-":
      return num1 - num2;
      break;

    case "+":
      return num1 + num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      break;
  }
};

console.log(native("/", 2, 2));
