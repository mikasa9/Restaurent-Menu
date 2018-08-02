import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Animated
} from 'react-native';
import { Ans } from './Answer';

export default class Anime extends Component {
    take = ({ id }) => id;

    constructor(props) {
        super(props)
        this.state = { pressIndex: false };

    }

    onPress = (i) => {
        if (this.state.pressIndex != true) {
            Ans[0].totalResponses = Ans[0].totalResponses + 1;
            Ans[0].answers[i].answerCount = Ans[0].answers[i].answerCount + 1
        }
        this.setState({ pressIndex: !this.state.pressIndex });
    }


    items = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => this.onPress(index)}>
                <View
                    style={{ height:95}}>
                    <Text
                        style={styles.optionStyle}>
                        {item.answer}
                    </Text>
                    <View style={styles.ansbg}>
                    <View/>
                    {this.state.pressIndex ?
                        <Text
                            style={styles.response}
                        >
                            {item.answerCount}/{Ans[0].totalResponses}
                        </Text> : null}</View>
                </View>
            </TouchableOpacity>
        )
    }

    takeItems = ({ item }) => {
        return (
            <View style={[styles.card]}>
                <Text style={styles.questionStyle}>{item.question}</Text>
                <FlatList
                    data={Ans[0].answers}
                    renderItem={this.items}
                    extraData={this.state.pressIndex}
                />
            </View>
        )
    }

    render() {
        return (
            <View
                style={[styles.container]}
            >
                <FlatList
                    data={Ans}
                    renderItem={this.takeItems}
                    keyExtractor={this.take}
                    showsHorizontalScrollIndicator={false}
                    extraData={this.state.pressIndex}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 15,
        marginHorizontal: 10,
        padding: 10
    },
    questionStyle: {
        fontSize: 35,
        color: 'black'
    },
    optionStyle: {
        fontSize: 20,
        color: 'black',
        padding: 5,
        marginTop:5
    },
    response: {
        fontSize: 20,
        color: 'black',
       // margin: 3,
    },
    ansbg:{
        backgroundColor:'#F5F4F6',
        borderRadius:15,
        alignItems:'flex-end',
        justifyContent:'center'
    }
})