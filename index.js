// The difference is that the .push() method adds elements to the end of an Array and .unshift() adds them to the beginning of the array:

const superheroes = ["Catwoman", "Storm", "Jessica Jones"];

superheroes.push("Wonder Woman");
// => 4

superheroes;
// => ["Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]

const cities = ["New York", "San Francisco"];

cities.unshift("Boston", "Chicago");
// => 4

cities;
// => ["Boston", "Chicago", "New York", "San Francisco"]  