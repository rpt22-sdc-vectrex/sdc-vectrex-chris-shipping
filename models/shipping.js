const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShippingSchema = new Schema({
    product_id: {type: Number, required: true},
    estimated_delivery: {type: String, required: true},
    ready_to_ship: {type: String, required: true},
    ship_from_city: {type: String, required: true},
    ship_from_state: {type: String, required: true},
    countries_shipped_to: {type: String, required: true},
    return_policy: {type: String, required: true}
});

module.exports = mongoose.model('Shipping', ShippingSchema);