
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Dimensions from 'Dimensions';
import NoItems from '../common/NoItemContentMsg';
import { syncPosts, fetchPosts } from '../actions/post';
import Swiper from './Swiper';
import Card from './Card';

class CardsProvider extends Component {

  static propTypes = {
    fetchPosts: React.PropTypes.func,
    syncPosts: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  constructor(props) {
    super(props);
    this.state = { posts: props.posts, page: 'home' };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleYup() {
    console.log('YES');
  }

  handleNope() {
    console.log('NO');
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const swiper = (
      <Swiper
        containerStyle={styles.cardContainer}
        cards={this.props.posts}
        renderCard={cardData => (
          <Card
            width={width}
            height={height}
            data={cardData}
          />
        )}
        renderNoMoreCards={() => <NoItems><Text>No More Cards</Text></NoItems>}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      >
      test
      </Swiper>);

    const mainContent = this.state.page === 'home' ? swiper : (<Text>Not A Home</Text>);

    return (
      <View style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>
          {mainContent}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
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
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  headButton: {
    color: '#23debf'
  }
})
function bindAction(dispatch) {
  return {
    syncPosts: () => dispatch(syncPosts()),
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    posts: state.posts.posts,
    list: state.posts.posts,
  };
}

export default connect(mapStateToProps, bindAction)(CardsProvider);
