import React,
{ Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component{

    render(){
        return(
            <View style={styles.Container}>
                <Icon.Button
                name= "bars"
                size={26}
                color="#000000"
                backgroundColor="#0000"
                onPress={this.props.onPress}
                />                
            </View>
        );
    }
}

Header.propTypes={
    onPress:PropTypes.func.isRequired,
}

Header.defaultPropTypes={
    icon:'md-menu',
};

const styles=StyleSheet.create({
    Container:{
    
        top:15,
        left:9,
    
        position:'absolute'
    }
});