const express = require('express');
const router = express.Router();

//Handle GET request to /
router.get('/', (request, response) => {
    response.render('login');
});

//Handle GET request to /dashboard
router.get('/dashboard', (request, response) => {
    response.render('dashboard');
});

module.exports = router;