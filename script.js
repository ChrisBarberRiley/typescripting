// Declaring a string
var personName = 'Chris';
// name = 4; wrong
// name = '4'; right
// Declaring a number
var num = 5;
// num = 4; right
// num = '4'; wrong
// Declaring an obj
var obj = {
    a: 1,
    b: 'Chris'
};
// Declaring a boolean
var isHuman = true;
// Using the interface
var personObj = {
    name: 'Chris',
    age: 35
};
// Reusing interface
var anotherPersonObj = {
    name: 'Chris',
    age: 22,
    gender: 'male'
};
// Functions
var add = function (a, b) { return a + b; };
add(1, 2);
var sub = function (a, b) { return a - b; };
sub(1, 2);
// Unions
var numOrString = 'five';
var ChickenEgg = {
    second: true,
    first: true
};
// casting
var input = document.querySelector('input[type="text"]');
