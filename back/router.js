const express = require('express');
const router = express();

router.get('/', (req, res) => {
    console.log(`access to '${req.url}'`);
    res.send('index.html');
});

module.exports = router;