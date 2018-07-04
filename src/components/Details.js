import React, { Component } from 'react';
import { View, Image, StyleSheet,Animated } from 'react-native';



export default class Details extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Image
                    style={styles.img}
                    source={{ uri: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/89f5f4cb-5688-4bd9-8991-559b8c73a276.jpg' }}
                >
                </Animated.Image>
                <Animated.Text >
                I will be talking about how to achieve Shared Element Transition with React Native for both iOS and Android.
Will explain the advantages of having a smooth continuous experience.
And since React Native doesn’t support true shared elements, I will explain how we can achieve this with a clever trick of smoke and mirror.
                </Animated.Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
    }
})