import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#333333',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: 100,
        paddingBottom: 5,
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold'
    }
};

export default Header;