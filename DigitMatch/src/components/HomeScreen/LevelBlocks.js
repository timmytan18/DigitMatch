import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Create a view for level block
export default class LevelBlocks extends React.Component {

    render() {
        let level = this.props.level
        const styles = {
            container: {
                flex: 1,
                backgroundColor: this.props.color,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                borderRadius: 10,
                borderWidth: 0,
                height: 150,
                width: 150,
                marginTop: 15,
                marginLeft: 10,
                marginRight: 10
            },
            textStyle: {
                fontSize: 30,
                fontWeight: 'bold'
            }
        };
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={this.props.onPress}>
                <Text style={styles.textStyle}>
                    { level + 1 }
                </Text>
            </TouchableOpacity>
        );
    }
};