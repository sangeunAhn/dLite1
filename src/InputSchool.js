import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';

export default class InputSchool extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header} />

        {/* 학교입력 */}
        <View style={styles.title}>
          <Text style={styles.codeInput}>학교입력</Text>
          <TextInput
              style={styles.input}
              placeholder={"학교명"}
              placeholderTextColor={"#999"}
              returnKeyType={"done"}
              autoCorrect={false}
              underlineColorAndroid={"transparent"}
            />
        </View>


        <View style={styles.content}/>

        {/* 확인버튼 */}
        <View style={styles.footer}>
          <ConfirmButton 
            title={'확인'}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'10%',
    // backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'30%',
    // backgroundColor: '#9aa9ff'
  },
  content: {
    flex: 1,
    // backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:150,
    // backgroundColor: '#1ad657',
    paddingTop: 40,
    paddingBottom: 40
  },
  input: {
    padding: 7,
    borderColor: "#32B8FF",
    borderWidth: 1,
    fontSize: 17,
    marginTop:7
  },
  codeInput: {
      fontSize: 17,
      color:"#32B8FF"
  }
});