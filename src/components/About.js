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
        this.springValue = new Animated.Value(1);
    }
    componentDidMount() {
        this.move();
    }
    move = () => {
        Animated.sequence([
            Animated.timing(this.animatedValue, {
                toValue: 315,
                duration: 3900
            }),
            Animated.timing(this.springValue,{
                tension:1,
                toValue:3,
                easing:Easing.bounce
            })
        ]).start()
    }
    render() {
        const travelY = this.animatedValue.interpolate({
            inputRange: [0, 100, 150, 200, 300, 310, 315],
            outputRange: [0, 150, 220, 350, 400, 500, 470]
        })
        const travelX = this.animatedValue.interpolate({
            inputRange: [0, 100, 150, 200, 300, 310, 315],
            outputRange: [0, 150, -45, 220, -45, 250, 100]
        })
        const rotateY = this.animatedValue.interpolate({
            inputRange: [0,315],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View
                style={styles.viewStyle}
            >
                <Animated.Image
                    style={[styles.imgStyle,
                    {
                        transform: [{ translateY: travelY },
                        { translateX: travelX },
                        {rotateY},{scale:this.springValue}
                        ]
                    }]}
                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/space-icons-set-cartoons-style/512/a1251-512.png' }}
                />
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
    }
})