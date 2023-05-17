// Using the provided API render a table of the characters in the GoT
// Columns to render: name, aliases, culture, titles
// Each page to display 5 characters

const API_URL = "https://anapioficeandfire.com/api/characters";
const data = await fetch(API_URL).then(res => res.json());
console.log(data);

export const Table1 = () => {
  return "Table";
};
