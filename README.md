<h1 align="center">
  Projeto: Wearism (Fashionista E-commerce)
</h1>
<p align="center">E-commerce de moda feminina. @codenation</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/repo-size/Alessandra-Nastassja/PROJECT-WEARISM?color=%23ffb9db">
  <a href="https://github.com/Alessandra-Nastassja/PROJECT-WEARISM/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Alessandra-Nastassja/PROJECT-WEARISM?color=%23ffb9db">
  </a>
  <a href="https://www.linkedin.com/in/alessandra-nastassja/">
    <img alt="Made by Alessandra Nastassja" src="https://img.shields.io/badge/made%20by-AlessandraNastassja-%23ffb9db">
  </a>
</p>

****
## *Sobre o projeto* ⭐️

### *Objetivo:* 📌 

Como um profissional front-end, você será responsável por desenvolver as principais funcionalidades de um e-commerce de moda feminina, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.

### *Cenário:* 📌 

Segundo o levantamento, da Webshoppers (Ebit / Nielsen), os e-commerces brasileiros faturaram cerca de R$ 53,2 bilhões em 2018. O segmento “Moda e Acessórios” representa 5,6% do faturamento no varejo online, ocupando a segunda posição entre as categorias de produtos com mais pedidos, perdendo apenas para o segmento de eletroeletrônicos.

Oferecer a melhor experiência aos usuários que interagem com os produtos no desktop, e principalmente em dispositivos móveis, é fundamental para se manter vivo e competitivo nesse segmento.

### *Principais funcionalidades:* 📌 

- Deve implementar as funcionalidades apresentadas nos wireframes / layouts.
- Deve ser mobile first, possuindo uma experiência satisfatória tanto em mobile quanto em desktop.
- Deve consumir a API do catálogo de produtos.
- O estado global da aplicação deverá ser gerenciado com Redux
- Deve ser um SPA (Single Page Application).
- Todos os produtos da API devem ser exibidos.
- Utilize BEM CSS para escrever os estilos.
- Deve-se fazer deploy do projeto, servindo-o no Netlify.
- Não utilize frameworks CSS como Bootstrap, Foundation e afins.
- Requisitos obrigatórios
- Para cada item do catálogo de produtos as seguintes informações devem estar na página:

Imagem
Nome
Preço
Status “Em promoção”
Preço promocional (se disponível)
Tamanhos disponíveis
Selo “Promoção”
Deve ser possível adicionar itens por tamanho no carrinho de compras.

- Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.

### *Requisitos opcionais:* 📌 

- O carrinho de compras deve persistir entre reloads de página.
- Alguns produtos não tem todos os tamanhos disponíveis, mostre apenas os tamanhos disponíveis em estoque.
- Implemente a funcionalidade de busca em tempo real.

### *Wireframe:* 📌 

Os layouts abaixo servem de referência visual das funcionalidades, sintam-se livres para segui-las ou implementá-las com base em outras referências, desde que atenda às regras e aos requisitos obrigatórios.

*Desktop & mobile*

Para ter acesso, basta clicar [aqui](https://github.com/Alessandra-Nastassja/PROJECT-WEARISM/wiki/Wireframe).

#### *Cores e tipografia*

Veja [aqui](https://github.com/Alessandra-Nastassja/PROJECT-WEARISM/wiki/Topografia-e-cores) as principais cores da aplicação.

### *Fluxograma do sistema*

Para ver o fluxo em detalhes, clique [aqui](https://github.com/Alessandra-Nastassja/PROJECT-WEARISM/wiki/Fluxos-do-sistema)

### *Tecnologias usadas:* 📌 

- [React](https://pt-br.reactjs.org/docs/getting-started.html);
- [React Redux](https://redux.js.org/introduction/getting-started)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start);
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html);
- [Formik](https://jaredpalmer.com/formik/docs/api/formik);

****
## *Como instalar e rodar ?* 🚀
###  *Pré-requisitos:*
1. Ter o **[Node js](https://nodejs.org/en/) instalado** e junto dele a **[NPM](https://www.npmjs.com/)**;

2. **Clonar o repositório** em sua máquina, usando comando abaixo em seu terminal:

```
  git clone https://github.com/Alessandra-Nastassja/PROJECT-WEARISM.git
```

3. Agora basta **instalar as dependências** do seu projeto, digitando no terminal:

```
  npm install
```

4. E por ultimo dar o comando para **rodar** seu projeto:

```
  npm start
```

 > *Obs: O projeto irá abrir em seu navegador, rodando no http://localhost:3000*

 ****

 ### Como funciona Json-server ? 🚀

Baseado em um único json que contém **events, lectures e profile**. Pode-se efetuar o GET,POST, PUT e DELETE. Basta apenas escrever **http://localhost:3001/events**, como por exemplo.

> *Obs.: Ao rodar o projeto, ele irá criar uma API fake em **http://localhost:3003/** e o front **http://localhost:3000/***

*Exemplo:*

Request | URL | Detalhes
-- | -- | --
GET | /produtos | Busca todos os produtos
GET | /produtos/1 | Busca um produto
GET | /produtos?status=promocao | Busca um produto que seja em promoção
GET | /produtos?_limit=2 | Busca apenas dois produtos
GET | /produtos?_limit=2&_page=1 | Busca apenas dois protudos por página
POST | /produtos/ | Salvar um produto
PUT | /produtos/1 | Editar os dados do produto
DELETE | /produtos/1 | Remove o produto


*Exemplo de filtro - Produto*:

```
/prodtuos?status=promocao&_limit=10&_page=1
```

 ## Referências:

 [Tutorial - Json server](https://code.tutsplus.com/pt/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871)
 [Filtros - Json server](https://code.tutsplus.com/pt/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871)
