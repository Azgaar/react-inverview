// Implement a calculator that takes two operands and an operator and performs the calculation
// The rusult should be updated on input/select change

import "./Calculator.css";

export const Calculator1 = () => {
  return (
    <div className="calculator">
      <h3>Calculator</h3>
      <input id="operand1" className="operand" type="number" />
      <select id="operator">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input id="operand2" className="operand" type="number" />=<span id="result">0</span>
    </div>
  );
};
