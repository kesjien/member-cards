import React, { Component } from 'react';
import { 
  Text,
  View, 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { branch } from 'baobab-react/higher-order';
import Swiper from './Swiper';
import FirebaseCongif from '../configs/firebase_config.js';
import Firebase from 'firebase';

class Main extends Component {
  constructor() {
    super();
    Firebase.initializeApp(FirebaseConfig)
  }
  render() {

    return (
      <View>
        <Swiper />
      </View>
    )
  }
}

export default branch({ devMode: 'isDevMode' }, Main);