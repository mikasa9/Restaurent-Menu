import React,
{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';
import BackButton from './BackButton';

export default class Foodetails extends Component {
    render() {
        const imgId = this.props.navigation.getParam('imgId');
        const textId = this.props.navigation.getParam('textId');
        const infoId = this.props.navigation.getParam('infoId');

        return (
            <View
                style={styles.container}
            >
                <View
                    style={StyleSheet.img}
                >
                    <Image
                        style={[styles.img, { resizeMode: 'cover' }]}
                        source={{ uri: imgId }}
                    />
                    <View
                        style={[styles.img,
                        {
                            position: 'absolute',
                            backgroundColor: 'rgba(0,0,0,0.3)'
                        }]}>
                    </View>
                    <View
                        style={[styles.img,
                        {
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }]}>
                        <Text
                            style={[styles.txt,
                            { color: 'white' }]}
                        >
                            {textId}
                        </Text>
                        <Text
                            style={[styles.txt,
                            {
                                color: 'white',
                                fontSize: 17,
                                fontWeight: 'normal',
                                textAlign: 'center'
                            }]}
                        >
                            {infoId}
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.textBox}
                >
                    <Text
                        style={[styles.txt]}
                    >
                    Enter Shipping Address
                    </Text>
                    <TextInput
                        style={styles.inptButton}
                        underlineColorAndroid={'transparent'}
                        maxLength={30}
                    />
                    <TextInput
                        style={styles.inptButton}
                        underlineColorAndroid={'transparent'}
                        maxLength={30}
                    />
                    <TextInput
                        style={styles.inptButton}
                        underlineColorAndroid={'transparent'}
                        maxLength={30}
                    />
                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            style={[styles.txt,
                            { color: 'white' }]}
                        >
                            Order
                        </Text>
                    </TouchableOpacity>
                </View>
                <BackButton
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    img: {
        height: Dimensions.get('screen').height / 2.5,
        width: Dimensions.get('screen').width,
        zIndex: 0
    },
    textBox: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',     
        width: 250,
        height: 350,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgb(248,248,248)',
        borderRadius: 10,
        zIndex: 1,
        bottom: Dimensions.get('screen').height / 35,
        alignItems: 'stretch',
        elevation:2
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#ff4500',
        alignItems: 'center',
        borderRadius: 30,
        padding: 10,
    },
    inptButton: {
        color: '#000000',
        borderBottomWidth: 0.3,
        fontSize: 22,
    },
    inptButtonStyle: {
        flex: 1,
    }
})