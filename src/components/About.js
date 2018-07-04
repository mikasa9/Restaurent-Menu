import React from 'react';
import { TextInput, StyleSheet, Text, View, FlatList } from 'react-native';

const Places = [{ id: '1', place: 'tokyo' },
{ id: '2', place: 'shinjuku' },
{ id: '3', place: 'nagasaki' },
{ id: '4', place: 'seoul' },
{ id: '5', place: 'jeju' },
{ id: '6', place: 'Gangnam' },
{ id: '7', place: 'busan' },
{ id: '8', place: 'kyoto' },
{ id: '9', place: 'osaka' },
{ id: '10', place: 'yokohama' },
]




export default class About extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            fullDataList: Places,
            filteredDataList: Places
        }


    }
    getEmail = (email) => {
        this.setState({ email })
    }

    search = (location) => {
        let l = location.toLowerCase()
        let fullList = this.state.fullDataList
        let filteredList = fullList.filter((item) => {
            if (item.place.toLowerCase().match(l))
                return item
        })
        if (!l || l ==='') {
            this.setState({
                filteredList:fullList
            })
        } else if (!filteredList.length) {
            this.setState({
                filteredList:[]
            })
        }
        else if (Array.isArray(filteredList)) {
            this.setState({
                filteredList
            })
        }
    }


    takeKey = ({ id }) => id;

    extractItems = ({ item }) => {
        return (
            <View style={{ flex: 1.5, }}>
                <Text style={{fontSize:30}}>
                    {item.place}
                </Text>
            </View>
        );
    }


    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TextInput
                    style={styles.input}
                    editable={true}
                    onChangeText={this.search}
                    placeholder={'e-mail'}
                    underlineColorAndroid="transparent"
                />
                <FlatList
                    style={styles.container}
                    data={this.state.filteredList}
                    renderItem={this.extractItems}
                    keyExtractor={this.takeKey}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
})