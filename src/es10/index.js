let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world         ';
console.log(hello2);
console.log(hello2.trimEnd());

try {
    
} catch {
    error
}


let entries = [["name", "daniel"], ["age", 29]];

console.log(Object.fromEntries(entries));

let mySimbol = `My Symbol`;
let symbol = Symbol(mySimbol);
console.log(symbol.description);