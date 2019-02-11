import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import { Entypo } from '@expo/vector-icons';

export default class ClubSearch extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {/* 동아리 찾기 */}
        <View style={styles.header}>

            <Entypo name="magnifying-glass" size={35} color="#0A6EFF" />

            <TextInput
                style={styles.input}
                placeholder={"동아리 명"}
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
    flexDirection: 'row',
    alignItems:'flex-end',
    paddingLeft:5,
    borderBottomWidth:1,
    borderColor: '#c8c8c8'
    // backgroundColor: '#ff9a9a',
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
    paddingBottom: 10
  },
  input: {
    flex:1,
    padding: 10,
    fontSize: 20,
    marginTop:7,
    marginLeft:5
  }
});