/** @jsx React.DOM */ 

var React = require('react');
var SessionStore = require('./stores/session');
var ChatPage = require('./chat');
var LoginPage = require('./login');

var App = React.createClass({

  getInitialState: function() {
      return {
          hasSession: !!SessionStore.get()
      };
  },

  componentDidMount: function() {
      SessionStore.addChangeListener(this._onSessionChange);
  },

  componentWillUnmount: function() {
      SessionStore.removeChangeListener(this._onSessionChange);
  },

  _onSessionChange: function() {
      this.setState({
          hasSession: !!SessionStore.get()
      });
  },

  render: function() {
      return this.state.hasSession ? <ChatPage/> : <LoginPage/>;
  }
});

module.exports = App;
