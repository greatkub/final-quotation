var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var History = require("../db/models/history");

/* GET historys listing. */
router.get("/", (req, res, next) => {
    History.find({}, (err, result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      // console.log(res);
      res.json(result);
    }
  });
});

// Create new history
router.post("/", (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const history1 = new History({
    // code: data.code,
    // name: data.name,
    // price: data.price,
    // remainingStock: data.remainingStock
    code: data.code,
    qty: data.qty,
    name: data.name,
    price: data.price,
    amount: data.amount

  });
  history1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});


router.delete("/:id", (req, res, next) => {
  const id = req.params['id'] // use ID from the route parameter
  // const id = req.body._id;
  console.log("Delete this id ",id)
  console.debug('Product ID to delete',id);
  History.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

//Update whole object or partially (PATCH)
router.put("/", async (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const id = data._id;
  delete data._id;
  console.debug(data);

  History.findByIdAndUpdate(id,data, (err,doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }

  });


});
module.exports = router;
