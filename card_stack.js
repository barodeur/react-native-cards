import React from 'react-native';
import CardStackJS from './card_stack_js';
var CardStackObjC = null;

var implementations = {
  js: CardStackJS,
  objC: CardStackObjC,
};

export default React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    renderCard: React.PropTypes.func.isRequired,
    onSwipeRight: React.PropTypes.func.isRequired,
    onSwipeLeft: React.PropTypes.func.isRequired,
  },

  contextTypes: {
    implementationType: React.PropTypes.string,
  },

  render: function() {
    var { implementationType } = this.context;

    var Component = implementations[implementationType];
    return <Component {...this.props} />;
  }
});
