import React, { Component } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    ScrollView,
    Text,
    Dimensions
} from 'react-native';;

const width = Dimensions.get('screen').width
const expandedHeight = 300;
const collapsedHeight = 60;
export default class Settings extends Component {
    constructor() {
        super()
        this.state = { animatedValue: new Animated.Value(0) }
    }

    render() {
        const headerHeight = this.state.animatedValue.interpolate({
            inputRange: [0, expandedHeight - collapsedHeight],
            outputRange: [expandedHeight, collapsedHeight],
            extrapolate: 'clamp'
        })
        return (
            <View
                style={styles.container}>
                <Animated.Image style={{
                    height: headerHeight,
                    resizeMode: 'contain',
                    width: width,
                    top: 0,
                    left: 0
                }}
                    source={
                        { uri: 'http://strongertogether.coop/sites/default/files/styles/article_node/public/wp-content/uploads/2013/02/Traditional_Asian_Food_Flavorful_Healthful_0.jpg?itok=DNpSK8Zg' }}
                />
                <ScrollView
                    contentContainerStyle={styles.containerScroll}
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: {
                                y: this.state.animatedValue
                            }
                        }
                    }])}
                    scrollEventThrottle={16}>
                    <Text
                        style={styles.txt}
                    >For some people food is just a necessity to satisfy basic needs,
                                         for the others food is more than just a basic necessity,
                                         but a pleasure that plays a significant role in their understanding of happiness.
                                         There are so many different cuisines and food preferences built by cultural and ethnical backgrounds
                                        ,geographical locations and social classes.
                                        Food can tell us a lot about the history and traditions of various nations and regions.
                                        Meat eating habits, herbs and crops – everything makes its contribution to the traditional cuisine and culture.
                                        India is a land of spices, Africa is a continent of sauces,
                                        Europe discloses esthetical beauty of food and opens up new
                                        oportunities and inventions for those who value and enjoy eating.
                                        Eating habits change over time and follow climate, cultural and other
                                        transformations that determined the evolution of the communities and other social cells.
                                        Changes in the way people serve the table,evolution of European and Asian business etiquette,
                                        food preferences according to the surveys in different countries and other elements that allow
                                        measuring and analysing the evolution of food help us understand the history.
                                        Some of the recipes we keep through generations and these old traditions and
                                        knowledge are the only untouchable aspects that people try to bring with them.
                                        With globalization and exchange of knowledge between different countries, food
                                        becomes more accessible and now we have an opportunity to try and investigate
                                        various fruits and vegetables from different corners of the world.
                                        Transportation facilities made it possible to develop food trade and
                                        there are almost no borders that could limit English people from trying
                                        Indian or Chinese food. Other factor that spread and mix food preferences
                                        around the world are immigration and ethnical minorities that inevitably
                                        widen knowledge of local population about various cuisines.
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txt: {
        fontSize: 24
    },
    containerScroll: {
        padding: 15
    }
})