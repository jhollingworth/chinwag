/** @jsx React.DOM */ 

var React = require('react');
var Messages = require('./messages');
var UserList = require('./userList');
var NewMessage = require('./newMessage');

var ChatPage = React.createClass({

  getInitialState: function() {
      return {};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render: function() {
  	return (
        <div className="chat">
            <Messages />
            <UserList />
            <NewMessage />
        </div>
    );
  }
});

module.exports = ChatPage;
