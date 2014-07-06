/** @jsx React.DOM */

var React = require('react');
var MessagesStore = require('../stores/messages');

var Messages = React.createClass({

  getInitialState: function() {
    return {
    	messages: []
    };
  },

  componentDidMount: function() {
    MessagesStore.addChangeListener(this._onMessagesChanged);
  },

  componentWillUnmount: function() {
    MessagesStore.removeChangeListener(this._onMessagesChanged);
  },

  _onMessagesChanged: function() {
  	this.setState({
  		messages: MessagesStore.getAll()
  	});
  },

  render: function() {
    return ( 
    	<ul> 
    		{this.state.messages.map(function(message) {
    			return <li>{message.text}</li>
    		})}
    	</ul> 
  	);
  }
});

module.exports = Messages;