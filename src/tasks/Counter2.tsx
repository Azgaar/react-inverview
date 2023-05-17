// Analyze the component below
// What the counter will show after clicking the button once?
// Why is it so?

import {useState} from "react";

export const Counter2 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>count is {count}</button>;
};
