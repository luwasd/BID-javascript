// Numero 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // aqui retorna el primer valor de la constante cars "Tesla"
console.log(otherRandomCar); // aqui retorna el segundo valor de la variable cars "Mercedes"

// Numero 2
const employee = {
    name: "Elon",
    age: 47,
    company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name); //  aqui retornara un error ya que la variable name no fue declarada
console.log(otherName); // aqui retornara "Elon" ya que se almaceno en la constante el valor de la propiedad name

// Numero 3
const person = {
    name: "Phil Smith",
    age: 47,
    height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); // aqui se imprime en consola el valor de la constante password "12345"
console.log(hashedPassword); // aqui retorna undefined ya que la propiedad password no existe en la constante person

// Numero 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // se declara la cosntante y se almacena el segundo valor de el arreglo, siendo el numero 2
const [,,,second] = numbers; // se declara la constante y se almacena el cuarto valor de el arreglo, siendo el 5
const [,,,,,,,,third] = numbers; // se declara la constante y se almacena el noveno valor de el arreglo, siendo el 2
//Predict the output
console.log(first == second); // aqui retornara "False" ya que en la constante first se almaceno el valor 2 y en la constante second se almaceno 5
console.log(first == third); // aqui arrojara "True" ya que en ambas constante se almaceno el valos 2

// Numero 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // se declara la constante y se le asigna el valor de la propiedad key, 'value'
const { secondKey } = lastTest; // se declara la constante y se asigna el valor de la propiedad secondKey, [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // se declara la constante y se le asigna el segundo valor del arreglo secondKey, 5
//Predict the output
console.log(key); // aqui retorna 'value' en consola
console.log(secondKey); // aqui retornara el arreglo completo en consola, [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // aqui retornara en consola el primer valor del arreglo, 1
console.log(willThisWork); // aqui retornara en consola el valor almacenado en willThisWork, 5