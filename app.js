import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import Src from './src';
import Drawer from './src/drawer';
import NavBar from './src/drawer/NavBar';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? '#3F95EA' :'black'}}>{this.props.title}</Text>
        );
    }
}
class MemberCards extends Component {
    render() {
      const drawerSceneDefaultProps = {
        // titleImage: require('./images/logo.png'),
        navBar: NavBar
    };
    return <Router
      panHandlers={ ( Platform.OS === 'ios' ) ? undefined : null }>
      <Scene key="root">
        <Scene hideNavBar={true} key="login" initial={false} type="transitionToTop" component={Src.Scenes.Login} title="Login"></Scene>
        <Scene key="drawer" type={ActionConst.REPLACE} hideNavBar={false} component={Drawer} open={false}>
          <Scene key="tabbar" style={{backgroundColor: 'transparent'}} tabs={true}>
            <Scene key="main" initial={true}
              {...drawerSceneDefaultProps}
              // hideNavBar={true}
              title="Main"
              icon={TabIcon}
              component={Src.Scenes.Main}
            />
            <Scene key="main" initial={true}
              {...drawerSceneDefaultProps}
              // hideNavBar={true}
              title="List"
              icon={TabIcon}
              component={Src.Scenes.Main}
            />
            <Scene key="main" initial={true}
              {...drawerSceneDefaultProps}
              // hideNavBar={true}
              title="Actions"
              icon={TabIcon}
              component={Src.Scenes.Main}
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  }
}

export default MemberCards;

