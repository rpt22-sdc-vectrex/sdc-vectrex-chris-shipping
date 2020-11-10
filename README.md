# Etsy Shipping Module Setup Notes

## Generating Mock Data
To generate mock data in csv format (default to 1e7 records) run command: **npm run gen-csv**
To generate mock data in json format (default 1e7 records) run command: **npm run gen-json**

## Seed the Database
To seed a database for your development or test environment:\
Create a .env file in the root directory\
In .env set DB_CONNECTION to point to the mongodb you want to use (either local or Atlas)\
example: DB_CONNECTION=mongodb://localhost:27017/fecShipping\
Then use the command: **npm run seed**\

## Start Server
npm run dev-client to start webpack in watch mode and build bundle\
npm run start to start express server\


