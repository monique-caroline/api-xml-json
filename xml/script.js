const MSGERROR = 'Componente não encontrado';
const PATH = "/xml/";
temas = [];

function initApp() {
    document.getElementById('componentFile').addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            gerarComponent();
        }
    });

    let lerTemas = new XMLHttpRequest();
    lerTemas.addEventListener('load', t => {

        let itens = lerTemas.responseXML.getElementsByTagName('temas')[0];
        for(let i = 0; i < itens.children.length; i++){
            
            tema = {
                nome : itens.children.item(i).getAttribute('nome'),
                titulo : itens.children.item(i).getAttribute('titulo'),
                fundo : itens.children.item(i).getAttribute('fundo'),
                conteudo : itens.children.item(i).getAttribute('conteudo')
            };

            temas.push(tema);
        }

    });
    lerTemas.open('GET','temas.xml');
    lerTemas.send();
}

function gerarComponent() {

    clean();
    let componentFile = document.getElementById('componentFile').value;
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = (ev) => {
        let code = ev.currentTarget.status;
        if (code !== 200) {
            criarError();
        }
    }

    xml.addEventListener('load', ev => {

        try {
            let doc = xml.responseXML.getElementsByTagName('content');
            document.getElementById('errorTag').style.display = 'none';

            let item = {
                tema : '',
                imagem: '',
                nome: '',
                paragrafo: ''
            }

            for (let i = 0; i < doc.length; i++) {

                item.tema = doc.item(i).getElementsByTagName('tema')[0].innerHTML;
                item.imagem = PATH + "img/" + doc.item(i).getElementsByTagName('imagem')[0].innerHTML;
                item.nome = doc.item(i).getElementsByTagName('nome')[0].innerHTML;
                item.descricao = doc.item(i).getElementsByTagName('descricao')[0].innerHTML;

                let divItem = document.createElement('div');
                let imagem = document.createElement('img');
                let divContent = document.createElement('div');
                let nome = document.createElement('h1');
                let descricao = document.createElement('p');

                divItem.classList.add('card');
                imagem.classList.add('img-card');
                divContent.classList.add('inner-content');
                nome.classList.add('title-card');
                descricao.classList.add('paragraph-card');

                let tema = temas.find(e => {
                    return item.tema === e.nome;
                })
                
                nome.style.color = tema.titulo;
                divItem.style.backgroundColor = tema.fundo;
                divContent.style.backgroundColor = tema.conteudo;
                
                imagem.src = item.imagem;
                nome.innerText = item.nome;
                descricao.innerText = item.descricao;

                divContent.appendChild(nome);
                divContent.appendChild(descricao);

                divItem.appendChild(imagem);
                divItem.appendChild(divContent);

                document.getElementById('content').appendChild(divItem);
            }

        } catch (error) {}

    });
    xml.open('GET', componentFile + '.xml');
    try {
        xml.send();
    } catch (err) {
        criarError();
    }

}

function criarError() {
    let showError = !document.getElementById('errorTag');
    if (showError) {
        let err = document.createElement('p');
        err.id = 'errorTag';
        err.classList.add('error');
        err.innerText = MSGERROR;
        let content = document.getElementById('content');
        content.appendChild(err);
    }
}

function clean() {
    let content = document.getElementById('content');
    content.innerHTML = '';
}

initApp();