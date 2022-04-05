//------------------------------Objeto en reposo---------------
const obj = {
    name: 'Daniel',
    age: 29,
    country: 'Col'
};

// let { name, ...all } = obj;
// console.log(name,all);  

let { country, ...all } = obj;
console.log(all);  

//------------------------------Objeto en reposo---------------

//-----------------------composición con otro objeto---------------
const obj = {
    name: 'Daniel',
    age: 29,
}

const obj1 = {
    ...obj,
    country: 'Col'
}

console.log(obj1);

//-----------------------composición con otro objeto---------------

//-----------------------Promise.finally----------------------

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ?resolve('Hello World')
            :reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//-----------------------Promise.finally----------------------

//-----------------------regex----------------------

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

//-----------------------regex----------------------