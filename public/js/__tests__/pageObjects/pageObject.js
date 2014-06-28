var _ = require('lodash');

module.exports = function PageObject(prop) {
    var TestUtils = require('react/addons').addons.TestUtils;

    if(!prop.component) {
        throw new Error('component required');
    }

    TestUtils.renderIntoDocument(prop.component);
    Object.keys(prop.elements).forEach(resolveProp);

    prop.setText = setText;
    prop.click = click;

    return prop;

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

    function resolveProp(name) {
        var selector = prop.elements[name];

        Object.defineProperty(prop, name, { get: get });

        function get() {
            var el;

            if(selector.indexOf('.') === 0) {
                el = TestUtils.findRenderedDOMComponentWithClass(prop.component, selector.substring(1));
            } else {
                el = TestUtils.findRenderedDOMComponentWithTag(prop.component, selector);
            }

            return el.getDOMNode();
        }

    }
}
