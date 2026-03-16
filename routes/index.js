const router = require ('express').Router();
const lesson1Controller = require('../controllers/lesson1');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/emily', lesson1Controller.emilyRoute);
router.get('/hannah', lesson1Controller.hannahRoute);
router.get('/sarah', lesson1Controller.sarahRoute);

router.use('/contacts', require('./contacts'));

module.exports = router;