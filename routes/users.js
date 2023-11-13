const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.route('/')
  .post(async (req, res, next) => {
    try {
    let date = req.body.date;
    let today = new Date();
    let d_day = new Date(date);
    let timeGap = d_day.getTime() - today.getTime();
    let remainTime = Math.ceil(timeGap/(1000*60*60*24));

      const user = await User.create({
        name: req.body.name,
        date: remainTime,
        checked: req.body.checked,
      });
      console.log(user);
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