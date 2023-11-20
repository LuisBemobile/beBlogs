# API de Rede Social - README

Esta API foi desenvolvida para suportar uma rede social básica, permitindo o registro de usuários, login, criação de posts, adição de comentários e visualização de feeds.

## Como Rodar o Servidor

Para rodar o servidor localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Execute `npm install` para instalar as dependências do projeto.
3. Utilize o comando `npm run dev` para iniciar o servidor.
4. O servidor estará disponível em `http://localhost:3333`.

## Configuração do Banco de Dados

Este projeto utiliza SQLite como banco de dados. Certifique-se de ter o SQLite instalado localmente ou ajuste a configuração do banco de dados conforme necessário no arquivo `.env`.

## Estrutura do Projeto

- `app/Controllers`: Contém os controladores responsáveis por lidar com as requisições HTTP.
- `app/Models`: Contém os modelos de dados utilizados pela aplicação.
- `app/Validators`: Contém os validadores para os dados enviados nas requisições.
- `database`: Contém arquivos de migração e sementes para configuração e inicialização do banco de dados.

## Rotas

### Cadastro de Usuário

POST /signup

Corpo da Requisição:

```sh

{
"userName": "nome de usuário",
"email": "exemplo@email.com",
"password": "senha"
}
```

POST /login

Corpo da Requisição:

```sh
{
"email": "exemplo@email.com",
"password": "senha"
}
```

POST /post

```sh

Corpo da Requisição:
{
"description": "conteúdo do post"
}
```

POST /comment

```sh

Corpo da Requisição:
{
"postId": "id do post",
"comment": "conteúdo do comentário"
}

```

GET /feed

Retorna o feed de posts com os comentários associados.

GET /feed/:userId

Parâmetros da URL:
userId - ID do usuário cujos posts devem ser recuperados.

Retorna os posts do usuário especificado, incluindo os comentários associados.

## Observações

- As requisições devem ser autenticadas utilizando um token de autenticação válido, exceto para o cadastro e login de usuários.
- A estrutura do corpo das requisições deve seguir o formato descrito para cada rota.
- Para algumas rotas, é necessário ter permissões de administrador, verifique a resposta para as condições de autorização.
