// Analize the component below
// Will ListItem is called on each reorder?

import {memo, useState} from "react";

export const List2 = () => {
  const [items, setItems] = useState(["1. Apple", "2. Banana", "3. Orange"]);

  const reorder = () => {
    const newItems = [...items];
    newItems.sort(() => Math.random() - 0.5);
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={reorder}>Reorder</button>

      <ul>
        {items.map(item => (
          <ListItemMemoized key={item} item={item} />
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
