
module.exports = function (router) {
    router.get('/content/', function (req, res) {
        res.json({ msg: 'Hello Content!' });
    });
    return router;
};