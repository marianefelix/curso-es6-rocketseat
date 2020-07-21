const array = [1, 3, 4, 5, 8, 9];

//percorre array
const newArray = array.map(function(item, index){
    return item + index;
});

console.log(newArray);

//percorre array e transforma em apenas uma informacao/numero
const sum = array.reduce(function(total, next){
    return total + next;
});

console.log(sum);

//filtra algum item
const filter = array.filter(function(item){
    //precisa obrigatoriamente retornar true ou false
    return item % 2 === 0;
});

console.log(filter);

//encontra algum item no array
const find = array.find(function(item){
    return item === 3;
});