import React,
{ Component } from 'react';
import {
    Image,
    View
} from 'react-native';


export default class Screen1 extends Component {
    render() {
        return (
            <Image
                style={{flex:1}}
                source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/back_pic/03/86/14/5557ce5e35973aa.jpg' }} />
        )
    }
}
