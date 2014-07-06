var _ = require('lodash');
var Constants = require('../constants');
var Dispatcher = require('../dispatcher');
var Messages = require('../stores/messages');
var socket = require('socket.io-client')(); 

socket.on('sow', onSOW);
socket.on('sync:messages', onSyncMessages);
Messages.addChangeListener(onMessagesChanged);

function onMessagesChanged() {
  var messages = Messages.getDirtyMessages();

  socket.emit('sync:messages', _.map(messages, serialize));

  function serialize(message) {
    return message.serialize();
  }

  function clean(message) {
    message.dirty = false;
  }
}

function onSyncMessages(messages) {
  Dispatcher.handleServerAction({
    actionType: Constants.SYNC_MESSAGES,
    messages: messages
  });
}

function onSOW(sow) {
  Dispatcher.handleServerAction({
    actionType: Constants.SOW,
    messages: sow.messages,
    users: sow.users
  });
}