/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

import CardStack from './card_stack';

var items = [
  { id: 1, imageURL: "https://image.tmdb.org/t/p/w780/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg" },
  { id: 2, imageURL: "https://image.tmdb.org/t/p/w780/lnnrirKFGwFW18GiH3AmuYy40cz.jpg" },
  { id: 3, imageURL: "https://image.tmdb.org/t/p/w780/mRYqoCJMmlbtrU6r7vMgzCVnSsX.jpg" },
  { id: 4, imageURL: "https://image.tmdb.org/t/p/w780/4U2cmPcUbAsNTIDkfhNVHZM8JtV.jpg" },
]

var Card = React.createClass({
  render: function() {
    var { imageURL } = this.props.item;

    return (
      <View style={cardStyle.card}>
        <Image style={{width: 300, height: 300}} source={{uri: imageURL}} />
      </View>
    );
  }
})

var cardStyle = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 300,
    height: 300
  },
});


var ReactCards = React.createClass({
  childContextTypes: {
    implementationType: React.PropTypes.string,
  },

  getChildContext: function() {
    return { implementationType: 'js' };
  },

  renderCard: function(item) {
    return <Card item={item} />;
  },

  onSwipeRight: function(item) {
    console.log("SWIPE RIGHT", item);
  },

  onSwipeLeft: function(item) {
    console.log("SWIPE LEFT", item);
  },

  render: function() {
    return <CardStack
      items={items}
      renderCard={this.renderCard}
      onSwipeRight={this.onSwipeRight}
      onSwipeLeft={this.onSwipeLeft}
      />;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactCards', () => ReactCards);
