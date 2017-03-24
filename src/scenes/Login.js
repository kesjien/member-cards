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
var Auth0Lock = require('react-native-lock');

class Login extends Component {
  render() {
    var lock = new Auth0Lock({clientId: 'o7ilD3zZmxeJcTlNOkPtBE17Sk1qyA3H',
      domain: 'kesj.eu.auth0.com',
      style: {
        ios: {
primaryButtonNormalColor: '#3F95EA',
primaryButtonHighlightedColor: '#3F95EA',
primaryButtonTextColor: '#FFFFFF',
secondaryButtonBackgroundColor: '#3F95EA',
secondaryButtonTextColor: '#FFFFFF',
textFieldTextColor: '#FFFFFF',
titleTextColor: '#FFFFFF',
// screenBackgroundColor: '#297B9A',
descriptionTextColor: '#a6bebe',
separatorTextColor: '#a6bebe',
credentialBoxBorderColor: '#FFFFFF',
credentialBoxSeparatorColor: '#3F95EA',
credentialBoxBackgroundColor: '#E4EFF9',
screenBackgroundImageName: 'bg.jpg'
// iconImageName: 'logo_light.png'
}
}});
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      // Authentication worked!
      console.log('Logged in with Auth0!');
    });
    return (
       <Image source={require('../../static/images/bg.jpg')} style={styles.backgroundImage}>
         <StatusBar barStyle='light-content'/>
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