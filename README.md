# NPS API

## Sobre o Projeto

A NPS API é uma aplicação back-end desenvolvida para calcular o Net Promoter Score (NPS) de uma empresa. O NPS é uma métrica utilizada para medir a satisfação do cliente e sua propensão para recomendar a empresa a outras pessoas. O projeto oferece funcionalidades como cadastro de usuários, cadastro de pesquisas, envio de e-mails para os usuários responderem às pesquisas de satisfação e cálculo do NPS.

## Como é Calculado o NPS?

O cálculo do NPS é feito pela seguinte fórmula: (promotores - detratores) / total de respondentes * 100. Os votantes são divididos em três categorias de acordo com sua votação: detratores (0 a 6), passivos (7 a 8) e promotores (9 a 10).

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- TypeScript
- SQLite
- Jest
- Handlebars
- TypeORM
- Node.js
- Yarn
- Express
- NodeMailer
- yup
- HandlebarsJS
- Ethereal
- supertest
- Beekeeper
- Knex.js

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
nps-api/
|-- src/
|   |-- __tests__/
|   |   |-- Survey.test.ts
|   |   |-- User.test.ts
|   |-- controllers/
|   |   |-- AnswerController.ts
|   |   |-- NpsController.ts
|   |   |-- SendMailController.ts
|   |   |-- SurveysController.ts
|   |   |-- UserController.ts
|   |-- database/
|   |   |-- migrations/
|   |   |   |-- 1614111661358-CreateUsers.ts
|   |   |   |-- 1614271171516-CreateSurveys.ts
|   |   |   |-- 1614466711414-CreateSurveysUsers.ts
|   |   |-- index.ts
|   |-- errors/
|   |   |-- AppError.ts
|   |-- models/
|   |   |-- Survey.ts
|   |   |-- SurveyUser.ts
|   |   |-- User.ts
|   |-- repositories/
|   |   |-- SurveysRepository.ts
|   |   |-- SurveysUserRepository.ts
|   |   |-- UsersRepository.ts
|   |-- services/
|   |   |-- SendMailService.ts
|   |-- views/
|   |   |-- emails/
|   |   |   |-- npsMail.hbs
|   |-- app.ts
|   |-- routes.ts
|   |-- server.ts
```

## Descrição dos Principais Diretórios

- **__tests__/**: Contém os testes automatizados da aplicação.
- **controllers/**: Responsável por gerenciar as regras de negócio da aplicação.
- **database/**: Contém as migrações do banco de dados e o arquivo de configuração.
- **errors/**: Trata os erros da aplicação.
- **models/**: Define os modelos de dados da aplicação.
- **repositories/**: Camada de acesso aos dados.
- **services/**: Contém os serviços da aplicação.
- **views/**: Armazena os templates de e-mails.

## Conceitos Apresentados no Projeto

- Utilização do TypeScript para tipagem estática.
- Uso do TypeORM para manipulação de dados.
- Implementação de testes automatizados com Jest.
- Envio de e-mails utilizando NodeMailer e Handlebars.

## Funcionalidades

- Cadastro de usuários.
- Cadastro de pesquisas.
- Envio de e-mails para os usuários responderem às pesquisas de satisfação.
- Cálculo do NPS.

## Arquitetura Aplicada

O projeto segue uma arquitetura de desenvolvimento em camadas, com a separação clara de responsabilidades entre os diversos módulos da aplicação. O backend é responsável por lidar com a lógica de negócios, enquanto o frontend é responsável pela apresentação e interação com o usuário.

## Endpoints

### Calculo do NPS

- **URL:** `/nps/:surveyId`
- **Método:** GET
- **Parâmetros URL:**
  - :surveyId -> ID do survey
- **Resposta de Sucesso:**
  ```json
  {
    "detractor": 1,
    "passive": 0,
    "promoters": 2,
    "totalAnswers": 3,
    "nps": 33.33
  }
  ```

### Envio de E-mail

- **URL:** `/sendMail`
- **Método:** POST
- **Exemplo de JSON:**
  ```json
  {
    "email": "nomedousuario@email.com",
    "survey_id": "fab3c144-df78-455c-89a2-90d498a2db41"
  }
  ```
- **Resposta de Sucesso:**
  ```json
  {
    "id": "13e43459-1f18c5aac461-f251-499c-a5b5",
    "user_id": "cb6f6f87c98d-ada144d3-2164-40e6-b410",
    "survey_id": "eeb3d144-df68-8ae2-4f5c-5d498a2db412",
    "created_at": "2019-08-28T00:36:15.000Z"
  }
  ```

### Criação de Pesquisa

- **URL:** `/surveys`
- **Método:** POST
- **Exemplo de JSON:**
  ```json
  {
    "title": "Queremos ouvir sua opinião!",
    "description": "De 0 a 10, quanto você recomendaria a nossa empresa?"
  }
  ```
- **Resposta de Sucesso:**
  ```json
  {
    "id": "eeb3d144-df68-89f3-4f5c-5d498a2db412",
    "title": "Queremos ouvir sua opinião!",
    "description": "De 0 a 10, quanto você recomendaria o Henrique?",
    "created_at": "2019-03-25T16:31:06.000Z"
  }
  ```

### Listar Todas as Pesquisas

- **URL:** `/surveys`
- **Método:** GET
- **Resposta de Sucesso:**
  ```json
  [
    {
      "id": "eeb3d144-df68-6fc-4f5c-8ae2-5d498a2db412",
      "title": "Queremos ouvir sua opinião!",
      "description": "De 0 a 10, quanto você recomendaria a nossa empresa?",
      "created_at": "2019-04-25T16:31:06.000Z"
    }
  ]
  ```

### Criação de Usuário

- **URL:** `/users`
- **Método:** POST
- **Exemplo de JSON:**
  ```json
  {
    "name": "Paulo Ribeiro Jr.",
    "email": "nomedousuario@email.com"
  }
  ```
- **Resposta de Sucesso:**
  ```json
  {
    "id": "3e837e85-90d2-78c621-4da0-8ce4-91e575d28c54",
    "name": "Paulo Ribeiro Jr.",
    "email": "nomedousuario@email.com",
    "created_at": "2018-02-28T21:24:14.000Z"
  }
  ```

## Como Executar o Projeto

Siga as instruções abaixo para executar o projeto em sua máquina local:

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaogdcarvalho/nps-api.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd nps-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O servidor iniciará na porta 3333 - acesse http://localhost:3333

## Diretrizes de Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir pull requests, relatar bugs ou sugerir novos recursos.

## Licença

Este projeto está licenciado sob a Licença MIT.