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

const coolCities = ["New York", "San Francisco"];

const copyOfCoolCities = [...coolCities];

copyOfCoolCities;
//=> ["New York", "San Francisco"]

// You might wonder why we would do this rather than just copyOfCoolCities = coolCities. The answer is that coolCities points to a location in memory and when you use the assignment operator to create a copy, you create a second variable that points to the same location. What this means is that, if you change copyOfCoolCities, coolCities is changed as well (and vice versa).

// A note about copying arrays in JavaScript Copying arrays in JavaScript is complicated! Some methods of copying create deep copies and some create shallow copies. Using the spread operator to copy an array creates a shallow copy. What this means is that, if you use it to copy a nested array, the inner array (or arrays) still points to the same location in memory as in the original array. So if you modify the inner array in the copy, it changes the inner array in the original array as well (and vice versa). Don't worry too much about shallow and deep copies at this point: just know that you can safely use the spread operator to clone non-nested arrays.

// Because the spread operator is an operator rather than a method, it works differently than push() and unshift(): in the example above, we're constructing an Array using literal notation (i.e., typing the square brackets) and populating it by using the spread operator on the Array we want to copy.

// Where the spread operator comes in especially handy is when we want to add one or more new elements either before or after the elements in the original array (or both) without mutating the original array. To add an element to the front of the new array, we simply type in the new element before spreading the elements in the original array:
const coolCitiies = ["New York", "San Francisco"];

const allCitiies = ["Los Angeles", ...coolCities];

coolCitiies;
// => ["New York", "San Francisco"]

allCitiies;
// => ["Los Angeles", "New York", "San Francisco"]

const coolCats = ["Hobbes", "Felix", "Tom"];

const allCats = [...coolCats, "Garfield"];

coolCats;
// => ["Hobbes", "Felix", "Tom"]

allCats;
// => ["Hobbes", "Felix", "Tom", "Garfield"]