// Numero 1
console.log(hello);
var hello = "world";
// var hello;
// console.log(hello); // imprime undefined
// hello = "world";


// Numero 2
var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}
// var needle;
// needle = "haystack";
// test(); llama a la funcion test();
// var needle = "magnet"; dentro del scope de la funcion test();
// console.log(needle); se imprime el valor de la variable "magnet"


// Numero 3
var brendan = "super cool"; // se declara la variable brendan y se le asigna el valor "super cool"
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan); // se imprime el valor de la variable brendan con el valor "super cool" ya que la funcion print no se llama
// var brendan = "super cool";
// function print() se declara la funcion y en su scope se cambia el valor de la variable y se imprime en consola, pero no se llama a la funcion
// console.log(brendan); se imprime en consola la variable brendan con el valor "supercool"


// Numero 4
var food = "chicken";
console.log(food);
eat();
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
// var food;
// food = "chicken";
// console.log(food); se imprime en consola "chicken"
// eat(); se llama a la funcion la cual hace lo de abajo dentro del scope de la funcion
// food = "half-chicken"; local scope de la funcion
// console.log(food); imprime en consola "half-chicken"
// var food; local scope de la funcion
// food = "gone"; local scope de la funcion



// Numero 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
};
console.log(food);

// var mean;
// mean(); error porque no fue creada aun la funcion
// console.log(food); error porque aun no fue declarada la variable food
// console.log(food); error porque aun no fue declarada la variable food



// Numero 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre); se imprime genre en consola y arrojara undefined
// genre = "disco";
// rewind(); se ejecuta la funcion rewind
// var genre; se declara la variable genre en el scope de la funcion
// genre = "rock"; se asigna el valor "rock" dentro del scope de la funcion
// console.log(genre); se imrpime la variable en consola el valor "rock"
// genre = "r&b"; se asigna el valor "r&b" a la variable en el scope de la funcion
// console.log(genre); se imprime la variable en consola con el valor "r&b"
// console.log(genre); fuera de la funcion se imprime la variable en consola con el valor "disco"



// Numero 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo; se declara la variable
// dojo = "san jose";
// console.log(dojo); // se imprime en consola el valor de la variable dojo con el valor "san jose"
// learn(); se llama la funcion learn
// dojo = "seattle"; en el scope de la funcion se asigna a la variable el valor "seattle"
// console.log(dojo); se imprime en consola con el valor "seattle"
// dojo = "burbank"; en el scope de la funcion se asigna a la variable el valor "burbank"
// console.log(dojo); se imprime en consola con el valor "burbank"
// console.log(dojo); ya fuera de la funcion se imprime en consola con el valor "san jose"


// Numero 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65)); se llama a la funcion makeDojo con los parametros "Chicago" y 65 para imprimir en consola
// const dojo = {}; se declara la variable dojo
// dojo.name = name; se intenta asignar valor a la cosntante, pero dara error
// dojo.students = students; se intenta asignar valor a la cosntante, pero dara error
// if (dojo.students > 50) {     condicional sobre el valor de dojo.students que es inexistente, no pasara
//    dojo.hiring = true;  se intenta asignar valor a la cosntante, pero dara error
// } else if (dojo.students <= 0) {   condicional sobre el valor de dojo.students que es inexistente, no pasara
//    dojo = "closed for now"; se intenta asignar valor a la cosntante, pero dara error
// }
// return dojo; // no devolvera nada debido a los errores anteriores
// console.log(makeDojo("Berkeley", 0)); se llama a la funcion makeDojo con los parametros "Berkeley" y 0 para imprimir en consola
// const dojo = {}; se declara la variable dojo
// dojo.name = name; se intenta asignar valor a la cosntante, pero dara error
// dojo.students = students; se intenta asignar valor a la cosntante, pero dara error
// if (dojo.students > 50) {     condicional sobre el valor de dojo.students que es inexistente, no pasara
//    dojo.hiring = true;  se intenta asignar valor a la cosntante, pero dara error
// } else if (dojo.students <= 0) {   condicional sobre el valor de dojo.students que es inexistente, no pasara
//    dojo = "closed for now"; se intenta asignar valor a la cosntante, pero dara error
// }
// return dojo; // no devolvera nada debido a los errores anteriores