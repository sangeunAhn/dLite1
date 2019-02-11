import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class RecordFalse extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
            <View style={styles.false}>
                <Text style={styles.text1}>*최소 3개이상 작성하셔야 합니다.</Text>
                <Text style={styles.text2}>완료</Text>
            </View>

    )
  }
}

const styles = StyleSheet.create({
    false:{
        flex:1,
        backgroundColor:'#d2d2d2',
        alignItems:'center'
    },
    text1:{
        fontSize:15,
        padding:5,
        color: 'red'
    },
    text2:{
        fontSize:18,
        color:'#828282'
    }
});