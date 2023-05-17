// What is wrong with the following code and how would you fix it?
// Fix the code below so that it is usable
// How would you improve this code for a real-world application?

import {useEffect, useState} from "react";

export const Fetcher1 = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://anapioficeandfire.com/api/characters");
    const data = await response.json();
    setLoading(false);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{loading ? <p>Loading...</p> : <p>Data loaded successfully!</p>}</div>;
};
