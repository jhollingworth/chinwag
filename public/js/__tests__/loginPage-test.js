/** @jsx React.DOM */ 

jest.dontMock('../constants');
jest.dontMock('../login/actions');
jest.setMock('../dispatcher', {
    handleViewAction: jest.genMockFn() 
});

var Contants = require('../constants');
var LoginPage = require('./pageObjects/loginPage');

describe('LoginPage', function() {
    it('initially sets name and email to empty string', function() {
        var page = new LoginPage();

        expect(page.name.value).toEqual('');
        expect(page.email.value).toEqual('');
    });

    it('dispatches a login action', function() {
        var page = new LoginPage();
        var Dispatcher = require('../dispatcher');
        var expected = { name: 'foo', email: 'bar@baz.com' };

        page.login(expected.name, expected.email);

        expect(Dispatcher.handleViewAction).toBeCalledWith({
            actionType: Contants.LOGIN, 
            name: expected.name,
            email: expected.email
        });
    });
});


