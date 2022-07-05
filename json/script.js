const PATH = "/json/";
function gerarComponent(){
    
    let dataName = document.getElementById('componentFile').value;

    fetch(`${dataName}.json`).then(response => {
        if(!response.ok){
            throw new Error('Dados não encontrados')
        }
        return response.json();
    })
    .then(json => {
        
        let list = content = document.getElementById('content');
        
        list.innerHTML = '';

        let poster = {
            imagem : '',
            nome : '',
            autor : '',
            ano : '',
            valor : ''
        }

        for(let i = 0; i < json.length ; i++){
            let response = json[i];

            poster.imagem = response.imagem;
            poster.nome = response.nome;
            poster.autor = response.autor;
            poster.ano = response.ano;
            poster.valor = response.valor;

            console.log(poster);
            
            let li = document.createElement('li');
            let divItem = document.createElement('div');
            let imagem = document.createElement('img');
            let divConteudo = document.createElement('div');
            let nome = document.createElement('h1');
            let divItemContentContainer = document.createElement('div');
            let autor = document.createElement('p');
            let ano = document.createElement('p');
            let valor = document.createElement('p');

            divItem.classList.add('item');
            divConteudo.classList.add('item-content-container');
            divItemContentContainer.classList.add('item-content-innercontainer');
            autor.classList.add('autor');
            ano.classList.add('ano');
            valor.classList.add('valor');

            imagem.src = PATH + "img/" + poster.imagem;
            nome.innerText = poster.nome;
            autor.innerText = poster.autor;
            ano.innerText = poster.ano;
            valor.innerText = "R$ " + poster.valor;
            valor.innerText = valor.innerText.replace('.',',');

            divItemContentContainer.appendChild(autor);
            divItemContentContainer.appendChild(ano);
            divItemContentContainer.appendChild(valor);

            divConteudo.appendChild(nome);
            divConteudo.appendChild(divItemContentContainer);

            divItem.appendChild(imagem);
            divItem.appendChild(divConteudo);
            li.appendChild(divItem);

            list.appendChild(li);
        }

    })
    .catch(error => {
        let list = content = document.getElementById('content');
        
        list.innerHTML = '';
        
        let li = document.createElement('li');
        let div = document.createElement('div');
        let p = document.createElement('p');

        p.innerText = "DADOS NÃO ENCONTRADOS"

        div.classList.add('error');

        div.appendChild(p);
        li.appendChild(div);
        list.appendChild(li);

    });

}