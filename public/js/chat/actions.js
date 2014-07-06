var Constants = require('../constants');
var Dispatcher = require('../dispatcher');
var SessionStore = require('../stores/session');

var ChatActions = {
	sendMessage: function(text) {
		Dispatcher.handleViewAction({
			text: text, 
			from: SessionStore.get(),
			actionType: Constants.SEND_MESSAGE
		});
	}
};

module.exports = ChatActions;
