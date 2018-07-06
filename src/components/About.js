import React from 'react';
import {
    View,
    Animated,
    Easing,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';

export default class About extends React.Component {
    constructor() {
        super()
        this.xValue = new Animated.Value(0);
        this.yValue = new Animated.Value(0);
    }


    componentDidMount() {
        this.animate();
    }
    animate = () => {
        Animated.sequence([
            Animated.timing(this.yValue, {
                toValue: 500,
                duration: 4000
            }),
            Animated.timing(this.xValue, {
                toValue: 100,
                duration: 4000
            })
        ]).start()

    }
    render() {
        const swing = this.xValue.interpolate({
            inputRange: [50, 150],
            outputRange: [50, 200]
        })
        const move = this.yValue.interpolate({
            inputRange: [50, 200],
            outputRange: [200, 50]
        })
        return (
            <View
                style={styles.container}>
                <Animated.View
                    style={[styles.viewStyle, {
                        transform: [{ translateY: move },
                        { translateX: swing }
                        ]
                    }]}>
                    <Animated.Image
                    style={styles.viewStyle}
                    source={{uri:'https://cdn4.iconfinder.com/data/icons/essentials-volume-6/128/ufo-512.png'}}/>
                   
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        backgroundColor: 'lightyellow'

    },
    viewStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        right: 130
    }
})