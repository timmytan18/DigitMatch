import React from 'react';
import { FlatList, View, Text, Button } from 'react-native';
import NumberBlock from '../NumberBlock';
import CoordinateGrid from './CoordinateGrid';

export default class LevelGrid extends React.Component {

    render() {
        let colors = ['#FFFF66', '#FFDB4D', '#FF9933', '#FF6600', '#FF0000', '#990000', '#FFFF33']
        const styles = {
            containerStyle: {
                flex: 1,
                backgroundColor: colors[this.props.num - 1],
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                alignContent: 'center',
                borderRadius: 10,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10
            },
            textStyle: {
                fontSize: 30,
                fontWeight: 'bold'
            }
        };

        return (
            <View style={styles.containerStyle}>
                <View style={styles.containerStyle}>
                    <CoordinateGrid levelNum={ this.props.levelNum }>
                        
                    </CoordinateGrid>
                </View>
            </View>
        );
    } 
}