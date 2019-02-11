import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import RecordFalse from '../components/RecordFalse';
import RecordTrue from '../components/RecordTrue';

export default class SignUpRecord extends React.Component {
  render() {
    return (
      <View style={styles.container}>

            {/* '+'버튼 */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>

            {/* 사진들 들어갈 곳 */}
            <View style={styles.content}>
                <ScrollView>

                </ScrollView>
            </View>

            {/* 완료버튼 */}
            <View style={styles.footer}>
                {/* true면 <RecordTrue /> false면 <RecordFalse /> */}
                <RecordTrue />
            </View>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  header:{
      width:'100%',
      height:70,
      // backgroundColor:'#A0AFFF',
      flexDirection:"row",
      justifyContent: "flex-end"
  },
  content:{
    flex: 1
  },
  footer:{
    width: '100%',
    height: 70,
    // backgroundColor: '#5CEEE6',
    borderTopWidth:1
  },
  button:{
      backgroundColor: '#0064FF',
      width:50,
      height:50,
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,
      borderRadius: 50
  },
  text:{
      fontSize: 25,
      color: '#fff'
  }
});