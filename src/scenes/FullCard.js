import React, { Component } from 'react';

import { Image, TouchableHighlight, TouchableWithoutFeedback, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
export default class Card extends Component {
  constructor() {
    super();
    this.isLikedOnModal = this.isLikedOnModal.bind(this);
    this.isMovedOnModal = this.isMovedOnModal.bind(this);
  }
  isLikedOnModal() {
    this.props.setFullCardVisible();
    this.props.isLiked();
  }
  isMovedOnModal() { 
    this.props.setFullCardVisible();
    this.props.isMoved();
  }
  render() {
    return (
      <Modal visible={this.props.visible} animationType={'fade'}>
          <ScrollView style={this.props.stylesCard}>
              <View>
                <View>
                  <View style={styles.headSection}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.name}>Ivan Dorohov</Text>
                        <Text style={styles.companyName}>Ciklum</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.name}></Text>
                        <Text style={styles.location}>Amosova 12</Text>
                    </View>
                  </View>
                  <View style={styles.bodySection}>
                    <View style={styles.title}>
                      <Text numberOfLines={2} style={{fontFamily: 'HelveticaNeue-Medium'}}>
                        {this.props.children.title}
                      </Text>
                    </View>
                    <View style={styles.body}>
                      <Text numberOfLines={10} style={{fontFamily: 'HelveticaNeue-Light'}}>
                        {this.props.children.body}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              </ScrollView>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    flex: 0.4
  },
  companyName: {
    alignSelf: 'stretch'
  },
  location: {
    fontSize: 12,
    alignSelf: 'stretch',
    fontFamily: 'HelveticaNeue-Light'
  },
  headSection: {
    borderBottomColor: '#d6d7da',
    paddingBottom: 15,
    borderBottomWidth: 2
  },
  title: {
    marginTop: 40
  },
  body: {
    marginTop: 20
  },
  image: {
    width: 300,
    height: 300
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})