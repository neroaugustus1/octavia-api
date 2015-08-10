
module.exports = function (router) {
    router.get('/', function (req, res) {
        res.json({ msg: 'Hello Content!' });
    });
    return router;
};