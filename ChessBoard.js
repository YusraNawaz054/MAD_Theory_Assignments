import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  const board = [];

  for (let row = 0; row < 8; row++) { // no. of iteration will be 8 because board is of 8x8
    const columns = [];

    for (let col = 0; col < 8; col++) {
      const backgroundColor = (row + col) % 2 === 0 ? 'white' : 'black'; //color of sqr wll be white if value is even otherwise black

      
      columns.push(
        //this View element for sqr of chessboard
        <View
        // key attribute will keep track of each sqr based on row & col
          key={`${row},${col}`} //combines row & col numbers into a string, comma separated
          style={[
            styles.square,
            { backgroundColor, width:80, height:80 } // each square of 80 width & heigth
          ]}
        />,
      );
    }

    // Adds each row to the chessboard
    board.push(<View key={row} style={styles.row}>{columns}</View>);
    //View element with key attribute based on current row number will be created
    //children of View element are columns array, which contains all the View elements for the squares in the row
}

  return <View style={styles.container}>{board}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  square: {
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default ChessBoard;
