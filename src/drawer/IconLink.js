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
        {this.props.children}
      </TouchableOpacity>
    );
  }
}


const styles = {

  container : {
    borderWidth: 0.5,
    borderColor: 'rgba(240,220,152, 0.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

}
