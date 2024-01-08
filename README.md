# APP CLIMA

**Deploy:** [weatherapp-evertonmartins.netlify.app/](https://weatherapp-evertonmartins.netlify.app/)

## Desenvolvedor

- **Título:** APP CLIMA
- **Autor:** Everton Martins
- **LinkedIn:** [linkedin.com/in/everton-martins-21160721a](https://www.linkedin.com/in/everton-martins-21160721a)

## Descrição

O projeto APP CLIMA é um projeto pessoal de estudos, criado para aprender sobre requisições em APIs. Ele engloba o frontend e o backend para funcionamento, usando um servidor criado com a biblioteca Express do Node.js.

Seu funcionamento consiste em uma chamada à própria API localizada no backend, que por sua vez realiza uma chamada à HG Weather, API da HG BRASIL ([https://hgbrasil.com/status/weather](https://hgbrasil.com/status/weather)).

- Para mais informações sobre o funcionamento do backend, verificar o README que se encontra na branch 'backend'. [Link para o README da branch 'backend'](https://github.com/evertonmartins707/app_clima/tree/backend)

Todo o sistema é implementado com funções de tratamento de erros por código:

- 200: OK
- 503: Serviço indisponível

## Deploy (Plataformas)

- **FrontEnd:** [Netlify](https://www.netlify.com/)
- **BackEnd:** [Render](https://render.com/)

## Branchs

Este projeto foi desenvolvido em um repositório apenas, com deploys realizados em suas branches específicas.

### Main

Na branch 'MAIN' está localizado o frontend do projeto.

### Backend

Na branch 'BACKEND' está localizado o backend do projeto.

## Instalações e dependências

### Frontend

- HTML 5
- CSS 3
- JavaScript

### Backend

- Node JS (v21.2.0)
- NPM (v9.7.1)

### Dependências

- Express (v4.18.2)
- DotEnv (v16.3.1)
- Cors (v2.8.5)

### DevDependências

- Nodemon (v3.0.2)

**ATENÇÃO:** Essas são as versões mínimas para funcionamento.

## Uso

### Para produção

```bash
$ npm install --production
$ npm start

### Para produção
