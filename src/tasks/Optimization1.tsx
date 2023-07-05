// Analyze the component below
// How would you optimize it?

import {useEffect, useState} from "react";

const data = new Array(10).fill(0).map(() => "complex content");

export const Optimization1 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>Current time: {time}</p>

      <table>
        <tbody>
          {data.map(item => (
            <ComplexContent item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const ComplexContent = ({item}: {item: string}) => {
  return <tr>{item}</tr>;
};
