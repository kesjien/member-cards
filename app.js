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
            <Text style={{color: this.props.selected ? 'yellow' :'black'}}>{this.props.title}</Text>
        );
    }
}
const RouterWithRedux = connect()(Router);
class MemberCards extends Component {
  render() {
    return <Router
      panHandlers={ ( Platform.OS === 'ios' ) ? undefined : null }>
      <Scene key="root">
        <Scene hideNavBar={true} key="login" initial={false} type="transitionToTop" component={Src.Scenes.Login} title="Login"></Scene>
        <Scene key="tabbar" tabs={true}>
          <Scene key="main" initial={true}
            hideNavBar={true}
            title="Main"
            icon={TabIcon}
            component={Src.Scenes.Main}
          />
          <Scene key="main" initial={true}
            hideNavBar={true}
            title="List"
            icon={TabIcon}
            component={Src.Scenes.Main}
          />
          <Scene key="main" initial={true}
            hideNavBar={true}
            title="Actions"
            icon={TabIcon}
            component={Src.Scenes.Main}
          />
        </Scene>
      </Scene>
    </Router>
  }
}

export default MemberCards;

