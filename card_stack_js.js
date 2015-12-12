import React from 'react-native';
var { View } = React;

export default React.createClass({
  renderCard: function(item) {
    var { renderCard } = this.props;

    return <View key={`item_${item.id}`}>{renderCard(item)}</View>;
  },

  render: function() {
    var { items } = this.props;

    return (
      <View>
        {items.map(this.renderCard)}
      </View>
    );
  }
});
