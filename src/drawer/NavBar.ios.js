import React, { PropTypes, Component } from 'react';
import { Image, View, TouchableWithoutFeedback, Text } from 'react-native';
import vDimensions, { vw, vh } from '../utils/vDimensions';
import Icon from 'react-native-vector-icons/Entypo';

export default class extends Component {
  static contextTypes = {
    drawer: PropTypes.object,
  }
  render () {
    let state = this.props.navigationState;
    let selected = state.children[state.index];
    while (selected.hasOwnProperty('children')) {
      state = selected;
      selected = selected.children[selected.index];
    }
    const navProps = { ...this.props, ...selected };

    return (
      <View style={styles.main}>
      <View style={styles.avoidStatusBar}>
        <TouchableWithoutFeedback onPress={this.context.drawer.toggle}>
            <View style={{padding: 8, paddingTop: 7 }}>
              
              <Icon style={{ fontSize: 20, color: "#FFFFFF" }} name="unread" />
            </View>
        </TouchableWithoutFeedback>

        <View style={styles.titleWrapper}>
          <Text style={styles.title} fontSize={7}>{this.props.title}</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.context.drawer.toggle}>
            <View style={{ padding: 8, right: 0 }}>
              
              <Icon style={{ fontSize: 20, color: "#FFFFFF" }} name="documents" />
            </View>
        </TouchableWithoutFeedback>
      </View>
      </View>
    );
  }
}
const defaults = {
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  opacity: 0.7
}
const styles = {
  main: {
    position: 'absolute',
    width: vw(100),
    height: 55,
    backgroundColor: 'transparent'
  },
  burgerWrapper: {
    height: 35,
    alignSelf: 'stretch'
  },
  title:{
    color: "#FFFFFF",
  },
  burger: {
    resizeMode: 'contain'
  },
  titleWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    // left: vw(20)
  },
  avoidStatusBar: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
  }
}
