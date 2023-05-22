// Analize the component below
// Will ListItem be called on each reorder?

import {memo, useState} from "react";

export const List3 = () => {
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
          <ListItemMemoized key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({item}: {item: string}) => {
  console.log("Rendering list item", item);
  return <li>{item}</li>;
};

const ListItemMemoized = memo(ListItem);
