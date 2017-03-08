import React, { Component } from 'react';
import { 
  Text,
  View, 
  Image, 
  TouchableOpacity, 
  StatusBar, 
  KeyboardAvoidingView, 
  ActivityIndicator, 
  Linking, 
  Platform, 
  Alert, 
  ScrollView, 
  Modal, 
  StyleSheet 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { branch } from 'baobab-react/higher-order';

class Login extends Component {
  render() {
    return (
       <Image source={require('../../static/images/bg.jpg')} style={styles.backgroundImage}>
         <StatusBar barStyle='light-content'/>
         <Text>111</Text>
       </Image>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    // marginTop: 20,
    resizeMode: 'cover', // or 'stretch'
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default branch({ devMode: 'isDevMode' }, Login);