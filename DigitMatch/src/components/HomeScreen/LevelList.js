import React from 'react';
import { FlatList, View } from 'react-native';
import LevelBlocks from './LevelBlocks';
import LevelScreen from '../LevelScreen/LevelScreen';
import { createAppContainer, createStackNavigator } from 'react-navigation';

export default class LevelList extends React.PureComponent {
    render () {
        return <AppContainer/>
    }
}

// Create screen for list of LevelBlocks
class LevelListScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'LEVELS',
        headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 30,
            fontWeight: 'bold'
        },
        headerStyle: {
            backgroundColor: '#333333',
            height: 70,
            paddingBottom: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 2,
        }
    };

    render() {
        let levels = ['1', '2', '3', '4', '5', '6'];
        let colors = ['#FFFF66', '#FFDB4D', '#FF9933', '#FF6600', '#FF0000', '#990000', '#FFFF33']
        let lvlBlocks = [];
        for (let i = 0; i < levels.length; i++) {
            lvlBlocks[i] = {data: <LevelBlocks onPress={() =>
                this.props.navigation.navigate('Level', {
                    levelNum: i,
                    color: colors[i]
                })}
                level={i}
                color={colors[i]}/>,
                key: levels[i]}
        }
        
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFB3', 
            justifyContent: 'center', alignItems: 'center' }} >
                <FlatList
                    data={lvlBlocks}
                    renderItem={
                        ({item}) => <View>{item.data}</View>
                    }
                    numColumns={ 2 }
                />
            </View>
        );
    }
};

const AppNavigator = createStackNavigator({
    LevelList: { screen: LevelListScreen },
    Level: { screen: LevelScreen }
});

const AppContainer = createAppContainer(AppNavigator);
