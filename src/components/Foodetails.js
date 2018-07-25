import React,
{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

export default class Foodetails extends Component {
    render() {
        const imgId = this.props.navigation.getParam('imgId');
        const textId = this.props.navigation.getParam('textId');
        console.log(textId);
        return (
            <View
                style={styles.container}
            >
                <View
                    style={StyleSheet.img}
                >
                    <Image
                        style={styles.img}
                        source={{ uri: imgId }}
                    />
                </View>
                <View
                    style={styles.textBox}
                >
                    <Text
                        style={styles.txt}>
                        {textId}
                    </Text>
                    <Text>
                        kehgakjslfjgljozhoehoisdhvkhskhckhaslhlhfhosiyfosyfiohshadvkhdkhzskhdkyfiyeiosyoiygeohoihdslhgkhsdkhgkhduisyiesyi
                    </Text>

                </View>

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
        resizeMode: 'cover',
        zIndex: 0
    },
    textBox: {
        width: 250,
        height: 300,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgb(248,248,248)',
        borderRadius: 10,
        zIndex: 1,
        bottom: Dimensions.get('screen').height / 35
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})