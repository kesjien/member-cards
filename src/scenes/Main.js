import React, { Component } from 'react';
import { 
  Text,
  View, 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { branch } from 'baobab-react/higher-order';

class Main extends Component {
  render() {
    return (
      <View>
        <Text>ASDKAJDKAJDLJASDJKASDASJDJLASDKJASDJL</Text>
      </View>
    )
  }
}

export default branch({ devMode: 'isDevMode' }, Main);