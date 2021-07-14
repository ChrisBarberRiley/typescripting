// Declaring a string
const personName: string = 'Chris';
// name = 4; wrong
// name = '4'; right

// Declaring a number
const num: number = 5;
// num = 4; right
// num = '4'; wrong

// Declaring an obj
const obj: { a: number; b: string } = {
  a: 1,
  b: 'Chris',
};

// Declaring a boolean
const isHuman: boolean = true;

// isHuman = 'false'; wrong
// isHuman = false; right

// Declaring an interface
interface Person {
  name: string;
  age: number;
  gender?: string; // optional param
}

// Using the interface
let personObj: Person = {
  name: 'Chris',
  age: 35,
};
// Reusing interface
let anotherPersonObj: Person = {
  name: 'Chris',
  age: 22,
  gender: 'male',
};

// Functions
const add = (a: number, b: number): number => a + b;
add(1, 2);

type SubFunc = (a: number, b: number) => number;
const sub: SubFunc = (a: number, b: number): number => a - b;
sub(1, 2);

// Unions
let numOrString: number | string = 'five';
// numOrString = 5 right
// numOrString = '5' right
// numOrString = false wrong

// Combining interface
interface Chicken {
  second: boolean;
}

interface Egg {
  first: boolean;
}

type ChickenEgg = Chicken & Egg;

const ChickenEgg: ChickenEgg = {
  second: true,
  first: true,
};

// casting
let input = document.querySelector('input[type="text"]') as HTMLInputElement;
