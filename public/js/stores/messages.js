var R = require('ramda');
var _ = require('lodash');
var uuid = require('node-uuid');
var AppDispatcher = require('../dispatcher');
var Constants = require('../constants');
var Store = require('./store');
var Message = require('./message');

var messages = {};

var MessagesStore = Store.create({
    getAll: function() {
      return _.chain(messages).values().sortBy(R.prop('timestamp')).value();
    },
    getDirtyMessages: function() {
      return _.filter(messages, R.prop('dirty'));
    }
});

function addMessage(text, from) {
  var message = new Message(text, from);
  messages[message.id] = message;
  return message;
}

function updateMessages(updatesToUpdate) {
  _.each(updatesToUpdate, updateMessage);

  function updateMessage(message) {
    if(!messages[message.id]) {
      messages[message.id] = message;
    }
  }
}

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
      case Constants.SEND_MESSAGE:
          addMessage(action.text, action.from);
          break;
      case Constants.SOW:
      case Constants.SYNC_MESSAGES:
          updateMessages(action.messages);
          break;
      default:
          return true;
  }

  MessagesStore.emitChange();

  return true; 
});

module.exports = MessagesStore;
