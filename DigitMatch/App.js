import React from 'react';
import { View } from 'react-native';
import LevelList from './src/components/HomeScreen/LevelList';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LevelList screen={this}/>
      </View>
    );
  }
};