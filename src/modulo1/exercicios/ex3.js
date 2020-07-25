// 3.1
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);
console.log(newArr);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

// 3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});

//quando passa parametros, ele substitui os valores padrao que tem na funcao
console.log(mostraUsuario(nome, idade));

//aqui ele so substitui a primeira propriedade, que eh o nome, e a idade continua com o valor padrao, que eh 18
console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise);
   

