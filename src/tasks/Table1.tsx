// Using the provided API render a table of the characters in the GoT
// Columns to render: aliases, name, culture, titles
// Each page to display 5 characters
// Add UI elements to navigate between pages
// Add a search box to filter the characters by name

const API_URL = "https://anapioficeandfire.com/api/characters?page=1&pageSize=5";
const data = await fetch(API_URL).then(res => res.json());
console.log(data);

export const Table1 = () => {
  return <div>Table</div>;
};
