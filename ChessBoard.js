import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  const board = [];

  for (let r = 0; r < 8; r++) { // no. of iteration will be 8 because board is of 8x8
    const cols = [];

    for (let c = 0; c < 8; c++) {
      const backgroundColor = (r + c) % 2 === 0 ? 'white' : 'black'; //color of sqr wll be white if value is even otherwise black

      
      cols.push(
        //this View element for sqr of chessboard
        <View
        // key attribute will keep track of each sqr based on row & col
          key={`${r},${c}`} //combines row & col numbers into a string, comma separated
          style={[
            styles.square,
            { backgroundColor, width:80, height:80 } // each square of 80 width & heigth
          ]}
        />,
      );
    }

    // Adds each row to the chessboard
    board.push(<View key={r} style={styles.row}>{cols}</View>);
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
