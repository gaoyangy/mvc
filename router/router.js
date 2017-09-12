const router = require('../lib/router')((err, req, res) => {
    console.error(err);
    res.statusCode = 500;
    res.end(err);
});
const actorsController = require('../controllers/actors');
module.exports = () => {
    router.use((req, res, next) => {
        console.info('New request arrived');
        next();
    });
    router.get('/', (req, res) => {
        let data = actorsController.getList(req, res);
    });

    router.get('/actors', (req, res) => {
        actorsController.getActorByName(req, res);
    });

    router.get('/actors/:year/:country', (req, res) => {
        actorsController.getActorsByYearAndCountry(req, res);
    });

    router.use((req, res, next) => {
        res.statusCode = 404;
        res.end();
    });
    return router
}