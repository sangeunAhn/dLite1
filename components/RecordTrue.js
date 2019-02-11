import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default class RecordTrue extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
            <TouchableOpacity style={styles.true}>
                <Text style={styles.text1}>완료</Text>
            </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
    true:{
        flex:1,
        backgroundColor:'#1478FF',
        alignItems:'center',
        justifyContent: 'center'
    },
    text1:{
        fontSize:25,
        color:'#fff',
        fontWeight:'700'
    }
});