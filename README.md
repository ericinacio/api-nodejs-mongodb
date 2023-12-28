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

## Requisitos
* **Visual Studio Code **(Instale pelo [site oficial](https://code.visualstudio.com/))**
* Node.js **(Instale pelo [site oficial](https://nodejs.org/en))**
* Nodemon **(Instale pelo [site oficial](https://nodemon.io/))**
* Uma database no MongoDB Atlas **(Crie pelo [site oficial](https://www.mongodb.com/products/platform/cloud))**
* Extenção Rest Client **(Instale pelo [link](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))**

## Como Instalar
1. Certifique que tenha todos os requisitos
2. Instale as dependências pelo terminal utilizando o comando: **`npm install`**
3. Crie uma arquivo **.env** na raiz do projeto
4. Crie uma variável **DB_CONFIG** dentro do arquivo .env
5. Copie o link da sua Database do MongoDB Atlas
6. Cole o link da database na variável **DB_CONFIG**, deve ficar assim: **`DB_CONFIG="Link-Database"`**
7. Inicie o projeto pelo terminal usando o comando **`npm start`**
8. Execute um request de dentro do arquivo **`request.rest`**
