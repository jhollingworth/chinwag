/** @jsx React.DOM */ 

jest.dontMock('../../login');
jest.dontMock('../../login/actions');

var PageObject = require('./pageObject');

module.exports = function(props) {

    var LoginPage = require('../../login');

    return new PageObject(props, {
        component: <LoginPage />,
        login: function(name, email) {
            this.setText(this.name, name);
            this.setText(this.email, email);
            this.click(this.submit);
        }
    });
}
