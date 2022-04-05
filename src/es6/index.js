//--------------------------------------------------- Primer Caso -----------------------------------------------
function newFunction(name, age, country){
    var name = name || 'daniel';
    var age = age || 29;
    var country = country || 'COL';
    console.log(name,age, country);
}


//es6
function newFunction2(name = 'daniel', age = 29, country = 'COL'){

    console.log(name, age, country);

};

newFunction2();
newFunction2('Ricardo', '23', 'MX');
//--------------------------------------------------- Primer Caso -----------------------------------------------

//--------------------------------------------------- Segundo Caso -----------------------------------------------
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2); 
//--------------------------------------------------- Segundo Caso -----------------------------------------------

//--------------------------------------------------- Tercer Caso -----------------------------------------------
let lorem1 = "Lorem Ipsum passages, and more recently with desktop publishing \n"
+ "otra frase que necesitamos ipsum"

//es6
let lorem2 = `otra frase que necesitamos ipsum
ahora es otra frase epica
`;

console.log(lorem1);
console.log(lorem2);
//--------------------------------------------------- Tercer Caso -----------------------------------------------

//--------------------------------------------------- Cuarto Caso -----------------------------------------------
let person = {
    'name': 'daniel',
    'age': '29',
    'country': 'COL',
};

console.log(person.name, person.age);

//es6
let { name, age } = person;
console.log(name, age );
//--------------------------------------------------- Cuarto Caso -----------------------------------------------

//--------------------------------------------------- Quinto Caso -----------------------------------------------
//es6
let team1 =['Daniel', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, 'Ramon', ...team2, 'Manuela'];

console.log(education);
//--------------------------------------------------- Quinto Caso -----------------------------------------------

//--------------------------------------------------- Sexto Caso -----------------------------------------------
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = "b";
a = "a";

//--------------------------------------------------- Sexto Caso -----------------------------------------------

//--------------------------------------------------- Septimo Caso -----------------------------------------------
let nombre = 'daniel';
let edad = 29;

//es5
obj = {

    nombre: nombre, 
    edad: edad

};

//es6
obj2 = { 
    
    nombre, 
    edad

};
console.log(obj2);
//--------------------------------------------------- Septimo Caso -----------------------------------------------

//--------------------------------------------------- Octavo Caso -----------------------------------------------
const names = [
    { name: 'Daniel', age: 29 },
    { name: 'Yesica', age: 22 }
]


//es5
let listOfNames = names.map(function (item){
    console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ..
}

const square = num => num * num;

//--------------------------------------------------- Octavo Caso -----------------------------------------------

//--------------------------------------------------- Noveno Caso -----------------------------------------------

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!');
        }else {
            reject('Ups!!');
        }
    });
}
 helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//--------------------------------------------------- Noveno Caso -----------------------------------------------

//--------------------------------------------------- Decimo Caso -----------------------------------------------

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;        
    }

    sumar (valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}


const calc = new calculator();
console.log(calc.sumar(2,2));

//--------------------------------------------------- Decimo Caso -----------------------------------------------