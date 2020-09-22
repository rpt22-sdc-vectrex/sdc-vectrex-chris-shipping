# Etsy Shipping Module Setup Notes

## Seed the Database
To seed a database for your development or test environment:\
Start the server - **npm run dev-server**\
Create a .env file in the root directory\
In .env set DB_CONNECTION to point to the mongodb you want to use (either local or Atlas)\
example: DB_CONNECTION=mongodb://localhost:27017/fecShipping\
Then use the command: **npm run seed**\
The seeder really needs to be rewritten using mongo (or mongoose's) add many feature. The data was created on the mockaroo website. The current version of the seeder will not scale.

## Start Server
npm run dev-server for development mode\
npm run dev-client to start webpack in watch mode

## Deploy on AWS
Create an EC2 instance with ubuntu\
Log in to your EC2 server\
Install and configure nginx to listen on port 80 and refer to node server\
Create/Navigate to a dir where you clone the shipping repo\
Pull latest changes\

## Starting the server
Run the following:\
npm install\
npm run build\
pm2 start server.js


