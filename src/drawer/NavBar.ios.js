import React, { PropTypes, Component } from 'react';
import { Image, View, TouchableWithoutFeedback, Text } from 'react-native';
import vDimensions, { vw, vh } from '../utils/vDimensions';

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
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 8, paddingTop: 7, backgroundColor: '#333' }}>
              <View style={{ 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flex: 1,  
                borderRadius: 25, 
                backgroundColor: '#F2F2F2',
                opacity: 0.8 }}> 
              <View style={{ height:12, justifyContent: 'space-around' }}>
                <View style={{ height: 3, width: 20, backgroundColor: "#333"}}></View>
                <View style={{ height: 3, width: 20, backgroundColor: "#333"}}></View>
                <View style={{ height: 3, width: 20, backgroundColor: "#333"}}></View>
              </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.logoWrapper}>
          <Image style={styles.logo} height={55} width={60} />
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.title} fontSize={7}>{this.props.title}</Text>
        </View>
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
    backgroundColor: '#3F95EA',
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
    left: vw(20)
  },
  avoidStatusBar: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
  }
}
