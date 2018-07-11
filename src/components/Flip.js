import React from 'react';
import {
    View,
    Animated,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

let wid = Dimensions.get('window').width;
let ht = Dimensions.get('window').height;
export default class Flip extends React.Component {
    constructor() {
        super()
        this.flipValue = new Animated.Value(0);
        this.state = { click: true }
    }

    renderA = () => {
        return (<Screen1 />)
    }

    renderB = () => {
        return (<Screen2 />);
    }
    press = () => {
        if (this.state.click == true) {
            this.animate(0, 0.5);
            this.setState({ click: false })
        }
        else {
            this.animate(0.5, 1);
            this.setState({ click: true })
        }
    }
    animate = (a, b) => {
        this.flipValue.setValue(a)
        Animated.timing(this.flipValue, {
            toValue: b,
            duration:2000
        }).start()
    }

    render() {
        const flip = this.flipValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        })
        return (
            <View
                style={styles.container}
            >
                <Animated.View style={[{ flex: 4 },{transform:[{rotateY:flip}]}]}>
                    {this.state.click ? this.renderA() : this.renderB()}
                </Animated.View>
                <TouchableOpacity
                    style={styles.box}
                    onPress={this.press}>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    box: {
        flex: 1,
        backgroundColor: 'brown'
    },
    img: {
        width: wid,
        height: ht / 1.3
    }
})