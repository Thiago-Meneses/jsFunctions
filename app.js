function myMessage() {
    let message = 'Hello World';
    return function displayMessage() {
        console.log(message);
    };
}

let myVar = myMessage();
console.log(myVar());    //output: "Hello World" e "undefined", o primeiro valor vinculado à linha onde console.log foi digitado e o último vinculado à linha onde o próprio comando foi digitado
console.log(myVar());