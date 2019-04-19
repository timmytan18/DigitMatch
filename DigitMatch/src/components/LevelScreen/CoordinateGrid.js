import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

// Create custom game for each level
export default class CoordinateGrid extends React.Component {
    constructor(props) {
        super(props);
        const numberList = this.resetCoordinateGrid();
        this.state = {views: [], numbers: numberList}
    }

    resetCoordinateGrid() {
        const numberList = [];
        const rowColNum = levelViews[this.props.levelNum - 1].rowCol.num
        num = Math.floor(Math.random() * 4) + 1;
        numberList[0] = num;
        for (let i = 1; i < rowColNum * rowColNum; i++) {
            numberList[i] = Math.floor(Math.random() * 4) + 1;
        }
        indexOne = levelViews[this.props.levelNum - 1].data[0];
        indexTwo = levelViews[this.props.levelNum - 1].data[1];
        while (numberList[indexOne] == numberList[indexTwo]) {
            numberList[indexOne] = Math.floor(Math.random() * 4) + 1;
        }
        return numberList;
    }

    componentWillUpdate() {
        if (this.props.parent.state.resetPressed == true) {
            numberList = this.resetCoordinateGrid();
            this.setState({ numbers: numberList })
            this.props.parent.setState({ resetPressed: false });
        }
    }

    componentWillReceiveProps() {
        const levelNum = this.props.levelNum
        dataLength = levelViews[levelNum - 1].data.length
        win = true;
        const indexes = levelViews[levelNum - 1].data;
        for (let i = 1; i < dataLength; i++) {
            if (this.state.numbers[indexes[i]] != this.state.numbers[indexes[i - 1]]) {
                win = false
            }
        }
        if (win) {
            this.updateWin();
        }
    }

    incrementAdjacent(indexesToIncrement) {
        updatedViews = [];
        updatedNumbers = this.state.numbers;
        for (let i = 0; i < this.state.views.length; i++) {
            if (indexesToIncrement.includes(i)) {
                updatedNumbers[i] = updatedNumbers[i] > 3 ? 1 : updatedNumbers[i] + 1
            }
        }
        this.setState({ numbers: updatedNumbers })
        return updatedViews;
    }

    static getIndexesToIncrement(index, rowColNum) {
        indexes = [index];
        let gridSize = rowColNum * rowColNum;
        if (index + rowColNum < gridSize) {
            indexes.push(index + rowColNum)
        }
        if (index - rowColNum > -1) {
            indexes.push(index - rowColNum)
        }
        if (index % rowColNum == 0) {
            indexes.push(index + 1)
        } else if ((index + 1) % rowColNum == 0 && index > rowColNum - 2 && index + 1 < gridSize) {
            indexes.push(index - 1)
        } else {
            indexes.push(index + 1)
            indexes.push(index - 1)
        }
        return indexes;
    }

    showAlert = () => {
        Alert.alert(
           'YOU WON!',
            '',
            [
              {text: 'Continue', onPress: () => console.log('OK Pressed'), style: 'cancel'},
            ],
            {cancelable: false},
        );
    }

    updateWin() {
        numMoves = this.props.parent.state.moves
        numBest = this.props.parent.state.best
        if (numBest == '∞') {
            numBest = Number.POSITIVE_INFINITY;
        }
        if (numBest > numMoves) {
            this.props.parent.setState({best: numMoves})
        }
        this.props.parent.setState({moves: 0})
        this.showAlert()
        numberList = this.resetCoordinateGrid();
        this.setState({ numbers: numberList })
    }

    renderItems(levelNum, rowColNum, blockStyle) {
        for (let i = 0; i < rowColNum * rowColNum; i++) {
            if (levelViews[levelNum - 1].data.includes(i)) {
                this.state.views[i] = {
                    data:
                        <TouchableOpacity 
                            style={blockStyle}
                            onPress = { () => {
                                this.setState({views: this.incrementAdjacent(CoordinateGrid.getIndexesToIncrement(i, rowColNum))})
                                this.props.parent.setState({moves: this.props.parent.state.moves + 1}) 
                            }}>
                            <Text style={styles.textStyle}>
                                {this.state.numbers[i]}
                            </Text>
                        </TouchableOpacity>,
                    key: i
                }
            } else {
                this.state.views[i] = { 
                    data:
                    <View/>,
                    key: i
                }
            }
        }
    }

    render() {
        const levelNum = this.props.levelNum
        const rowColNum = levelViews[levelNum - 1].rowCol.num
        const rowColDim = levelViews[levelNum - 1].rowCol.dim
        const renderStyles = {
            containerStyle: {
                flex: 1,
                backgroundColor: this.props.color,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                borderRadius: 10,
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10
            },
            blockStyle: {
                flex: -1,
                flexshrink: 1,
                backgroundColor: '#A6A6A6',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                height: rowColDim,
                width: rowColDim,
                borderRadius: 10,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
            }
        }

        this.renderItems(levelNum, rowColNum, renderStyles.blockStyle)

        return (
            <View style={renderStyles.containerStyle}>
                <FlatGrid
                    itemDimension={rowColDim}
                    scrollEnabled={false}
                    items={this.state.views}
                    contentContainerStyle={styles.gridStyle}
                    renderItem={({ item }) =>
                        <View>{item.data}</View>
                    }
                />
            </View>
        );
    }
}

const rowColNumList = [{num: 3, dim: 95},
                        {num: 4, dim: 65},
                        {num: 5, dim: 50}];
const levelViews = [{ data: [3, 4, 5], rowCol: rowColNumList[0], key: 1 },
                    { data: [10, 11, 12, 13, 14], rowCol: rowColNumList[2], key: 2 },
                    { data: [5, 6, 9, 10], rowCol: rowColNumList[1], key: 3 },
                    { data: [1, 2, 5, 6, 9, 10], rowCol: rowColNumList[1], key: 4 },
                    { data: [0, 1, 2, 3, 4, 5, 6, 7, 8], rowCol: rowColNumList[0], key: 5 },
                    { data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], rowCol: rowColNumList[1], key: 6 }];

const styles = {
    gridStyle: {
        flex: 1,
        backgroundOpacity: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0066FF'
    }
};