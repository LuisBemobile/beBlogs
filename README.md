# API de Rede Social - README

Esta API foi desenvolvida para suportar uma rede social básica, permitindo o registro de usuários, login, criação de posts, adição de comentários e visualização de feeds.

## Como Rodar o Servidor

Para rodar o servidor localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Execute `npm install` para instalar as dependências do projeto.
3. Utilize o comando `npm run dev` para iniciar o servidor.
4. O servidor estará disponível em `http://localhost:3333`.
5. Utilize o comando `npm run prestart` para rodar a migrations e as seeds.

## Configuração do Banco de Dados

Este projeto utiliza SQLite como banco de dados. Certifique-se de ter o SQLite instalado localmente ou ajuste a configuração do banco de dados conforme necessário no arquivo `.env`.

## Estrutura do Projeto

- `app/Controllers`: Contém os controladores responsáveis por lidar com as requisições HTTP.
- `app/Models`: Contém os modelos de dados utilizados pela aplicação.
- `app/Validators`: Contém os validadores para os dados enviados nas requisições.
- `database`: Contém arquivos de migração e sementes para configuração e inicialização do banco de dados.

## Rotas

### Cadastro de Usuário

POST `http://localhost:3333/signup`

Corpo da Requisição:

```sh
{
"userName": "nome de usuário",
"email": "exemplo@email.com",
"password": "senha"
}
```

<br>

### Listar usuários

GET `http://localhost:3333/user/`

<br>

### Atualizar usuário

PUT `http://localhost:3333/user/id`

Corpo da Requisição:

```sh
{
"userName": "nome de usuário",
"email": "exemplo@email.com",
"password": "senha"
}
```

### Deletar usuário

DELETE `http://localhost:3333/user/id`

<br>

### Logar usuário

POST `http://localhost:3333/login`

Corpo da Requisição:

```sh
{
"email": "exemplo@email.com",
"password": "senha"
}
```

<br>

### Cadastro de post

POST `http://localhost:3333/post`

Corpo da Requisição:

```sh
{
"description": "conteúdo do post"
}
```

### Atualizar post

PUT `http://localhost:3333/post/id`

Corpo da Requisição:

```sh
{
"description": "conteúdo do post"
}
```

### Deletar post

DLETE `http://localhost:3333/post/id`

<br>

### Cadastrar comment

POST `http://localhost:3333/comment`

Corpo da Requisição:

```sh
{
"postId": "id do post",
"comment": "conteúdo do comentário"
}
```

### Atualizar comment

PUT `http://localhost:3333/comment/id`

Corpo da Requisição:

```sh
{
"comment": "conteúdo do comentário"
}
```

### Deletar comment

DELETE `http://localhost:3333/comment/id`

<br>

### Listar posts

GET `http://localhost:3333/feed`

Retorna o feed de posts com os comentários associados.

<br>

### Listar posts por usuário

GET `http://localhost:3333/feed/:userId`

<br><br>

Parâmetros da URL:
userId - ID do usuário cujos posts devem ser recuperados.

Retorna os posts do usuário especificado, incluindo os comentários associados.

## Observações

- As requisições devem ser autenticadas utilizando um token de autenticação válido, exceto para o cadastro e login de usuários.
- A estrutura do corpo das requisições deve seguir o formato descrito para cada rota.
- Para algumas rotas, é necessário ter permissões de administrador, verifique a resposta para as condições de autorização.

```

```
