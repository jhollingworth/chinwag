var _ = require('lodash');

module.exports = function PageObject(props, defaultProps) {
    var TestUtils = require('react/addons').addons.TestUtils;
    var po = _.extend({}, defaultProps, props);
    var component = po.component;

    if(!component) {
        throw new Error('component required');
    }

    TestUtils.renderIntoDocument(component);

    po.setText = setText;
    po.click = click;

    component.refs && Object.keys(component.refs).forEach(resolveRef, this);

    return po;

    function setText(element, text) {
        TestUtils.Simulate.change(element, { 
            target: {
                value: text
            }
        });
    }

    function click(element) {
        TestUtils.Simulate.click(element);
    }

    function resolveRef(name) {
        var ref = component.refs[name];

        Object.defineProperty(po, name, { 
            get: function() { return ref.getDOMNode(); } 
        });
    }
}
