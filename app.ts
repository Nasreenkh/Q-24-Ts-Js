/*question no 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you
want to try more comparisons, write more tests. Have at least one True and one False result for
each of the following:
" Tests for equality and inequality with strings
" Tests using the lower case function
" Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
" Tests using "and" and "or" operators
" Test whether an item is in a array
" Test whether an item is not in a array */





// Tests for equality and inequality with strings
let string1: string = 'hello';
let string2: string = 'world';

// Test 11
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 === 'hello');

// Test 12
console.log("Is string1 not equal to 'world'? I predict True.");
console.log(string1 !== 'world');

// Test 13
console.log("Is string2 equal to 'hello'? I predict False.");
console.log(string2 === 'hello');

// Test 14
console.log("Is string2 not equal to 'world'? I predict False.");
console.log(string2 !== 'world');

// Tests using the lower case function
let uppercaseString: string = 'HELLO';
let lowercaseString: string = 'hello';

// Test 15
console.log("Is uppercaseString equal to lowercaseString after converting to lowercase? I predict True.");
console.log(uppercaseString.toLowerCase() === lowercaseString);

// Numerical tests involving equality and inequality
let num1: number = 10;
let num2: number = 5;

// Test 16
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

// Test 17
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let isSunny: boolean = true;
let isWarm: boolean = false;

// Test 18
console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm);

// Test 19
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

// Test 20
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
// Test 21
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));