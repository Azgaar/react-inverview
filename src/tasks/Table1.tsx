// Using the provided API render a table of the characters in the GoT
// Columns to render: aliases, name, culture, titles
// Each page to display 5 characters
// Add UI elements to navigate between pages
// Add a search box to filter the characters by name

const API_URL = "https://anapioficeandfire.com/api/characters?page=1&pageSize=5";
const data: Character[] = await fetch(API_URL).then(res => res.json());
console.log(data);

export const Table1 = () => {
  return <div>{data[0].url}</div>;
};

interface Character {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}
