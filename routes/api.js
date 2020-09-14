'use strict';
module.exports = function(app,connection) {
var Partners = require('../controllers/PartnersController');
var Home = require('../controllers/HomeController');
	app.route('/')
	 .get(Home.index);
          app.route('/list-users')
	 .get(Home.listUsers);
}