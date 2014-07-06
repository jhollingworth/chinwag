var _ = require('lodash');
var Dispatcher = require('flux-dispatcher');

var AppDispatcher = _.extend({

  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },

  handleServerAction: function(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    })
  }

}, Dispatcher.prototype);

module.exports = AppDispatcher;