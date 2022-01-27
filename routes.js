const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "hello world"
    });
});

router.get('/home/:name', (req, res) => {
    res.json({
        "paramentro":req.params,
        "header": [req.hostname, req.httpVersion, req.ip, req.cookies, req.accepts]
    });
});

router.post('/form', (req, res)=>{
    res.json(req.body);
});

module.exports = router