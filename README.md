# Node.js CRUD API

This is a RESTful API developed with Node.js and Express for user management, supporting full CRUD operations and MongoDB integration.

## Technologies

- Node.js
- Express
- MongoDB (via Mongoose)
- dotenv
- Nodemon

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally or available via a cloud provider (e.g., MongoDB Atlas)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/tamisouzza/API-Node.js-CRUD.git
cd API-Node.js-CRUD
npm install



API Node.js CRUD

Este projeto é uma API REST desenvolvida com Node.js e Express, com foco em operações CRUD (Create, Read, Update, Delete) utilizando MongoDB como banco de dados.

 Objetivo
Construir uma API simples e funcional para praticar conceitos fundamentais de backend, como:

Estruturação de projetos com Node.js

Conexão com banco de dados MongoDB

Operações CRUD

Uso do Postman para testar as rotas

 Tecnologias utilizadas
Node.js

Express

MongoDB

Mongoose

Nodemon (ambiente de desenvolvimento)

Postman (testes manuais)

 Estrutura do projeto
pgsql

API-Node.js-CRUD/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md

Como executar o projeto
Pré-requisitos
Node.js instalado

MongoDB local ou uma URI do MongoDB Atlas

Passo a passo
bash
Copiar
Editar
# Clone o repositório
git clone https://github.com/tamisouzza/API-Node.js-CRUD.git

# Acesse a pasta do projeto
cd API-Node.js-CRUD

# Instale as dependências
npm install

# Crie o arquivo .env e configure a URI do MongoDB
MONGO_URI=mongodb://localhost:27017/seu_banco_de_dados
PORT=3000

# Inicie o servidor
npm run dev
A API ficará disponível em:
http://localhost:3000

 Rotas disponíveis

Método	Rota	Descrição

GET	/items	Lista todos os itens
GET	/items/:id	Retorna um item pelo ID
POST	/items	Cria um novo item
PUT	/items/:id	Atualiza um item existente
DELETE	/items/:id	Remove um item pelo ID

Obs: substitua items pelo nome da entidade real utilizada no seu projeto, caso seja diferente.

 Testes
Você pode testar as rotas utilizando o Postman ou o Insomnia.

 Autora
Desenvolvido por Tami Soares
GitHub


