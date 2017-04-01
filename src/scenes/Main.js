import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { 
  Text,
  View, 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { branch } from 'baobab-react/higher-order';
import Swiper from './Swiper';
import FirebaseConfig from '../configs/firebase_config.js';
import firebase from 'firebase';
import configureStore from '../stores/configure.store.js'

class Main extends Component {
  constructor() {
    super();
    global.firebase = firebase;
    firebase.initializeApp(FirebaseConfig);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }
  render() {  
    return (
      <Provider store={this.state.store}>
        <Swiper />
      </Provider>
    )
  }
}

export default branch({ devMode: 'isDevMode' }, Main);