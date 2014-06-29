var Constants = require('../constants');
var Dispatcher = require('../dispatcher');
var SessionStore = require('../stores/session');

var ChatActions = {
	sendMessage: function(message) {
		Dispatcher.handleViewAction({
			message: message, 
			from: SessionStore.get(),
			actionType: Constants.SEND_MESSAGE
		});
	}
};

module.exports = ChatActions;
