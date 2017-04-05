import React, { Component } from 'react';
import { Image,TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet, Text, Icon } from 'react-native';
import FullCard from './FullCard';
// import styles from './styles';
export default class Card extends Component {
  constructor() {
    super();
    this.state = {visible: false}
  }
  setFullCardVisible() {
    if (this.state.visible) {
      this.setState({visible: false});
    } else {
      this.setState({visible: true});
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.setFullCardVisible}>
        <View>
          <View style={[this.stylesCard, {opacity:0.6,width: 0.9 * this.props.width, 
            height: 0.85 * this.props.height, marginTop: 40, marginBottom: 40,
            borderRadius: 8,  borderWidth: 1.5, borderColor: '#d6d7da', backgroundColor: '#fff'}]}>
              <View style={styles.mainContainer}>
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
                      <Text style={{fontFamily: 'HelveticaNeue-Medium'}}>
                        {this.props.children.title}
                      </Text>
                    </View>
                    <View style={styles.body}>
                      <Text style={{fontFamily: 'HelveticaNeue-Light'}}>
                        {this.props.children.body}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
          </View>
          <FullCard 
            isLiked={this.props.isLiked}
            isMoved={this.props.isMoved} 
            setFullCardVisible={this.setFullCardVisible} 
            visible={this.state.visible}>{this.props.children}</FullCard>
        </View>
      </TouchableWithoutFeedback>
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
  },
  stylesCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})