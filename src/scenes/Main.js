import React, { Component } from 'react';
import { 
  Text,
  View, 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { branch } from 'baobab-react/higher-order';
import Swiper from './Swiper';

class Main extends Component {
  render() {
    return (
      <View>
        <Swiper />
      </View>
    )
  }
}

export default branch({ devMode: 'isDevMode' }, Main);