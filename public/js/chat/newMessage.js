/** @jsx React.DOM */ 

var React = require('react');
var cx = require('react-addons').classSet;

var NewMessage = React.createClass({

  getInitialState: function() {
      return {};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render: function() {
  	return (
        <div className="new-message">
            <button type="button" className="btn btn-primary" />
        </div>
    );
  }
});

module.exports = NewMessage;
