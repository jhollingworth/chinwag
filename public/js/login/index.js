/** @jsx React.DOM */ 

var React = require('react');
var Actions = require('./actions');

var LoginPage = React.createClass({

  getInitialState: function() {
      return {
          name: '',
          email: ''
      };
  },

  render: function() {
      return ( 
          <form className="login form-signin" role="form">
              <h2 className="form-signin-heading">Please sign in</h2>

              <input ref="name" 
                     className="form-control name"
                     placeholder="Name"
                     value={this.state.name} 
                     onChange={this._onNameChange}></input>

              <input ref="email"
                     type="email" 
                     className="form-control email" 
                     placeholder="Email" 
                     value={this.state.email}
                     onChange={this._onEmailChange}></input>

              <button ref="submit"
                      type="submit"
                      onClick={this._onSignIn}
                      className="sign-in btn btn-lg btn-primary btn-block">Sign in</button>
          </form>
      );
  },

  _onSignIn: function(e) {
      e.preventDefault();
      Actions.login(this.state.name, this.state.email);
  },

  _onNameChange: function(e) {
      this.setState({
          name: e.target.value
      });
  },

  _onEmailChange: function(e) {
      this.setState({
          email: e.target.value
      });
  }
});

module.exports = LoginPage;
