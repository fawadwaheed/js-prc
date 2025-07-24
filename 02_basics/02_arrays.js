const marvelHeroes = ["ironman", "hulk", "thor"];
const dcHeroes = ["batman", "superman", "robin"];

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes [3][1]);

// const allHEros = marvelHeroes.concat(dcHeroes)
// console.log(allHEros);

const allNewHeroes = [...marvelHeroes, ...dcHeroes]

// console.log(allNewHeroes);

const antherArray = [1, 2, 3,[4, 5, 6], 7,[6, 7,[4, 5]]]

const realAnotherArray = antherArray.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.isArray("fawad"));
console.log(Array.from("fawad"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
 