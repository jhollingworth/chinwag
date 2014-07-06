/** @jsx React.DOM */ 

var App = require('./app');
var sync = require('./sync');
var React = require('react');
    
React.renderComponent(<App />, document.querySelector('.container'));
