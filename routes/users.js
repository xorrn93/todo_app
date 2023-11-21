const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.route('/')
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        name: req.body.name,
        date: req.body.date,
        checked: req.body.checked,
      });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  router.route('/:id').patch(async (req , res, next) => {
    try{
      const result = await User.updateOne({
          _id:req.params.id
      },{
        checked : req.body.checked
      });
      res.json(result);
    }
    catch(err){
      console.error(err);
      next(err);
  }
  }).delete(async (req, res, next) => {
    try {
        const result = await User.remove({
            _id: req.params.id
        });
        res.json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
  });


module.exports = router;