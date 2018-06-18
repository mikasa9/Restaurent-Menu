import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';



export default class Details extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={styles.img}
                    source={{ uri: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/89f5f4cb-5688-4bd9-8991-559b8c73a276.jpg' }}
                >
                </Image>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
    }
})