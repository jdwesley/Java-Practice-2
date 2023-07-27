//alert('picker boy J');

console.log(1);
console.log(2);

let age = 25;
let year = 2023
console.log(age, year);

age = 30
console.log(age);

const points = 100;
console.log(points);

//do not use var, let and const are modern variables
//cannot use spaces in variable
//cant start with a #
//can use _,$
//cant use a reserve key word such a const for the variable

//data types: number(1,2,3); string "hello world"; boolean(true/false); null(variable with no value); undefined(defualt for variable not defined); object(arrays, dates, literals); symbol(used with obects)

console.log('fuck boy power');

let email = 'jdanderson@fcconnexion.net';
console.log(email);

//string concatenation
let firstname = 'Julian';
let lastname = 'Wesley';
let fullname = firstname + ' ' + lastname;
console.log(fullname);

//getting characters
console.log(fullname[2]);

//string length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
//let result = fullname.toLowerCase();
//console.log(result);
let index = email.indexOf('@');
console.log(index);
//let result = email.slice(0,10);


//let result = email.substr(4,10);
//let result = email.replace('j', 'z');
//console.log(result);


let radius = 10;
const pi = 3.14;
//console.log(radius, pi);
//math operators +, -, *, /, **, %;

console.log(10/2);
//let result = radius % 3;
//let result = pi * radius**2;


//order of operation - BIDMAS

//let likes = 10;
//likes = likes + 1;
//likes++
//likes--
//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;
//console.log(likes);

//NaN not a number

console.log(5 / 'hello');

//let result = 'the blog has ' + likes + ' likes';


//template strings
const title = 'Fuckboy power';
const author = 'JD';
const likes = 30;


//concatenation way
//let result = title  + ' written by ' + author  + ' has ' + likes  + ' likes';


//template string way
//let result = `${title} written by ${author} has ${likes} likes`;


//creating html templates
let html = `
    <h2>${title}</h2>
    <p>by ${author}</p>

`;
console.log(html);

let fuckboys = ['jake, steve, will'];
fuckboys[1] = ' adam';

console.log(fuckboys[1]);

//let ages = [24, 56, 45, 37];
//console.log(ages[2]);


// array methods

//let result = fuckboys.join(' -');
//let result = fuckboys.concat(['adam', 'devine']);
//let result = fuckboys.push('adam');
//let result = fuckboys.pop()

//console.log(result);

let fuck;

console.log(fuck, fuck + 3, `the age is ${fuck}`);

//booleans & comparisons
console.log(true, false, 'true', 'false');

//methods can return booleans
//let trout = 'brown';
//let result = trout.includes('w');
//console.log(result);

let trout = 'brown';
console.log(trout == 'brown');
console.log(trout == 'rainbow');
console.log('brown' > 'Brown');
console.log(trout > 'rainbow');

//loose camparison (differnt types can still be equal)

console.log(trout != trout);
console.log(trout != 'trout');

//strit comparison (different types cannot be equal)

console.log(trout === trout);
console.log(trout === 'trout');

//type conversion
let score = '100';
score = Number(score);
console.log(score + 1);
let Nan = Number('hello');
console.log(Nan);
//let result = String(50);

let result = Boolean(100, 0, '');

console.log(result, typeof result);


//string in console is white
//number is idigo


























