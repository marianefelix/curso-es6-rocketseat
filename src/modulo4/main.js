import api from './api';

class App{
    constructor(){
        this.repositories = [];
        
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerHandelers();
    }

    registerHandelers(){
        //ouve os eventos
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        //previne que o form tenha o comportamento padrao 
        event.preventDefault();

        const repoInput = this.inputEl.value;

        //verifica se valor do input eh vazio
        if(repoInput.lenght === 0)
            return;
        
        this.setLoading();
        try{
            //faz requisicao get pra api, passando o valor do input como parametro 
            const response = await api.get(`repos/${repoInput}`);

            //usa desestruturacao para recuperar valores do response 
            const { name, description, html_url, owner: {avatar_url}} = response.data;

            //adiciona informacoes do repositorio no array
            this.repositories.push(
                {
                    name,
                    description,
                    avatar_url,
                    html_url
                }
            );
            
            //limpa campo input depois do repositorio ser adicionado 
            this.inputEl.value = '';

            this.render();
        } 
        catch(err){
            alert('Repositório não existe.');
        }

        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';

        //percorre array de repositorios adicionados 
        //e para cada elemento criado no html, eh adicionado seu respectivo valor presente no array  
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let decriptionEl = document.createElement('p');
            decriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(decriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });
    }

    setLoading(loading = true){
        if(loading){
            let loadingEL = document.createElement('span');
            loadingEL.setAttribute('id', 'loading');
            loadingEL.appendChild(document.createTextNode('Carregando...'));
            this.formEl.appendChild(loadingEL);
        }
        else{
            document.getElementById('loading').remove();
        }
    }

}

new App();