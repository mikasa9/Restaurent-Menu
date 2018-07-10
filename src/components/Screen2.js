import React,
{Component} from 'react';
import {Image} from 'react-native';


export default class Screen2 extends React.Component{
render(){
    return(
        <Image
        style={{flex:1}}
        source={{uri:'https://i.pinimg.com/originals/16/ed/25/16ed25195dff2d891da215c28cc75fba.jpg'}}/>
    )
}
}
