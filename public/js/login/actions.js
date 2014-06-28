var Contants = require('../constants');
var Dispatcher = require('../dispatcher');

var Actions = {
    login: function(name, email) {
        Dispatcher.handleViewAction({
            actionType: Contants.LOGIN, 
            name: name,
            email: email
        });
    }
};

module.exports = Actions;
