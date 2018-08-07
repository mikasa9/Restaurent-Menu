import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    Animated
} from 'react-native';

export default class Flip extends Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        this.frontOpacity = this.animatedValue.interpolate({
            inputRange: [80, 100],
            outputRange: [1, 0]
        })
        this.backOpacity = this.animatedValue.interpolate({
            inputRange: [80, 100],
            outputRange: [0, 1]
        })
    }

    flipCard() {
        if (this.value >= 90) {
            Animated.timing(this.animatedValue, {
                toValue: 0,
            }).start();
        } else {
            Animated.timing(this.animatedValue, {
                toValue: 180,
            }).start();
        }
    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate }
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }
        return (
            <View style={styles.container}>
                <View>
                    <Animated.View style={[styles.flipCard, frontAnimatedStyle,
                    { opacity: this.frontOpacity }
                    ]}>
                        <Image style={styles.flipCard}
                            source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/back_pic/03/86/14/5557ce5e35973aa.jpg' }}
                        />
                    </Animated.View>
                    <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle,
                    { opacity: this.backOpacity }
                    ]}>
                        <Image style={styles.flipCard}
                            source={{ uri: 'https://i.pinimg.com/originals/16/ed/25/16ed25195dff2d891da215c28cc75fba.jpg' }}
                        />
                    </Animated.View>
                </View>
                <TouchableOpacity onPress={() => this.flipCard()}>
                    <Text>Flip!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    flipCard: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        position: "absolute",
        top: 0,
    },
    flipText: {
        width: 90,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
});