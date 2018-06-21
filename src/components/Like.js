import React,
{ Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Like extends Component {
    constructor(props) {
        super(props)
        this.state = { color: '#f7f7f7' }
    }
    onLike = () => {
        if (this.state.color == '#f7f7f7') {
            this.setState({ color: '#dc143c' })
            this.props.onPress;
        }
        else {
            this.setState({ color: '#f7f7f7' })
            this.props.onPress;
        }

    }

    render() {
        return (
            <View style={styles.Container}>
                <Icon.Button
                    name="heart"
                    size={26}
                    color={this.state.color}
                    backgroundColor="#0000"
                    onPress={this.onLike}
                />
            </View>
        );
    }
}

Like.propTypes = {
    onPress: PropTypes.func.isRequired,
}

Like.defaultPropTypes = {
    icon: 'heart',
};

const styles = StyleSheet.create({
    Container: {

        top: 15,


        position: 'absolute'
    }
});