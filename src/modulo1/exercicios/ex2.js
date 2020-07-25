const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item.idade);
console.log(idades);

const usuarios_rock = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);
console.log(usuarios_rock);

const usuario_google = usuarios.find(item => item.empresa === 'Google');
console.log(usuario_google);


//encontrei esse codigo no link abaixo:
//https://github.com/joaooliveiradev/rocketseat-javascriptES6-exercicios/blob/master/exercicios-modulo-01/exercicio-02.js
console.log(usuarios.map(item => ({...item, idade: item.idade * 2})).filter(item => item.idade <=50));


