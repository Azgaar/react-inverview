const firstNames = ["Jonny", "Piter", "Mary", "Alan", "Pit", "Harry", "Lisa", "Violet", "Bruce", "Lindsey"];
const lastNames = ["Doe", "Smith", "Adams", "Brown", "Black", "White", "Lowrence", "Miller", "Davis", "Wilson"];

export const getRandomFirstName = () => firstNames[Math.floor(Math.random() * firstNames.length)];
export const getRandomLastName = () => lastNames[Math.floor(Math.random() * lastNames.length)];
