import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import Src from './src';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}
class MemberCards extends Component {
  render() {
    return <Router
      panHandlers={ ( Platform.OS === 'ios' ) ? undefined : null }>
      <Scene key="root" unmountScenes>
        <Scene key="login" initial={false} type="transitionToTop" component={Src.Scenes.Login} hideNavBar title="Login"></Scene>
        <Scene key="tabbar" tabs={true} >
          <Scene key="main" title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
            <Scene key="tab1_1" component={Src.Scenes.Main} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
export default MemberCards;

