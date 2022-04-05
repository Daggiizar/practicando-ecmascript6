const hello = () => {
    return 'hello!'
}

export default hello;

import { hello } from './module';

hello();

function* helloWolrd() {
    if (true){
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWolrd ();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);