import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Ans } from './Answer';

let i = 0;
export default class Anime extends Component {
    take = ({ id }) => id;

    constructor(props) {
        super(props)
        this.state = { pressIndex: false };
    }
    showitem = (response,i) => {
        if (this.state.pressIndex != true){
            Ans[0].totalResponses = response + 1;
           console.log(i) ;
        }            
        this.setState({ pressIndex: !this.state.pressIndex });
    }

    nesteData = (items, response) => {
        let a = []
        for (i = 0; i < items.length; i++) {
            a.push(<TouchableOpacity
                onPress={() => this.showitem(response,i)}>
                <Text style={styles.optionStyle}>{items[i].answer}</Text>
                <Text>{this.state.pressIndex ? `${items[i].answerCount}/${response}` : ''}</Text>
            </TouchableOpacity>)
        }
        return a
    }

    takeItems = ({ item }) => {
        return (
            <View style={[styles.card]}>
                <Text style={styles.questionStyle}>{item.question}</Text>
                <View>
                    {this.nesteData(item.answers, item.totalResponses)}
                </View>
            </View>
        )
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <FlatList
                    data={Ans}
                    extraData={this.state.pressIndex}
                    renderItem={this.takeItems}
                    keyExtractor={this.take}
                    showsHorizontalScrollIndicator={false}
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
        marginTop: 10

    }
})