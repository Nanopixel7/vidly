const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('It is main page');
})

module.exports = router;