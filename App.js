import React from 'react';
import {Dimensions} from 'react-native';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';
import LandingPage from './src/components/LandingPage';
import Details from './src/components/Details';
import SideBar from './src/components/SideBar';
import About from './src/components/About';
import Settings from './src/components/Settings';
import Menu from './src/components/Menu';
import Flip from './src/components/Flip';

const StackNavigation = StackNavigator({
    Home: {
        screen: LandingPage,
        navigationOptions: {
            header: null
        },
    },
    Details: {
        screen: Details,
        navigationOptions: () => ({
            title: 'Details'
        })
    },
    About: {
        screen: About,
        navigationOptions: () => ({
            header: null
        })
    },
    Settings: {
        screen: Settings,
        navigationOptions: () => ({
            header: null
        })
    },
    Profile: {
        screen: Details
    },
    Menu: {
        screen: Menu,
        navigationOptions: () => ({
            header: null
        })
    },
    Flip: {
        screen: Flip,
        navigationOptions: () => ({
            header: null
        })
    }
});

const customDrawerNavigation = DrawerNavigator({

    Main: {
        screen: StackNavigation,
    },
}, {
        contentComponent: props => <SideBar {...props} />,
        drawerWidth:Dimensions.get('window').width/1.5
    });


export default customDrawerNavigation;