const array = [1, 3, 4, 5, 8, 9];

//percorre array
const newArray = array.map((item, index) => item + index);
console.log(newArray);

//percorre array e transforma em apenas uma informacao/numero
const sum = array.reduce((total, next) => total + next);
console.log(sum);

//filtra algum item
//precisa obrigatoriamente retornar true ou false
const filter = array.filter(item => item % 2 === 0);
console.log(filter);

//encontra algum item no array
const find = array.find(item => item === 3);
console.log(find);