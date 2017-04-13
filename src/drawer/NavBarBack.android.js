import React, { PropTypes, Component } from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import { vw, vh } from '../utils/vDimensions';
import Text from '../components/Text';
import { Actions } from 'react-native-router-flux';

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
    const debug = (
      <View style={{position: 'absolute'}}>
        <View style={{ width: vw(100), borderWidth: 0.5, position: 'absolute', top: 27, }}/>
        <View style={{ width: vw(100), height: 55, borderWidth: 0, position: 'absolute', top: 0, }}>
          <View style={{ borderWidth: 0.5, alignSelf:'center', height: 55,}} />
        </View>
      </View>);

    return (
      <View style={styles.main}>
      <View style={styles.avoidStatusBar}>
        {/*debug*/}
        <TouchableWithoutFeedback onPress={() => Actions.pop()}>
          <View style={styles.backWrapper}>
            <View style={
              {
                flex: 1,
                justifyContent: 'center',
                width: 39,
                height: 37,
                padding: 5,
                alignItems: 'center',
                borderWidth: 0,
              }
            }>
              <Image
                style={styles.backButton}
                width={29}
                height={27}
                source={require('../../images/back_chevron.png')} />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.titleWrapper}>
          <Text fontSize={7}>{this.props.title}</Text>
        </View>
        {this.props.rightTitle ? 
        (<TouchableWithoutFeedback onPress={() => this.props.onRight()} >
          <View style={styles.rightTitleWrapper}>
              <Text fontSize={7}>{this.props.rightTitle}</Text>
          </View>
        </TouchableWithoutFeedback>): null
        }
      </View>
      </View>
    );
  }
}

const defaults = {
  backgroundColor: '#FFF'
}
const styles = {
  main: {
    position: 'absolute',
    width: vw(100),
    top: 0,
    height: 55,
    backgroundColor: 'transparent'
  },
  backWrapper: {
    width: 68,
    height: 55,
    marginRight: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    resizeMode: 'contain'
  },
  titleWrapper: {
    paddingLeft: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
  rightTitleWrapper: {
    flex:1,
    backgroundColor: 'transparent',
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  avoidStatusBar: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: defaults.backgroundColor
  }
};
