import React, { PropTypes, Component } from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
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
                width={22}
                height={21}
                source={require('../../images/back_chevron.png')} />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.titleWrapper}>
          <Text fontSize={7}>{this.props.title}</Text>
        </View>
        { this.props.onRight ?
          (<TouchableWithoutFeedback onPress={() => console.log('here')} >
            <View style={styles.rightTitleWrapper}>
                <Text fontSize={7}>Del</Text>
            </View>
          </TouchableWithoutFeedback>) : (<View style={styles.rightTitleWrapper}></View>)
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
    height: 75,
    backgroundColor: 'transparent',
  },
  backWrapper: {
    width: 68,
    height: 55,
    marginRight: 40,
    alignSelf: 'center',
    alignItems: 'center',
    top: 7,
    right : 10

  },
  backButton: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    top: 7,
    flex: 1.6
    // left: vw(100) / 20
  },
  rightTitleWrapper: {
    flex:1,
    backgroundColor: 'transparent',
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    top: 7,
    right: 1,
  },
  avoidStatusBar: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: defaults.backgroundColor
  }
};
