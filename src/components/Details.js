import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';



export default class Details extends Component {
    componentWillMount() {
        this.animateValue = new Animated.Value(0);
        this.translateValue = new Animated.Value(300);
    }
    componentDidMount() {
        this.animate();
    }

    animate = () => {
        Animated.parallel([

            Animated.timing(this.animateValue, {
           //     delay: 3000,
                toValue: 1,
                duration: 3000,
                delay: 3000
            }),
            Animated.timing(this.translateValue, {
                toValue: 0,
                duration: 5000
            })
        ]).start()
    }





    render() {
        const opacity = this.animateValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.5, 1]
        })
        return (
            <View>
                <Animated.View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: this.animateValue }}>
                    <Animated.Image
                        style={[styles.img, { transform: [{ translateY: this.translateValue },{translateX:this.translateValue}] }]}
                        source={{ uri: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/89f5f4cb-5688-4bd9-8991-559b8c73a276.jpg' }}
                    >
                    </Animated.Image>
                </Animated.View>
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