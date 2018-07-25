import React from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Dimensions,
    Easing
} from 'react-native';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export default class About extends React.Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0);
        this.springValue = new Animated.Value(0.3);
        this.fontSize = new Animated.Value(0);
    }
    componentDidMount() {
        this.move();
    }
    move = () => {
        Animated.stagger(2000, [
            Animated.timing(this.animatedValue, {
                delay:500,
                toValue: 320,
                duration: 3900
            }),
            Animated.timing(this.springValue, {
                delay:500,
                toValue: 2.5,
                easing: Easing.bounce
            }),
            Animated.spring(this.fontSize, {
                toValue: 45
            })
        ]).start()
    }
    render() {
        const travelY = this.animatedValue.interpolate({
            inputRange: [0, 100, 150, 200, 300, 310, 320],
            outputRange: [0, 150, 220, 350, 400, 500, 470]
        })
        const travelX = this.animatedValue.interpolate({
            inputRange: [0, 100, 150, 200, 300, 310, 320],
            outputRange: [0, 150, -45, 220, -45, 250, 100]
        })
        const rotateY = this.animatedValue.interpolate({
            inputRange: [0, 320],
            outputRange: ['0deg', '360deg']
        })
        const fontStyle = {
            fontSize: this.fontSize,
            color: 'white',
            top: 100,
            margin: 30
        }
        return (
            <View
                style={styles.viewStyle}
            >
                <Animated.Image
                    style={[styles.imgStyle,
                    {
                        transform: [{ translateY: travelY },
                        { translateX: travelX },
                        { rotateY }, { scale: this.springValue }
                        ]
                    }]}
                    source={{ uri: 'https://www.shareicon.net/download/2016/08/18/809895_ufo_512x512.png' }}
                />
                <Animated.Text
                    style={fontStyle}>Just a food app!
                </Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        height: (789.9 / 790) * height,
        width: width,
        backgroundColor: 'darkblue'
    },
    imgStyle: {
        width: 150,
        height: 150,
        resizeMode: 'center',
        position: 'absolute',
        top: 0
    },
})