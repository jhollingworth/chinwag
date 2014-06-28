var _ = require('lodash');
var AppDispatcher = require('../dispatcher');
var Constants = require('../constants');
var Store = require('./store');

var session;

var SessionStore = Store.create({
    get: function() {
        return session;
    }
});

function setSession(name, email) {
    if(name && email) {
        session = {
            name: name, 
            email: email
        };
    }
}

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
      case Constants.LOGIN:
          setSession(action.name, action.email);
          break;

      default:
          return true;
  }

  SessionStore.emitChange();

  return true; 
});

module.exports = SessionStore;
