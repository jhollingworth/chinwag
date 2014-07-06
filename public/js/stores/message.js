var _ = require('lodash');
var uuid = require('node-uuid');

function Message(text, from) {
  this._text = text;
  this._from = from;
  this._dirty = true;
  this._id = uuid.v1();
  this._timestamp = Date.now();
}

Message.prototype = {
  get id() {
    return this._id;
  },
  get text() {
    return this._text;
  },
  get from() {
    return this._from;
  },
  get timestamp() {
    return this._timestamp;
  },
  get dirty() {
    return this._dirty;
  },
  set dirty(dirty) {
    this._dirty = dirty;
  },
  serialize: function() {
    return _.pick(this, 'id', 'text', 'from', 'timestamp');
  }
};

module.exports = Message;