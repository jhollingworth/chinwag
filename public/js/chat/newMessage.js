/** @jsx React.DOM */ 

var React = require('react');
var actions = require('./actions');
var cx = require('react-addons').classSet;

var NewMessage = React.createClass({

  getInitialState: function() {
      return {
        message: ''
      };
  },

  render: function() {
  	return (
        <div className="new-message">
            <textarea ref="message"
                      className="message"
                      onChange={this._onMessage}>{this.state.message}</textarea>  
            <button ref="submit"
                    type="button" 
                    onClick={this._onSubmit}
                    className="btn btn-primary" />
        </div>
    );
  },

  _onSubmit: function(e) {
    e.preventDefault();

    if(this.state.message && this.state.message.length) {
      actions.sendMessage(this.state.message);
      this.setState({ message: '' });
    }
  },

  _onMessage: function(e) {
    this.setState({
      message: e.target.value
    });
  }
});

module.exports = NewMessage;
