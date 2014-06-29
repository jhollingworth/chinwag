/** @jsx React.DOM */ 

var session = {};
jest.dontMock('../constants');
jest.dontMock('../chat/actions');
jest.setMock('../dispatcher', {
    handleViewAction: jest.genMockFn() 
});

jest.setMock('../stores/session', {
    get: function() {
        return session;
    }
});

var Constants = require('../constants');
var NewMessage = require('./pageObjects/newMessage');

describe('NewMessage', function() {
    it('initially sets message to empty string', function() {
        var newMessage = new NewMessage();

        expect(newMessage.message.textContent).toEqual('');
    });

    it('does not dispatch a message if the message is empty', function() {
        var newMessage = new NewMessage();
        var Dispatcher = require('../dispatcher');

        newMessage.sendMessage("");

        expect(Dispatcher.handleViewAction).not.toBeCalled();
    });

    it('dispatches a send message action when you click submit', function() {
        var newMessage = new NewMessage();
        var Dispatcher = require('../dispatcher');
        var expected = "Hello world";

        newMessage.sendMessage(expected);

        expect(Dispatcher.handleViewAction).toBeCalledWith({
            actionType: Constants.SEND_MESSAGE,
            message: expected, 
            from: session
        });
    });
});


