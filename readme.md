# TREINAMENTO XML/JSON
#### Autora: Monique Dias :rocket:

Este projeto foi desenvolvido com base no treinamento para o evento da FIEC, baseado em apis criadas para trabalhar com estruturas de dados XML e JSON.

# XML

No treinamento de XML, simulei um cenário no qual uma empresa no ramo de games fez uma solicitação para o desenvolvimento de uma api que lê cards com informações sobre pokemons. Para facilitar o trabalho em nossa equipe, um desenvolver senior, fez toda implementação da lógica e criou uma versão demonstração para apresentarmos para o cliente, a responsabilidade neste cenário é a criação do xml com esses dados.


### CARD EXEMPLO
```XML
<?xml version="1.0" encoding="UTF-8"?>
<content>
        <tema>NOME DO TEMA</tema>
        <imagem>ARQUIVO DE IMAGEM.JPG</imagem>
        <nome>NOME DO POKEMON</nome>
        <descricao>FATO INTERESSANTE</descricao>
</content>
```

### TEMA EXEMPLO
```XML
<?xml version="1.0" encoding="UTF-8"?>
<temas>
    <tema
        nome="NOME DO TEMA"
        titulo="COR DO TITULO"
        fundo="COR DO FUNDO"
        conteudo="COR DO FUNDO CONTÉUDO"/>
</temas>
```
<br>

# JSON

No Treinamento de JSON, simulei um cenário no qual uma empresa no ramo de vendas online está criando um novo software que busca em sua base de dados todos os posters de séries disponíveis para a venda. Para facilitar o trabalho em nossa equipe, um desenvolver mais experiente, fez toda implementação da lógica e criou uma versão demonstração para apresentarmos para o cliente. A nossa responsabilidade neste cenário é a criação do arquivo json com a estrutura correta para testar essa api.

### POSTER EXEMPLO
```JSON
[
    {
        "imagem" : "ARQUIVO IMAGEM JPG",
        "nome" : "NOME DA SÉRIE",
        "autor" : "NOME DO STREAMING",
        "ano" : "ANO LANÇAMENTO",
        "valor" : "VALOR DO POSTER"
    }
]
```
