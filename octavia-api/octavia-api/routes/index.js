
module.exports = {
    init: function (express, app){

        app.get('/', function (req, res) {
            res.send('hello world');
        });
        
        var router = express.Router();
        
        router.use(function (req, res, next) {
            res.type('application/json'); // set in postman but not in browser
            next();
        });

        app.use('/', require('../routes/content')(router));
    }
};