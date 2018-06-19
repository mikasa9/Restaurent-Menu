import React, { Component } from 'react';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';
import LandingPage from './src/components/LandingPage';
import Details from './src/components/Details';

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
            title: 'Detail',
        })
    },
});

const customDrawerNavigation = DrawerNavigator({

    Main: {
        screen: StackNavigation,
    },
}, {
        contentComponent: props=><Details{...props}/>,
        drawerWidth: 300
    });


export default customDrawerNavigation;