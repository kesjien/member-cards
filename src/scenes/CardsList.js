'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
    PanResponder,
    Image
} from 'react-native';

import clamp from 'clamp';
import Card from '../swipeCards/card';
import Dimensions from 'Dimensions';

var SWIPE_THRESHOLD = 100;

class SwipeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0),
      card: this.props.cards ? this.props.cards[0] : null,
    }
    this.isLiked = this.isLiked.bind(this);
    this.isMoved = this.isMoved.bind(this);
  }

  _goToNextCard() {
    let currentCardIdx = this.props.cards.indexOf(this.state.card);
    let newIdx = currentCardIdx + 1;
    let card = newIdx > this.props.cards.length - 1
      ? this.props.loop ? this.props.cards[0] : null
      : this.props.cards[newIdx];
    this.setState({
      card: card
    });
  }

  isLiked() {
    Animated.spring(this.state.pan, {
            toValue: {x: -300, y: 0},
            // delay: 300,
          }).start(
          () => {
            this._goToNextCard();
            Animated.spring(this.state.pan, {
              toValue: {x: 0, y: 0},
              friction: 3.9
            }).start();
          }
          );
    // Animated.timing(
    //   this.state.enter,
    //   { 
    //     toValue:  0, 
    //     delay: 300,
    //     duretion: 500,
    //     easing: Easing.linear
    //   }
    // ).start(()=>{
    //   this._goToNextCard();
    //   this._animateEntrance();
    // }); 
  }
  isMoved() {
        Animated.spring(this.state.pan, {
            toValue: {x: 300, y: 0},
            // delay: 300,
          }).start(
          () => {
            this._goToNextCard();
            Animated.spring(this.state.pan, {
              toValue: {x: 0, y: 0},
              friction: 3.9
            }).start();
          }
          );
    // Animated.timing(
    //   this.state.enter,
    //   { 
    //     toValue:  0, 
    //     delay: 300,
    //     duretion: 500,
    //     easing: Easing.linear
    //   }
    // ).start(()=>{
    //   this._goToNextCard();
    //   this._animateEntrance();
    // }); 
  }

  componentDidMount() {
    this.state.enter.setValue(1);
    // this._animateEntrance();
  }

  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      { 
        toValue:  1, 
        velocity: 1,
        tension: -3,
        friction: 1.9
      }
    ).start();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.cards && nextProps.cards.length > 0){
      this.setState({
        card: nextProps.cards[0]
      })
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return gestureState.dx != 0 && gestureState.dy != 0;
      },

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        var velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {

          this.state.pan.x._value > 0
            ? this.props.handleYup(this.state.card)
            : this.props.handleNope(this.state.card)

          this.props.cardRemoved
            ? this.props.cardRemoved(this.props.cards.indexOf(this.state.card))
            : null

          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.1
          }).start(this._resetState.bind(this))
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
  }

  _resetState() {
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(1);
    this._goToNextCard();
    this._animateEntrance();
  }

  renderNoMoreCards() {
    if (this.props.renderNoMoreCards)
      return this.props.renderNoMoreCards();

    return (
      <Defaults.NoMoreCards />
    )
  }

  renderCard(cardData) {
    return this.props.renderCard(cardData)
  }

  render() {
    let { pan, enter, } = this.state;
    const { height, width } = Dimensions.get('window');
    let [translateX, translateY] = [pan.x, pan.y];

    // let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-140, 0, 140], outputRange: [0.5, 1, 0.5]});
    let scale = enter;

    let animatedCardstyles = {transform: [{translateX}, {translateY}, /*{rotate},*/ {scale}], opacity};

    // let yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
    // let yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
    // let animatedYupStyles = {transform: [{scale: yupScale}], opacity: yupOpacity}

    // let nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
    // let nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});
    // let animatedNopeStyles = {transform: [{scale: nopeScale}], opacity: nopeOpacity}
    // const cardData = [title: this.state.card.title, body: this.state.card.body]
    // console.log(cardData)
        return (
            <View style={this.props.containerStyle}>
                { this.state.card
                    ? (
                    <Animated.View style={[this.props.cardStyle, animatedCardstyles]} {...this._panResponder.panHandlers}>
                      <Card
                        width={width}
                        height={height}
                        stylesCard={styles.card}
                        // data={this.state.card}
                        isLiked={this.isLiked}
                        isMoved={this.isMoved}
                      >{this.state.card}</Card>
                    </Animated.View>
                )
                    : this.renderNoMoreCards() }


                { this.props.renderNope
                  ? this.props.renderNope(pan)
                  : (
                      this.props.showNope
                      ? (
                        <Animated.View style={[this.props.nopeStyle]}>
                            {this.props.noView
                                ? this.props.noView
                                : <Text style={this.props.nopeTextStyle}>{this.props.noText ? this.props.noText : ""}</Text>
                            }
                        </Animated.View>
                        )
                      : null
                    )
                }

                { this.props.renderYup
                  ? this.props.renderYup(pan)
                  : (
                      this.props.showYup
                      ? (
                        <Animated.View style={[this.props.yupStyle]}>
                            {this.props.yupView
                                ? this.props.yupView
                                : <Text style={this.props.yupTextStyle}>{this.props.yupText? this.props.yupText : ""}</Text>
                            }
                        </Animated.View>
                      )
                      : null
                    )
                }

            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  noTextView: {
    flex: 1,
    backgroundColor:'#ebeef0',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 20,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 500,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});


SwipeCards.propTypes = {
    cards: React.PropTypes.array,
    renderCards: React.PropTypes.func,
    loop: React.PropTypes.bool,
    renderNoMoreCards: React.PropTypes.func,
    showYup: React.PropTypes.bool,
    showNope: React.PropTypes.bool,
    handleYup: React.PropTypes.func,
    handleNope: React.PropTypes.func,
    yupView: React.PropTypes.element,
    yupText: React.PropTypes.string,
    noView: React.PropTypes.element,
    noText: React.PropTypes.string,
    containerStyle: View.propTypes.style,
    cardStyle: View.propTypes.style,
    yupStyle: View.propTypes.style,
    yupTextStyle: Text.propTypes.style,
    nopeStyle: View.propTypes.style,
    nopeTextStyle: Text.propTypes.style
};

SwipeCards.defaultProps = {
    loop: true,
    showYup: false,
    showNope: false,
};

export default SwipeCards
