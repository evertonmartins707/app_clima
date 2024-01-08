# APP CLIMA

Deploy: [https://weatherapp-evertonmartins.netlify.app/]()

## Desenvolvedor

- Título: `APP CLIMA`
- Autor: `Everton Martins`
- LinkedIn: [https://www.linkedin.com/in/everton-martins-21160721a]()

## Descrição
O projeto `APP CLIMA` é um projeto de estudos pessoal, criado para aprender sobre requisições em API's, ele emgloba o _frontend_ e o _backend_ para funcionamento, usando um servidor criado com a biblioteca EXPRESS do NODE JS.

Seu funcionamento consiste em uma chamada á própria API localizada no _backend_, que por sua vez realiza uma chamada á HG Weather, API da HG BRASIL ([https://hgbrasil.com/status/weather]()).
- Para mais informações sobre o funcionamento do _backend_ verificar o README que se encontra na _branch_ 'backend'.
[https://github.com/evertonmartins707/app_clima/tree/backend]()

Todo o sistema é implementado com funções de tratamento de erros por código:

- 200: OK
- 503: Serviço indisponível

## Deploy (Plataformas)
- FrontEnd: [https://www.netlify.com/]()
- BackEnd: [https://render.com/]()

## Branchs
Este projeto foi desenvolvido em um reposítorio apenas, os deploys são realizados em suas _branchs_  específicas.
<hr>

#### Main
Na _branch_ 'MAIN' está localizado o _frontend_ do projeto.

#### Backend
Na _branch_ 'BACKEND' está localizado o _backend_ do projeto.

<br>

## Instalações e dependências
### Frontend
- HTML 5
- CSS 3
- JavaScript
### Backend
- Node JS (21.2.0)
- NPM (9.7.1)

### Depedências
- Express (4.18.2)
- DotEnv (16.3.1)
- Cors (2.8.5)

### DevDepedências
- Nodemon (3.0.2)

ATENÇÃO: Essas são as versões mínimas para funcionamento.

## Use
- Para produção
  ```
  $ npm install --production
  $ npm start
  ```
- Para desenvolvimento
  ```
  $ npm install
  $ npm run dev
  ```