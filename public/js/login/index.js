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

              <input className="form-control name"
                     placeholder="Name"
                     value={this.state.name} 
                     onChange={this._onNameChange}></input>

              <input type="email" 
                     className="form-control email" 
                     placeholder="Email" 
                     value={this.state.email}
                     onChange={this._onEmailChange}></input>

              <button className="sign-in btn btn-lg btn-primary btn-block" 
                      type="submit"
                      onClick={this._onSignIn}>Sign in</button>
          </form>
      );
  },

  _onSignIn: function(e) {
      Actions.login(this.state.name, this.state.email);

      return false; 
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
