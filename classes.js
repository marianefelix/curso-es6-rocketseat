//classe pai
class Lista{
    constructor(){
        this.data= [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
//classe que herda de Lista
class TodoList extends Lista{
    constructor(){
        super();

        this.usuario = 'Mariane';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

//classe com metodo estatico
class Matematica{
    static soma(a, b){
        return a + b;
    }
}

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
    minhaLista.add('Novo todo');
}

minhaLista.mostraUsuario();

//nao precisa instaciar a classe 
console.log(Matematica.soma(1,2));