
module.exports = {
    init: function (express, app){
        app.use('/', require('../routes/content')(express.Router()));
    }
};