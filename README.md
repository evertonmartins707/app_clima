# API - Everton Martins

Para ler sobre o projeto completo ir para a _branch_ '_[Main](https://github.com/evertonmartins707/app_clima)_'

## Desenvolvedor

- Autor: `Everton Martins`
- LinkedIn: [linkedin.com/in/everton-martins-21160721a](https://www.linkedin.com/in/everton-martins-21160721a)
- Email: evertonmartins707@gmail.com

## Sobre a API
Este é uma API para um projeto de site meteorológico, seu funcionamento é baseado na API **HG Weather** da **HG Brasil**. 

Ela retorna respostas em formato JSON para sucesso ou códigos para casos de erros (os erros serão apenas se não for possível realizar a busca da previsão).

    #### Códigos de error

    - 200: OK
    - 503: Serviço indisponível


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

## Como utilizar

### Sem clonagem
Você pode usar a API do APP CLIMA usando o `endpoint` do meu próprio deploy:

- **O _endpoint_ recebe apenas requisições 'GET'**

```
https://apiweather-evertonmartins.onrender.com/
```

#### Sem parâmetros
Apenas realizando a requisição sem passar nenhum `parâmetro` pelo link, ele realizará a busca por geolocalização e se não for possível realiza-la ele o fará por um código interno que retornará a localização de `Brasília-DF`.

#### Por nome da cidade

Para realizar a busca por uma cidade específica é necessário passa o nome da mesma como `parâmetro` pelo link

```
https://apiweather-evertonmartins.onrender.com/brasilia
```

**Atenção! Realizando a requisição usando meu _endpoint_ usará minhas chaves de acesso á API da HG Brasil, muitas requisições bloquearão as chaves.** 

### Clonando o repositório

Outra forma de utilizar dessa API é clonando o repositório em uma pasta própria, assim segue as recomendações e informações:

- Crie uma conta na [HG Brasil](https://hgbrasil.com/) e crie suas próprias chaves.
- Certifique-se de ter instalados os programas e linguagens necessários.
- Instale as dependências com ``` $ npm install```.
- Verifique o arquivo ```.env.example``` para criar seu próprio arquivo ```.env``` e adicionar os valores de suas variáveis ambiente.
- O código é comentado em 'Português - Br' e inglês (google tradutor).
- Estude o código: Ele é distribuido entre pastas, mas é necessário que você entenda o que cada arquivo faz.
- No arquivo ```connection_api.js```, localizado no diretório ```./src/models/``` existe o _array_ 'valuesResquireds' que serve para filtrar a pesquisa feita por nome de cidade. Você pode diminuir e aumentar esse _array_ de acordo com sua preferência. Para saber os outros filtros olhar na documentação da [HG Weather](https://console.hgbrasil.com/documentation/weather).
- Se você entende sobre requisições HTTP, CACHE e códigos de respostas é livre para alterá-los, caso não possua esse conhecimento recomendo que permaneça inalterado. **Apenas uma recomendação, é livre para alterar o código.**
- O **servidor** funcionará na porta que for definida na variável de ambiente ```PORT``` do arquivo ```.env```, caso não tenha sido declarada usará a porta ```8080```.

## Errors

Trate os erros, eles são comuns e podem ocorrer por causa de diversos motivos, ao se deparar com erro verifique a resposta que foi dada pelo servidor no seu console, ele retornará um JSON com a mensagem e código de error.

- Pesquisa por ```Nome de cidade```:
```
{
  cod: 503,
  message: data['message'],
}
```
```data['message']``` refere-se á mensagem enviada pela HG Brasil.

- Pesquisa por ```WOEID``` ou ```Geolocalização```
```
{
  cod: 503,
  results: {
    temp: 0,
    description: 'Serviço indisponível',
    city: 'Dados ficticios,',
    humidity: 0,
    condition_slug: 'cloudly_night',
  }
}
```
```results{}``` é um objeto de exemplo usado para que o cliente não fique sem resposta.

<hr>

Essa é minha API, se gostou, marque como estrela e qualquer dúvida ou quiser entrar em contato pode usar meu [**linkedIn**](#desenvolvedor) ou [**email**](#desenvolvedor).
