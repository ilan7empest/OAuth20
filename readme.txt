App Building Steps
1. Install npm i -s express mongoose dotenv 
2. Install npm i --save-dev nodemon
3. Create app.js file with express and export module
4. Create db.js file with mongoose connection to MongoDB. Once db connection established, run server app
5. Use .env file to hide MongoDB URI + config file to display the process.env.URI+PORT by production/development
6. Install passport passport-google-oauth20 cookie-session
7. Use passport with google Strategy to login user 


USE Google credentials "https://console.developers.google.com/" production version in heruko