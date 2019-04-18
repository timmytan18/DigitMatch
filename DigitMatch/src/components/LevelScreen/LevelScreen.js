import React from 'react';
import { View, AsyncStorage } from 'react-native';
import StatsBlock from './StatsBlock';
import CoordinateGrid from './CoordinateGrid';

export default class LevelScreen extends React.Component {

    constructor(props) {
      super(props);
      const levelNum = props.navigation.getParam('levelNum', 'null');
      let titles = ['LEVEL 1', 'LEVEL 2', 'LEVEL 3', 'LEVEL 4', 'LEVEL 5', 'LEVEL 6'];
      this.state = { resetPressed: false, moves: 0, best: '∞' };
      props.navigation.setParams({ levelName: titles[levelNum] });
    }

    storeData = async () => {
      try {
          await AsyncStorage.setItem('best', this.state.best);
      } catch (error) {
          console.warn('Error saving data')
      }
    }

    static navigationOptions =  ({ navigation }) => {
      return {
        title: navigation.getParam('levelName'),
        headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 30,
            fontWeight: 'bold'
        },
        headerStyle: {
            backgroundColor: '#333333',
            height: 70,
            paddingBottom: 5,
        }
      };
    };

    changeState() {
      this.setState({ resetPressed: true })
    }

    render() {
      const levelNum = this.props.navigation.getParam('levelNum', 'null');
      const color = this.props.navigation.getParam('color', 'null');

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFB3' }}>
          <CoordinateGrid levelNum={String(levelNum + 1)} color={color} parent={this}/>
          <StatsBlock 
          resetBtnPressed={ () => this.changeState() }
          moves={this.state.moves}
          best={this.state.best}
          />
        </View>
      );
    }  
}