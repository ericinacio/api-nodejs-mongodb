# API NODE.JS COM MONGODB
> Esta é uma pequena API desenvolvida por mim, seguindo o curso ministrado por [Matheus Battisti](https://github.com/matheusbattisti). Realizei algumas melhorias, implementando o uso de Módulos ES e integrando o gerenciamento de variáveis de ambiente com o Dotenv.

## Tecnologias Utilizadas
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/pt-br/)
* [MongoDB Atlas](https://www.mongodb.com/pt-br)
* [Mongoose.js](https://mongoosejs.com/)
* [Cors](https://www.npmjs.com/package/cors)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Nodemon](https://nodemon.io/)

## Como Instalar
1. Instale o [Node.js](https://nodejs.org/en)
2. Instale o [Nodemon](https://nodemon.io/)
3. Instale as dependências pelo terminal utilizando o comando: **`npm install`**
4. Crie um banco de dados no site [MongoDB Atlas](https://www.mongodb.com/products/platform/cloud).
5. Crie uma arquivo **.env** na raiz do projeto
6. Crie uma variável **DB_CONFIG** dentro do arquivo .env
7. Copie o link da sua Database do MongoDB Atlas
8. Cole o link da database na variável **DB_CONFIG**, deve ficar assim: **`DB_CONFIG="Link-Database"`**
9. Inicie o projeto pelo terminal usando o comando **`npm start`**