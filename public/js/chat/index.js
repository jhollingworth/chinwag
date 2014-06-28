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
            <div className="row">
                <Messages />
                <UserList />
            </div>
            <div className="row">
                <NewMessage />
            </div>
        </div>
    );
  }
});

module.exports = ChatPage;
