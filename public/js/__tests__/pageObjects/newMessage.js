/** @jsx React.DOM */ 

jest.dontMock('../../chat/actions');
jest.dontMock('../../chat/newMessage');

var PageObject = require('./pageObject');

module.exports = function(props) {
    var NewMessage = require('../../chat/newMessage');

    return new PageObject(props, {
        component: <NewMessage />,
        sendMessage: function(message) {
            this.setText(this.message, message);
            this.click(this.submit);
        }
    });
}
