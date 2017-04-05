import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import { branch } from 'baobab-react/higher-order';
import PropTypes from 'baobab-react/prop-types';
import Src from './src';
import { Scene, Switch, Router, Actions, ActionConst } from 'react-native-router-flux';
class MemberCards extends Component {
  static contextTypes = {
    tree: PropTypes.baobab
  }
  componentDidMount() {
    const tree = this.context.tree;
    const treeWatcher = tree.watch({
      data: ['data']
    })
  }
  render() {
    return <Router
      panHandlers={ ( Platform.OS === 'ios' ) ? undefined : null }>
      <Scene key="root" unmountScenes>
        <Scene key="login" initial={false} type="transitionToTop" component={Src.Scenes.Login} hideNavBar title="Login"></Scene>
        <Scene key="main" component={Src.Scenes.Main} />
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
export default branch({ devMode: ['devMode'] }, MemberCards);

