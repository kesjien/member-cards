import React, { Component } from 'react';
import { View, Linking, Platform, Image } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import StyledLink from './StyledLink';
import IconLink from './IconLink';
import normalize from '../utils/normalizeFont';
import vDimensions, { vw, vh } from '../utils/vDimensions';

class IconView extends Component {
  constructor(props) {
    super(props);
    this.onItemPress = this.onItemPress.bind(this);
  }

  shouldComponentUpdate( nextProps, nextState ) {
      if (this.state === nextState) { return false }
      return true;
  }
  
  onItemPress(route, props = {}) {
    this.props.onClick(route, props);
  }

  render( ) {
    const { t, active } = this.props;
    const elStyles = {
      mainView: { flex: 1, flexDirection: 'column', backgroundColor: 'transparent'},
      rowView: { flexDirection:'row', height: vh(20), backgroundColor:"rgb(19,10,3)" },
      contactsView: { paddingTop: 12, borderTopWidth: 1, borderTopColor: "#5c5c5c" }
    }
    const textProps = { allowTextScaling: false };
    return (
      <View style={elStyles.mainView}>

        <View style={elStyles.rowView}>
          <IconLink>
            <Icon style={styles.iconStyle} name="ios-albums-outline" />
          </IconLink>
          <IconLink>
            <Icon style={styles.iconStyle} name="ios-add-circle-outline" />
          </IconLink>
        </View>

        <View style={elStyles.rowView}>
          <IconLink
            onPress={() => this.onItemPress('savings')}            
            image={require('./../../static/images/menu/menu_3.png')}
            imageActive={require('./../../static/images/menu/active/menu_3.png')}
            active={ active === 'savings'}>
            <Icon style={styles.iconStyle} name="ios-list-outline" />
          </IconLink>

          <IconLink
            onPress={() => this.onItemPress('documents')}
            image={require('./../../static/images/menu/menu_4.png')}
            imageActive={require('./../../static/images/menu/active/menu_4.png')}
            active={ active === 'documents'}>
            <Icon style={styles.iconStyle} name="ios-school-outline" />
          </IconLink>
        </View>

        <View style={elStyles.rowView}>
          <IconLink
            onPress={() => this.onItemPress('settings')}
            image={require('./../../static/images/menu/menu_5.png')}
            imageActive={require('./../../static/images/menu/active/menu_5.png')}
            active={ active === 'settings'}>
            <Icon style={styles.iconStyle} name="ios-settings-outline" />
          </IconLink>

          <IconLink
            onPress={() => this.onItemPress('contacts')}        
            image={require('./../../static/images/menu/menu_6.png')}
            imageActive={require('./../../static/images/menu/active/menu_6.png')}
            active={active === 'contacts'}>
            <Icon style={styles.iconStyle} name="ios-log-out-outline" />
          </IconLink>
        </View>

      </View>
    );
  }
}

export default class extends Component {

  render() {
    const menuType = this.props.menuTypeIcon;
    const CustomView = IconView;

    return (
      <View style={styles.sideMenuMain}>
      <Image source={require('../../static/images/drawerImage.jpg')} style={styles.backgroundImage} />
        <CustomView {...this.props} />
      </View>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 0.3,
    height: undefined,
    width: undefined,
    resizeMode: 'cover',
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideMenuMain: {
    flex: 1,
    backgroundColor: "rgb(26,11,0)"
  },
  iconStyle: {
    fontSize: 30, 
    color: "rgba(241,239,236, 1)"
  }
};
