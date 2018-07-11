import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default class SideBar extends Component {
    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Settings')}
                >
                    <Text style={styles.text}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Details')}
                >
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('About')}
                >
                    <Text style={styles.text}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Flip')}
                >
                    <Text style={styles.text}>Flip</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 25,
        color: '#000',
        justifyContent: 'flex-start',
        marginVertical: 8,
        marginHorizontal: 15,      
    },
    button: {
        marginVertical: 1,
        backgroundColor: 'rgb(250,250,250)',
        elevation: 3,
        position:'relative'
    }


})