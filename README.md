# 🚀 API GraphQL com NestJS

Este projeto é uma API construída com NestJS utilizando GraphQL para gerenciamento de dados.

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run start
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

## 🌐 Acessando o GraphQL Playground

Após iniciar o servidor, acesse:

```
http://localhost:3000/graphql
```

Aqui você poderá:

* Executar **queries** (buscar dados)
* Executar **mutations** (criar/alterar dados)
* Explorar o schema da API

---

## 💻 Exemplos de uso

### 🔍 Query (buscar usuários)

```graphql
query {
  findAll {
    id
    name
    email
  }
}
```

---

### ➕ Mutation (criar usuário)

```graphql
mutation {
  createUser(name: "João", email: "joao@email.com") {
    id
    name
  }
}
```

---

## 🧠 Tecnologias utilizadas

* NestJS
* GraphQL
* Apollo Server

---

## 📌 Observações

* A API utiliza um armazenamento em memória (sem banco de dados)
* Ideal para estudos e testes com GraphQL

---

## 🚀 Próximos passos

* Integração com banco de dados (Prisma ou TypeORM)
* Autenticação com JWT
* Validação de dados

---
