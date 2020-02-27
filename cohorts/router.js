const Cohorts = require('./model.js')

const router = require("express").Router();

router.get("/", (req, res) => {
  Cohorts.all().then(cohorts => {
    res.status(200).json({cohorts});
  })
  .catch(({name, message, code, stack})=> {
    console.log({ name , message, code , stack });
  })
  res.status(500).json({ router: name , message, code , stack });
});

module.exports = router;
