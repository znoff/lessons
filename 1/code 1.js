
'use strict';


function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);


let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());


let twelve = "12.2";

console.log(Math.round(twelve));
console.log(parseFloat(twelve));
console.log(parseInt(twelve));



function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();

}

learnJS("javascript", function () {
    console.log("я прошел третий урок!")
})


function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();

}

function done() {
    console.log("я прошел третий урок!")
}



learnJS("javascript", done;)


let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);


















