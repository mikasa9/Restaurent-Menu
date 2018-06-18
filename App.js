import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LandingPage from './src/components/LandingPage';
import Details from './src/components/Details';

export default createStackNavigator({
    Home: {
        screen: LandingPage,
        navigationOptions: {
            header: null
        },
    },
    Details: {
        screen: Details,
        navigationOptions: () => ({
           title:'Detail',                    
        })
    },
});