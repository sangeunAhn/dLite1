import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import ConfirmButtonN from '../components/ConfirmButtonN';

export default class codeConfirm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
      };
  }


  _updateCount(){
    this.setState({
      count:this.state.count+1
    });
  }

  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.container}>
        <View style={styles.header} />

        {/* 코드입력부분 */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.title}>
          <Text style={styles.codeInput}>코드입력</Text>
          <TextInput
              style={styles.input}
              placeholder={"발부받은코드를 입력하세요."}
              placeholderTextColor={"#999"}
              returnKeyType={"done"}
              autoCorrect={false}
              underlineColorAndroid={"transparent"}
               
              onChangeText={(value) => this.setState({value})}
            />
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.content}/>

        {/* 확인 버튼 */}
        <View style={styles.footer}>
        {(this.state.value.length==0 )?<ConfirmButtonN title={'확인'}/>:<ConfirmButton title={'확인'}/> }
          
        </View>
      </View>
      </KeyboardAvoidingView>
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