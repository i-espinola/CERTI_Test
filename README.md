# API write number

API que escreve valores numéricos por extenso

## Instalação/Execução do projeto

**NOTA:**

- Para executar os comandos abaixo, é imprescindível ter o **Docker** ou o gerenciador de dependencia **NPM** instalado globalmente em seu computador;

- Esteja ciênte que ao executar os comandos é necessário estar no diretório raíz da aplicação para que tudo ocorra como esperado.

### Uso local

Você pode optar em usar a aplicação com **Docker** ou com o gerenciador de dependencia **NPM** do **Nodejs**

#### Com Docker

Considerando que você já possui as _engines_ **Docker** em sua máquina local, execute os seguintes comandos no seu terminal

##### Docker - Criando a imagem do projeto

    docker-compose build

##### Docker - Iniciando a aplicação

    docker-compose up

##### Docker - Encerrando a aplicação

    docker-compose down

#### Com NPM

Considerando que você já possui o gerenciador de dependencia NPM instalado globalmente em seu computador, execute os seguintes comandos no seu terminal

##### NPM - Instalando as dependências

Para fazer a instalação de todas as dependencias necessárias da aplicação, execute a seguinte linha de comando no terminal/console:

    npm i

**Nota**: Se após a intalação você receber informações de vulnerabilidades nas dependencias instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades:

    npm audit fix && npm audit fix --force

##### NPM - Construindo o projeto

Após concluir a instalação de todas as dependencias da aplicação, é possível executar o comando de construção no terminal/console:

    npm run build

##### NPM - Modo desenvolvimento

Após concluir a instalação de todas as dependencias da aplicação, é possível executar o comando de desenvolvimento no terminal/console:

    npm run develop

##### NPM - Modo produção

Para rodar a aplicação em modo producão, execute o seguinte comando:

    npm run start

### Acessando o projeto

Depois de executar os comandos acima, abra [http://localhost:3000/123](http://localhost:3000/123) para receber a resposta em JSON da aplicação no seu browser preferido, ou com uma simples requisição GET no próprio terminal rodando o seguinte comando:

    curl http://localhost:3000/123

## Detalhes

### Tempo de desenvolvimento

- Horas codando: 6.1 hrs
- Horas Totais: 9.1 hrs

### Metodologia

![metodologia](./metodologia.png)

### Tecnologias integradas

- [x] Babel
- [x] Body-parser
- [x] Docker
- [x] ESlint
- [x] Express
- [x] Git
- [x] JavaScript
- [x] Node
- [x] Nodemon

### Estrutura de arquivos

    system-write-number-api/
    ├── .babelrc
    ├── docker-compose.yml
    ├── Dockerfile
    ├── .dockerignore
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── LICENSE
    ├── metodologia.png
    ├── package.json
    ├── public
    │   ├── app
    │   │ ├── core.js
    │   │ ├── core.js.map
    │   │ ├── dicionary.js
    │   │ └── dicionary.js.map
    │   ├── favicon.ico
    │   ├── index.js
    │   └── index.js.map
    ├── README.md
    └── src
        ├── app
        │ ├── core.js
        │ └── dicionary.js
        ├── favicon.ico
        └── index.js
