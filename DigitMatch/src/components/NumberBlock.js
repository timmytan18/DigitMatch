import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class NumberBlock extends React.Component {
    state = {num: Math.floor(Math.random() * 4) + 1}
    updateState = () => this.setState({ num: this.state.num > 3 ? 1 : this.state.num + 1 })
    render() {
        return (
            <TouchableOpacity 
                style={this.props.style}
                onPress = {this.updateState} >
                <Text style={styles.textStyle}>
                    {this.state.num}
                </Text>
            </TouchableOpacity>
        );
    } 
}