import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class StatsBlock extends React.Component {
    render() {
        return (
          <View style={styles.containerStyle}>
            <View style={{flexDirection: "row"}}>
              <MovesBlock moves={this.props.moves}/>
              <BestBlock best={this.props.best}/>
            </View>
            <ResetButton resetBtnPressed={this.props.resetBtnPressed}/>
          </View>
        );
      } 
}

class MovesBlock extends React.Component {
  render() {
    return (
      <View style={styles.movesStyle}>
        <Text style={styles.textStyle}>
          MOVES: {this.props.moves}
        </Text>
      </View>
    );
  }
}

class BestBlock extends React.Component {
  render() {
    return(
      <View style={styles.bestStyle}>
          <Text style={styles.textStyle}>
            BEST: {this.props.best}
          </Text>
      </View>
    );
  }
}

class ResetButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.resetBtnPressed}
        style={styles.resetStyle}>
        <Text style={styles.buttonTextStyle}>
          RESET
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
      backgroundColor: '#FFFFB3',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  buttonTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0066FF'
  },
  movesStyle: {
      flex: 1,
      backgroundColor: '#333333',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginLeft: 30,
      borderRadius: 10,
      borderWidth: 0,
      height: 50,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 5,
      marginBottom: 10
  },
  bestStyle: {
    flex: 1,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 30,
    borderRadius: 10,
    borderWidth: 0,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
    marginBottom: 10
},
  resetStyle: {
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 30,
    borderRadius: 10,
    borderWidth: 0,
    height: 75,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
}
};