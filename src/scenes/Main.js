import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { 
  Text,
  View, 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { branch } from 'baobab-react/higher-order';
import Swiper from './Swiper';
import FirebaseCongif from '../configs/firebase_config.js';
import Firebase from 'firebase';
import ConfigureStore from '../stores/configure.store.js'

class Main extends Component {
  constructor() {
    super();
    global.firebase = Firebase;
    Firebase.initializeApp(FirebaseConfig);
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