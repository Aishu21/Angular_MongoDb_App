const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Commodity = new Schema({
  CommodityName: {
    type: String
  },
  CommodityDescription: {
    type: String
  },
  CommodityPrice: {
    type: Number
  }
},{
    collection: 'Commodity'
});

module.exports = mongoose.model('Commodity', Commodity);