import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const LogoImage = (props) => (
    <Image source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/back_pic/03/86/14/5557ce5e35973aa.jpg' }} style={props.style} />
);

class Screen1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Transition 
                shared="logo" 
                appear={"top"}
                >
                    <LogoImage style={styles.largeLogo} />
                </Transition>
                <Transition appear="vertical">
                    <Text style={styles.paragraph}>
                        Welcome to this fantastic app!
                    </Text>
                </Transition>
                <Button title="Next" onPress={() => this.props.navigation.navigate("screen2")} />
            </View>
        );
    }
}

class Screen2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Transition 
                 shared="logo" 
                appear={"flip"}>
                    <LogoImage style={styles.smallLogo} />
                </Transition>
                <Text style={styles.paragraph}>
                    <Text style={{ fontWeight: 'normal' }}>
                        Now you should have a basic understanding of how this app works.
                        Please sign up and take part in this fantastic user experience!
          </Text>
                </Text>
                <Text style={styles.paragraph}>
                    This is the last page of the onboarding.
        </Text>
                <Button title="Back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

const Navigator = FluidNavigator({
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 }
});

export default class Anime extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
    },
    largeLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    smallLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    paragraph: {
        margin: 24,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
