import React, { Component } from 'react';
import { View, TouchableOpacity, Image, PixelRatio, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import normalize from '../utils/normalizeFont';
import { vw, vh } from '../utils/vDimensions';

export default class extends Component {
  constructor(props) {
    super(props);

    this.width = vw(18 * (this.props.imageScale || 1));
    this.height = vh(14);
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress} activeOpacity={0.8}>
       
      </TouchableOpacity>
    );
  }
}


const styles = {
  image: { width: vh(15), height: vh(15), position: 'absolute', overflow: 'hidden', resizeMode: 'cover' },
  imageWrapper: { alignItems: 'center', },
  wrapperView: { justifyContent: 'center', alignItems: 'center' },
  container : {
    borderWidth: 0.5,
    borderColor: '#5c5c5c',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
  },
  item : {
    text75: {
      textAlign: 'center',
      fontSize: normalize(6),
      margin: 1,
      color: '#fff'
    },
    regular: {
      borderBottomWidth: 3.5,
      borderBottomWidth: 3,
      borderBottomColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: vh(3.5),
      paddingBottom: vh(3.5),
      flex: 1,
      backgroundColor: '#333'
    },
    active: {
      borderBottomWidth: 3,
      borderBottomColor: '#5fcd16',
      backgroundColor: '#424242',
      justifyContent:'center',
      alignItems: 'center',
      paddingTop: vh(3.5),
      paddingBottom: vh(3.5),
      flex: 1
    }
  }
}
