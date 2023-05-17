// Analyze the component below
// Name the issues you see, expain your opinion
// Correct the issues

import {useState} from "react";

export const Counter1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>count is {count}</button>;
};
