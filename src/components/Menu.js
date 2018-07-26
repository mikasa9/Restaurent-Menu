import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, Text, StatusBar, TouchableOpacity } from 'react-native';
import BackButton from './BackButton';
import Like from './Like'

const Ad =
    [{ i: '1', img: 'https://i.imgur.com/eWeLsAY.png' },
    { i: '2', img: 'http://longwallpapers.com/Desktop-Wallpaper/food-wallpapers-photo-For-Desktop-Wallpaper.jpg' },
    { i: '3', img: 'https://qph.ec.quoracdn.net/main-qimg-c10ec9920a42a9ec7a3e661460909af4.webp' },
    { i: '4', img: 'https://d30v2pzvrfyzpo.cloudfront.net/images/chains/burgerking-opengraph-1.jpg' },
    ]

const Data =
    [{ id: '1', img: 'https://i.imgur.com/BSHCWgH.jpg', text: 'Rice cakes', info: 'A rice cake may be any kind of food item made from rice that has been shaped, condensed, or otherwise combined into a single object that has also been sweetened' },
    { id: '2', img: 'https://i.imgur.com/hkdXSKi.gif', text: 'Salad', info: ' Chopped chicken; therein, flavored with and styled by Chinese culinary ingredients and techniques' },
    { id: '3', img: 'https://i1.wp.com/40.media.tumblr.com/ea08c98799ab49a53c3a861a975c548f/tumblr_nvp7kb87Mn1t2rr2bo1_1280.png', text: 'Sweet', info: ' Gangjeong is a traditional confectionery that is often featured on special occasions such as ancestral rites or banquets.' },
    { id: '4', img: 'https://qph.ec.quoracdn.net/main-qimg-49c794a673c7977a888160eee137f67d.webp', text: 'Salad 2', info: 'In a blender, combine the minced onion, peanut oil, rice vinegar, water, ginger, celery, ketchup, soy sauce, sugar, lemon juice, garlic, salt and pepper ' },
    { id: '5', img: 'https://itadakimasuanime.files.wordpress.com/2015/07/insalata-frittata-shokugeki-no-souma-13-02.png', text: 'Barbeque', info: 'Korean cuisine of grilling meat, typically beef, pork, or chicken' },
    { id: '6', img: 'https://i.imgur.com/c4J081W.jpg', text: 'Meat Soup', info: 'Tofu and Wakame Seawood Miso Soup is a Japanese all-star recipe.The standard combination: miso soup with tofu and wakame seaweed garnished with chopped green onions' },
    { id: '7', img: 'https://i.imgur.com/U3hHujX.jpg', text: 'Cup Cakes', info: '' },
    { id: '8', img: 'https://i.imgur.com/aJbSPxN.jpg', text: 'Sushi', info: 'A Japanese dish of specially prepared vinegared rice, usually with some sugar and salt, combined with a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits' },
    { id: '9', img: 'https://i.imgur.com/xYGi3vx.png', text: 'Meat and Rice', info: 'Gimbap is a Korean dish made from cooked rice and other ingredients that are rolled in gim—dried sheets of laver seaweed—and served in bite-sized slices.' },
    { id: '10', img: 'https://i.imgur.com/eFT4WWY.png', text: 'Stew pot', info: 'A one-pot dish with thinly sliced beef and assorted vegetables cooked or simmered in a sweet soy sauce based broth' },
    { id: '11', img: 'https://i.imgur.com/fVoNWWK.jpg', text: 'Meal', info: 'Prepared with a simmering pot of soup stock at the dining table, containing a variety of East Asian foodstuffs and ingredients' },
    { id: '12', img: 'https://i.imgur.com/eWeLsAY.png', text: 'Ramen', info: 'It consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, dried seaweed, menma, and green onions.' },
    ]

export default class Menu extends Component {
    takeKey = ({ id }) => id
    take = ({ i }) => i
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
        console.log(item);
        return (
            <TouchableOpacity
                style={[styles.container, { borderRadius: 7 }]}
                onPress={() => this.props.navigation.navigate('Foodetails', { textId: item.text, imgId: item.img, infoId: item.info })}
            >
                <View
                    style={{ height: 150, width: 200, borderTopLeftRadius: 7, borderTopRightRadius: 7 }}
                >
                    <Image
                        style={{ height: 150, width: 200, borderTopLeftRadius: 7, borderTopRightRadius: 7 }}
                        source={{ uri: item.img }}
                    />
                </View>

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
                    keyExtractor={this.take}
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

