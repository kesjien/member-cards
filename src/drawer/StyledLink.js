import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import normalize from '../utils/normalizeFont';
import { vw, vh } from '../utils/vDimensions';

export default class extends Component {
  render() {
    const separator = null;
    return (
      <TouchableOpacity style={this.props.containerStyle} onPress={this.props.onPress} activeOpacity={0.8}>
        <View style={[this.props.active ? styles.item.active : styles.item.regular, this.props.style] }>
          {this.props.children && <Text style={styles.item.text75}>{this.props.children}</Text>}
          {this.props.component }  
        </View>
        {separator}
      </TouchableOpacity>
    );
  }
}


const styles = {
  item : {
    text75: { 
      fontSize: normalize(7.5), 
      color: '#fff'
    },
    regular: {
      borderLeftWidth: 5,
      borderBottomWidth: 0,
      borderLeftColor: '#333',
      paddingLeft: vh(3),
      justifyContent:'center',
      paddingTop: vh(3),
      paddingBottom: vh(3),
      flex: 1,
      backgroundColor: '#333'
    },
    active: {
      borderLeftWidth: 3,
      borderLeftColor: '#5fcd16',
      backgroundColor: '#424242',
      paddingLeft: vh(3) + 3,
      justifyContent:'center',
      paddingTop: vh(3),
      paddingBottom: vh(3),
      flex: 1
    }
  }
}
