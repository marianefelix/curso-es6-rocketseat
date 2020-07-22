//REST 

//exemplo com objeto
const usuario = {
    nome: 'Mariane',
    idade: 20,
    universidade: 'UFRN'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//exemplo com array
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//exemplo com parametros de funcao
function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4));

//SPREAD

//unindo valores de arrays em outro array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

//alterando valores de objetos 
const usuario1 = {...usuario, nome: 'Maria'};

console.log(usuario1);