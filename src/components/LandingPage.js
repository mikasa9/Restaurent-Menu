import React,
{ Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native';
import Header from './Header';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class LandingPage extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <StatusBar hidden />
                <View
                    style={{
                        flex: 1.5,
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: 'https://qph.ec.quoracdn.net/main-qimg-11604fd8f8b93d630eb6b3a941fd9ec7.webp' }}
                    />
                    <Text
                        style={styles.title}
                    >
                        Welcome Back!
                    </Text>
                    <Text
                        style={{ fontSize: 19, color: '#000000', marginTop: 20, }}
                    >
                        Introducing yonai,with more than 6 thousand
                    </Text>
                    <Text
                        style={{ fontSize: 19, color: '#000000' }}
                    >
                        recepies and amazing features yonai.
                     </Text>
                </View>
                <View
                    style={{
                        flex: 1.5,
                        alignContent: 'flex-start',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            justifyContent: 'flex-start',
                            fontWeight: 'bold',
                            color: '#000000',
                        }}
                    >Email
                </Text>
                    <TextInput
                        style={styles.inputButton}
                        placeholder="E-mail"
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 20,
                            justifyContent: 'flex-start',
                            fontWeight: 'bold',
                            color: '#000000',
                        }}
                    >
                        Password
                 </Text>
                    <TextInput
                        style={styles.inputButton}
                        placeholder="Password"
                    />
                    <View >
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('ImageView')}
                        >
                            <Text
                                style={{ fontSize: 26, color: '#ffffff' }}
                            >
                                Login
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <Header
                    onPress={() => this.props.navigation.toggleDrawer()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
    },
    imageStyle: {
        marginTop: 20,
        resizeMode: 'center',
        height: (100 / 790) * height,
        width: (250 / 152) * width
    },
    title: {
        fontSize: 27,
        marginTop: 25,
        color: 'rgb(0,0,0)',
        alignItems: 'center'
    },
    inputButton: {
        margin: (5 / 152) * width,
        width: (130 / 152) * width,
        color: '#ff4500',
        fontSize: 27,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#ff4500',
        paddingVertical: (10 / 790) * height,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
})
