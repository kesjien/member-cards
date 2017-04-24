import React, { Component } from 'react';
import { View, Linking, Platform, Image } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

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
    const LinkType = IconLink;
    const elStyles = {
      mainView: { flex: 1, flexDirection: 'column', backgroundColor: 'transparent'},
      rowView: { flexDirection:'row', height: vh(20) },
      contactsView: { paddingTop: 12, borderTopWidth: 1, borderTopColor: "#5c5c5c" }
    }
    const textProps = { allowTextScaling: false };
    return (
      <View style={elStyles.mainView}>

        <View style={elStyles.rowView}>
          <LinkType
            onPress={() => this.onItemPress('dashboard')}
            image={require('./../../static/images/menu/menu_1.png')}
            imageActive={require('./../../static/images/menu/active/menu_1.png')}
            active={ active === 'dashboard'}>
            {'Pensionsoverblikket'}
          </LinkType>
          <LinkType
            onPress={() => this.onItemPress('epension')}
            imageScale={1.5}
            image={require('./../../static/images/menu/menu_2.png')}
            imageActive={require('./../../static/images/menu/active/menu_2.png')}
            active={ active === 'epension'}>
            {'e-Pensionstjek'}
          </LinkType>
        </View>

        <View style={elStyles.rowView}>
          <LinkType
            onPress={() => this.onItemPress('savings')}            
            image={require('./../../static/images/menu/menu_3.png')}
            imageActive={require('./../../static/images/menu/active/menu_3.png')}
            active={ active === 'savings'}>
            {'Opsparing & forsikringer'}
          </LinkType>

          <LinkType
            onPress={() => this.onItemPress('documents')}
            image={require('./../../static/images/menu/menu_4.png')}
            imageActive={require('./../../static/images/menu/active/menu_4.png')}
            active={ active === 'documents'}>
            {'Dokumenter'}
          </LinkType>
        </View>

        <View style={elStyles.rowView}>
          <LinkType
            onPress={() => this.onItemPress('settings')}
            image={require('./../../static/images/menu/menu_5.png')}
            imageActive={require('./../../static/images/menu/active/menu_5.png')}
            active={ active === 'settings'}>
            {'Personlige oplysninger'}
          </LinkType>

          <LinkType
            onPress={() => this.onItemPress('contacts')}        
            image={require('./../../static/images/menu/menu_6.png')}
            imageActive={require('./../../static/images/menu/active/menu_6.png')}
            active={active === 'contacts'}>
            {'Kontakt os'}
          </LinkType>
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
    flex: 0.5,
    height: undefined,
    width: undefined,
    resizeMode: 'cover',
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideMenuMain: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    backgroundColor: '#333'
  },
  versioningText: {
    flex: 1,
    margin: 25,
    color: "#fff",
    fontSize: normalize(5),
  },
  item : {
    text: {
      marginTop: vDimensions(1, 'vh'),
      marginBottom: vDimensions(1, 'vh'),
      color: '#fff',
    }
  },
  listContactsView : {
    paddingLeft: 0,
    justifyContent:'center',
    backgroundColor: '#333',
  }
};
