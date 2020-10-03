# C.R.U.D Implementation for SDC-Vectrex-Chris-Shipping Module via MongoDB (Mongoose ORM)
| Endpoint | Description |
| ------ | ------ |
| `/create` | Takes in a JSON object and uses mongoose.model().create |
| `/productId ` | Takes in a product_id and uses mongoose.model().findOne |
| `/productId/update ` | Takes in a product_id/JSON object and uses mongoose.model().findOneAndUpdate |
| `/delete ` | Takes in a product_id and uses mongoose.model().deleteOne |
