# Group CERTI

Teste técnico - Desenvolvedor de software Junior

## Instalação/Execução do projeto

**NOTA:**

- Para executar os comandos abaixo, é imprescindível ter o Docker ou o gerenciador de dependencia NPM instalado globalmente em seu computador

- Esteja certo que ao executar os abaixo é necessário estar no diretório raíz da aplicação para que todos os comandos possam ser executados com sucesso

### Instalação local

Para executar esta aplicação localmente, você pode optar em usar o **Docker** ou o gerenciador de dependencia **NPM**.

#### Executando com Docker

Considerando que você já possui as _engines_ Docker em sua máquina local, execute os seguintes comandos no seu terminal

##### Criando a imagem do projeto

    docker-compose build

##### Iniciar aplicação

    docker-compose up

##### Encerrar aplicação

    docker-compose down

#### Executando com Nodejs

##### Instalando dependências

Para fazer a instalação de todas as dependencias necessárias da aplicação, execute a seguinte linha de comando no terminal/console.

    npm i

**Nota**: Se após a intalação você receber informações de vulnerabilidades nas dependencias instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades

    npm audit fix && npm audit fix --force

##### Criar a build do projeto

    npm run build

### Modo desenvolvimento

Após concluir a instalação de todas as dependencias da aplicação, é possível executar o comando de desenvolvimento no terminal/console.

    npm run develop

Depois de executar o comando acima, abra [http://localhost:3000/123](http://localhost:8000/123) para renderizar a saída JSON da aplicação no seu browser preferido, ou no próprio terminal rode o comando `curl http://localhost:3000/123`.

### Modo produção

Para startar a aplicação em modo producão, execute o seguinte comando.

    npm run start

## Detalhes

### Tempo

- Horas codando: 5.4 hrs
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

    CERTI_Test/
    ├── docker-compose.yml
    ├── Dockerfile
    ├── LICENSE
    ├── metodologia.png
    ├── package.json
    ├── public
    │   ├── app
    │   │   ├── validation.js
    │   │   └── vendor
    │   │       └── extenso.js
    │   └── index.js
    ├── README.md
    └── src
        ├── app
        │   ├── validation.js
        │   └── vendor
        │       └── extenso.js
        ├── favicon.ico
        └── index.js

## Requisítos CERTI

### Requisítos de desenvolvimento

- [x] Lingauem livre;
- [x] Criar servidor HTTP para processar requisições GET;
- [x] Saída das requisições GET deve ser formatada em JSON;
- [x] Saída deve conter uma chave com a nomenclatura **extenso**, seguída pela versão por extenso do número(**inteiro**) recebido no path;
- [x] números devem estar no intervalo [-99999, 99999].

#### Exemplos

    curl http://localhost:3000/1 -> { "extenso": "um" }
    curl http://localhost:3000/-1042 -> { "extenso": "menos mil e quarenta e dois" }
    curl http://localhost:3000/94587 -> { "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }

### Requisítos de entrega

- [x] Enviar o link do repositório no GitHub com o código em até sete dias úteis;
- [x] Documentação no arquivo README.md;
- [x] Remover "e"s separando milhares, centenas e dezenas (vide exemplo): "noventa e quatro mil e quinhentos e oitenta e sete" (Esse não é o padrão da norma culta da língua portuguesa, e isso é intencional.);
- [ ] O código deve implementar algoritmo de tradução.

**Bônus:** Crie um ambiente Docker para que possamos rodar seu servidor sem instalar dependências locais.

**Nota:**
Em caso de dúvidas sobre o desafio, mande um email para ept@c**\*\***i.org.br e mzr@c**\*\***i.org.br;
Prestamos atenção no review: edge cases e tratamento de erros, testes unitários, estruturação e qualidade do código, uso do git...
