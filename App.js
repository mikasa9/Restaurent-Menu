import React from 'react';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';
import LandingPage from './src/components/LandingPage';
import Details from './src/components/Details';
import SideBar from './src/components/SideBar';
import About from './src/components/About';


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
    About: {
        screen: About,
        navigationOptions: () => ({
           // headerStyle:{backgroundColor:'transparent'},
          header:null
    
        })

    }, 
});

const customDrawerNavigation = DrawerNavigator({

    Main: {
        screen: StackNavigation,
    },
}, {
        contentComponent: props => <SideBar {...props} />,
        drawerWidth: 300
    });


export default customDrawerNavigation;