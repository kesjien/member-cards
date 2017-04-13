import React, { Component } from 'react';
import { StatusBar, Alert, Platform, AppState, InteractionManager } from 'react-native';
import Drawer from './react-native-drawer';
import SideMenu from './SideMenu';
import { Actions, ActionConst, DefaultRenderer } from 'react-native-router-flux';
import dismissKeyboard from 'dismissKeyboard'

class DrawerComponent extends Component {
    constructor( props ) {
        super( props );
        this.state = { active: 'dashboard', menuTypeIcon: true, logoff: false };
        this. = this.toggleMenuView.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
        this.logout = this.logout.bind(this);
    }
    logout() {
        alert('logout')
    }

    closeDrawer() {
      this.setState({ open: false})
      this._drawer.close();
    }

    onClickItem(route, props) {
        this.setState({ active: route, open: false})
        this._drawer.close();
        Actions[route]({...props});
    }

    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                open={this.state.open || state.open}
                onOpenStart={() => this.onDrawerOpen()}
                type="displace"
                content={<SideMenu
                    active={this.state.active} menuTypeIcon={this.state.menuTypeIcon}
                    closeDrawer={() => this.closeDrawer()}
                    onClick={this.onClickItem} />}
                tapToClose={true}
                initializeOpen={true}
                openDrawerOffset={0.175}
                tweenDuration={500}
                useInteractionManager={true}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenEasing={'easeInOutCubic'}
                >
                <StatusBar hidden={false}/>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}
export default DrawerComponent;