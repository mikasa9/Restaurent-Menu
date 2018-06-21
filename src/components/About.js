import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, Text, StatusBar, TouchableOpacity } from 'react-native';
import BackButton from './BackButton';
import Like from './Like'
const Ad = [{ id: '1', img: 'https://i.imgur.com/eWeLsAY.png' },
{ id: '2', img: 'http://longwallpapers.com/Desktop-Wallpaper/food-wallpapers-photo-For-Desktop-Wallpaper.jpg' },
{ id: '3', img: 'https://qph.ec.quoracdn.net/main-qimg-c10ec9920a42a9ec7a3e661460909af4.webp' },
{ id: '4', img: 'https://d30v2pzvrfyzpo.cloudfront.net/images/chains/burgerking-opengraph-1.jpg' },
]

const Data = [{ id: '1', img: 'https://i.imgur.com/BSHCWgH.jpg', text: 'rice cakes' },
{ id: '2', img: 'https://i.imgur.com/hkdXSKi.gif', text: 'salad' },
{ id: '3', img: 'https://i1.wp.com/40.media.tumblr.com/ea08c98799ab49a53c3a861a975c548f/tumblr_nvp7kb87Mn1t2rr2bo1_1280.png', text: 'sweet' },
{ id: '4', img: 'https://qph.ec.quoracdn.net/main-qimg-49c794a673c7977a888160eee137f67d.webp', text: 'salad2' },
{ id: '5', img: 'https://itadakimasuanime.files.wordpress.com/2015/07/insalata-frittata-shokugeki-no-souma-13-02.png', text: 'barbeque' },
{ id: '6', img: 'https://i.imgur.com/c4J081W.jpg', text: 'meat soup' },
{ id: '7', img: 'https://i.imgur.com/U3hHujX.jpg', text: 'cup cakes' },
{ id: '8', img: 'https://i.imgur.com/aJbSPxN.jpg', text: 'sushi' },
{ id: '9', img: 'https://i.imgur.com/xYGi3vx.png', text: 'meat and rice' },
{ id: '10', img: 'https://i.imgur.com/eFT4WWY.png', text: 'stewpot' },
{ id: '11', img: 'https://i.imgur.com/fVoNWWK.jpg', text: 'meal' },
{ id: '12', img: 'https://i.imgur.com/eWeLsAY.png', text: 'ramen' },
]

export default class About extends Component {
    takeKey = ({ id }) => id
    takeItems = ({ item }) => {
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
                style={[styles.container, { borderRadius: 7 }]}
            >
                <Image
                    style={{ height: 150, width: 200, borderTopLeftRadius: 7, borderTopRightRadius: 7 }}
                    source={{ uri: item.img }} />

                <View style={styles.detail}>
                    <Text style={styles.text}>
                        {item.id}
                    </Text>
                    <Text style={styles.text}>
                        {item.text}
                    </Text>
                </View>
                <Like
                    onPress={() => null}
                />

            </TouchableOpacity>
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
                    keyExtractor={this.takeKey}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
                <View style={styles.container}>
                    <FlatList
                        style={styles.container}
                        data={Data}
                        renderItem={this.extractItems}
                        keyExtractor={this.takeKey}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
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
                </View>
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
        elevation: 3,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    detail: {
        width: 200,
        height: 70,
        backgroundColor: '#f7f7f7',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7

    },

});

