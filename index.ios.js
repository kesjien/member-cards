/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { branch, root } from 'baobab-react/higher-order';
import App from './app';
import Tree from './tree';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const MemberCards = React.createClass({
  render() {
    return (<App />);
  }
});

AppRegistry.registerComponent('MemberCards', () => root(Tree, MemberCards));

