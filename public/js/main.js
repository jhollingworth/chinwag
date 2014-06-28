/** @jsx React.DOM */ 

var React = require('react');
var ChatPage = require('./chat');
var LoginPage = require('./login');
var SessionStore = require('./stores/session');
var container = document.querySelector('.container');

updateView();
SessionStore.addChangeListener(updateView);

function updateView() {
    React.unmountComponentAtNode(container);
    
    if(hasSession()) {
        React.renderComponent(<ChatPage/>, container);
    }  else {
        React.renderComponent(<LoginPage/>, container);
    } 
}

function hasSession() {
    return !!SessionStore.get();
}
