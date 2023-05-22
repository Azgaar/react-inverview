// Analize the component below
// What is the problem with this component?
// How would you fix it?

import {useState} from "react";

export const List1 = () => {
  const [items, setItems] = useState(["1. Apple", "2. Banana", "3. Orange"]);

  const reorder = () => {
    setItems(items => {
      const newItems = [...items];
      newItems.sort(() => Math.random() - 0.5);
      return newItems;
    });
  };

  return (
    <div>
      <button onClick={reorder}>Reorder</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
