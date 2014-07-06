var _ = require('lodash');
var keyMirror = require('react/lib/keyMirror');

var actions = keyMirror({
  SOW: null,
  LOGIN: null,
  SEND_MESSAGE: null,
  SYNC_MESSAGES: null
});

var sync = keyMirror({
	REQUIRED: null,
	IN_PROGRESS: null,
	COMPLETE: null
});

module.exports = _.extend(actions, {
	SYNC: sync
});
