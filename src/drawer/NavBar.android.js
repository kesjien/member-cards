import React, { PropTypes, Component } from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import { vw, vh } from '../utils/vDimensions';
import Text from '../components/Text';

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
          <View style={styles.burgerWrapper}>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10, paddingTop: 7, backgroundColor: '#333' }}>
              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, height: 40, width: 40, borderRadius: 25, backgroundColor: '#FFF', overflow: 'hidden' }}> 
              <View style={{ height:22, justifyContent: 'space-around' }}>
                <View style={{ height: 3, width: 20, backgroundColor: "#333"}}></View>
                <View style={{ height: 3, width: 20, backgroundColor: "#333"}}></View>
                <View style={{ height: 3, width: 20, backgroundColor: "#333"}}></View>
              </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.logoWrapper}>
          <Image style={styles.logo} height={55} width={60} source={require('../../images/logo.png')} />
        </View>

        <View style={styles.titleWrapper}>
          <Text fontSize={7}>{this.props.title}</Text>
        </View>
      </View>
      </View>
    );
  }
}
const defaults = {
  backgroundColor: '#3F95EA'
}
const styles = {
  main: {
    position: 'absolute',
    width: vw(100),
    top: 0,
    height: 55,
    backgroundColor: 'transparent'
  },
  burgerWrapper: {
    backgroundColor: '#3F95EA',
    height: 55,
    alignSelf: 'stretch'
  },
  burger: {
    resizeMode: 'contain'
  },
  logoWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 55,
    alignSelf: 'stretch'
  },
  logo: {
    resizeMode: 'cover'
  },
  titleWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  avoidStatusBar: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: defaults.backgroundColor
  }
}
