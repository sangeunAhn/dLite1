import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import ConfirmButtonN from '../components/ConfirmButtonN';


export default class PhoneNumber extends React.Component {

  constructor(props){
    super(props);
    this.state={
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

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.title}>
            <Text style={styles.text}>동아리원 모집을 위해 회장님의 전화번호가 공개됩니다.</Text>
            <Text style={styles.text}>전화번호는 최초 1회만 입력하시면 됩니다.</Text>
           
           <TextInput
                style={styles.input}
                
                keyboardType='numeric'
                placeholder={"전화번호"}
                placeholderTextColor={"#999"}
                maxLength={15}
                onChangeText={this._updateCount.bind(this)}
                 
                onChangeText={(value) => this.setState({value})}
            />
        </View>
        </TouchableWithoutFeedback>

        <View style={styles.content}/>
        
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
    flexDirection: "column",
    alignItems:"center"
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
    width:'100%',
    padding: 7,
    borderColor: "#32B8FF",
    borderWidth: 1,
    fontSize: 17,
    marginTop:13
  },
  text: {
      fontSize: 13,
      color:"#c8c8c8"
  }
});