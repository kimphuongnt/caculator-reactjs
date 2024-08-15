import React, { useState, useEffect } from "react";

function Calculator() {
  // Khai báo state cho các biến số, kết quả và phép tính
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("+");

  // useEffect chạy một lần khi component mount
  useEffect(() => {
    console.log("Component did mount"); // Tương đương componentDidMount
    return () => {
      console.log("Component will unmount"); // Tương đương componentWillUnmount
    };
  }, []);

  // useEffect chạy mỗi khi num1, num2 hoặc operation thay đổi
  useEffect(() => {
    console.log("Component did update"); // Tương đương componentDidUpdate
    calculate(); // Gọi hàm tính toán mỗi khi có sự thay đổi
  }, [num1, num2, operation]);

  // Hàm tính toán kết quả dựa trên phép tính được chọn
  const calculate = () => {
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error"; // Kiểm tra chia cho 0
        break;
      default:
        result = 0;
    }
    setResult(result);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
