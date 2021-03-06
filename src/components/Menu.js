import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import BackButton from './BackButton';
import Like from './Like';
import { Transition } from 'react-navigation-fluid-transitions';
import { Ad, Data } from '../Database'

let count = 0;
export default class Menu extends Component {
    takeKey = ({ id }) => id
    take = ({ i }) => i
    takeItems = ({ item }) => {
        count = count + 1;
        return (
            <View>
                <Image
                    style={{ width: 460, height: 350, resizeMode: 'cover' }}
                    source={{ uri: item.img }}>
                </Image>
            </View>
        )
    }

    extractItems = ({ item }) => {
        return (

            <TouchableOpacity
                style={[styles.container,
                {
                    borderRadius: 7,
                }]}
                onPress={() => this.props.navigation.navigate('Exp')}
            //  onPress={() => this.props.navigation.navigate('Foodetails', { textId: item.text, imgId: item.img, infoId: item.info })}
            //='#111111'
            >
                <View styles={{ flex: 4 }}>
                    <Image
                        style={styles.img}
                        source={{ uri: item.img }}
                    />
                    <Text style={styles.text}>
                        {item.id}
                    </Text>
                    <Text style={styles.text}>
                        {item.text}
                    </Text>
                    <Like
                        onPress={() => null}
                    />
                </View>
            </TouchableOpacity >

        )
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#ffffff' }}>
                <StatusBar hidden />
                <FlatList
                    style={styles.containers}
                    data={Ad}
                    renderItem={this.takeItems}
                    keyExtractor={this.take}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
                <FlatList
                    style={styles.container}
                    data={Data}
                    renderItem={this.extractItems}
                    keyExtractor={this.takeKey}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                // numColumns={3}
                />
                <Text style={styles.text}>Top choice</Text>
                <FlatList
                    style={styles.container}
                    data={Data}
                    renderItem={this.extractItems}
                    keyExtractor={this.takeKey}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
                <BackButton
                    onPress={() => this.props.navigation.goBack()}
                />
            </ScrollView >
        )
    }
}


const styles = StyleSheet.create({
    containers: { flex: 1 },
    container: {
        marginTop: 15,
        marginHorizontal: 5,
        flex: 1,
        elevation: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    detail: {
        width: 200,
        height: 70,
        backgroundColor: '#f7f7f7',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7

    },
    img: {
        height: 150,
        width: 200,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    }
});

