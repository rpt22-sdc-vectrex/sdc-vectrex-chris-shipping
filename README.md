# Etsy Shipping Module Setup Notes

## Seed the Database
To seed a database for your development or test environment:
You will need to create a .env file in the root directory
In .env set DB_CONNECTION to point to the mongodb you want to use (either local or Atlas)
example: DB_CONNECTION=mongodb://localhost:27017/fecShipping
Then use the command: npm run seed
**Make sure that the file name shipping/models/Shipping.js is capitalized. If it's shipping/models/shipping.js change it locally to a capital 'S'**

## Start Server
npm run dev-server for development mode
npm run dev-client to start webpack in watch mode
