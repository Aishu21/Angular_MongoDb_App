const express = require('express');
const app = express();
const commodityRoutes = express.Router();

// Require Product model in our routes module
let Commodity = require('../models/Commodity');

// Defined store route
commodityRoutes.route('/add').post(function (req, res) {
  let commodity = new Commodity(req.body);
  commodity.save()
    .then(product => {
      res.status(200).json({'Commodity': 'Commodity has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
commodityRoutes.route('/').get(function (req, res) {
  Commodity.find(function (err, commodities){
    if(err){
      console.log(err);
    }
    else {
      res.json(commodities);
    }
  });
});

// Defined edit route
commodityRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Commodity.findById(id, function (err, commodity){
      res.json(commodity);
  });
});

//  Defined update route
commodityRoutes.route('/update/:id').post(function (req, res) {
  Commodity.findById(req.params.id, function(err, product) {
    if (!commodity)
      res.status(404).send("Record not found");
    else {
      commodity.CommodityName = req.body.CommodityName;
      commodity.CommodityDescription = req.body.CommodityDescription;
      commodity.CommodityPrice = req.body.CommodityPrice;

      commodity.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
commodityRoutes.route('/delete/:id').get(function (req, res) {
    Commodity.findByIdAndRemove({_id: req.params.id}, function(err, commodity){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = commodityRoutes;