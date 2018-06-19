import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


export default class SideBar extends Component {
    render() {
        return (

            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Settings')}
                >
                    <Text>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Profile')}
                >
                    <Text>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('About')}
                >
                    <Text>About</Text>
                </TouchableOpacity>

            </View>
        )
    }
}