import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';

export default class Details extends Component {
    constructor() {
        super()
        this.animateValue = new Animated.Value(0);
        this.translateValue = new Animated.Value(300);
        this.translate = new Animated.Value(300);
    }

    componentDidMount() {
        this.animate();
    }

    animate = () => {
        Animated.stagger(2000, [
            Animated.timing(this.animateValue, {
                toValue: 1,
                duration: 3000,
            }),
            Animated.timing(this.translate, {
                toValue: 0,
                duration: 2000,
                easing: Easing.linear
            }),
            Animated.timing(this.translateValue, {
                toValue: 0,
                duration: 2000,
                easing: Easing.bounce
            })
        ]).start()
    }

    render() {
        const opacity = this.animateValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.5, 1]
        })
        const spin = this.translate.interpolate({
            inputRange: [0, 300],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View
                style={styles.container}
            >
                <Animated.View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity
                    }}>
                    <Animated.Image
                        style={[styles.img,
                        {
                            transform: [{ translateX: this.translate },
                            { translateY: this.translate },
                            { rotate: spin }]
                        }]}
                        source={{ uri: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/89f5f4cb-5688-4bd9-8991-559b8c73a276.jpg' }}
                    >
                    </Animated.Image>
                    <Animated.Text
                        style={[styles.txt
                            , {
                            transform: [{ translateY: this.translateValue }],
                            opacity
                        }]}>
                        I come with no wrapping or pretty pink bows.
                       I am who I am, from my head to my toes.
                        I tend to get loud when speaking my mind.
                        Even a little crazy some of the time.
                   </Animated.Text>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    img: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
    },
    txt: {
        fontSize: 24,
        margin: 5,

    }
})