import React,
{ Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BackButton extends Component{

    render(){
        return(
            <View style={styles.Container}>
                <Icon.Button
                name= "arrow-left"
                size={26}
                color="#000000"
                backgroundColor="#0000"
                onPress={this.props.onPress}
                />                
            </View>
        );
    }
}

BackButton.propTypes={
    onPress:PropTypes.func.isRequired,
}

BackButton.defaultPropTypes={
    icon:'arrow-left',
};

const styles=StyleSheet.create({
    Container:{
    
        top:15,
        left:9,    
        position:'absolute'
    }
});