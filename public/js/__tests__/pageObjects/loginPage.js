/** @jsx React.DOM */ 

jest.dontMock('../../login');
jest.dontMock('../../login/actions');

var PageObject = require('./pageObject');

module.exports = function() {
    var LoginPage = require('../../login');

    return new PageObject({
        component: <LoginPage />,
        elements: {
            'name': '.name',
            'email': '.email',
            'signIn': '.sign-in'
        }, 
        login: function(name, email) {
            this.setText(this.name, name);
            this.setText(this.email, email);
            this.click(this.signIn);
        }
    });
}
