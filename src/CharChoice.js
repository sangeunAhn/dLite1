import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import CharButton from '../components/CharButton';

export default class CharChoice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />

        {/* 제목 */}
        <View style={styles.title}>
            <Text style={styles.text_1}>특징선택</Text>
            <Text style={styles.text_2}>중복 선택 가능</Text>
        </View>

        {/* 샾버튼 모아놓은거 */}
        <View style={styles.content}>
            <CharButton title="#소규모" />
            <CharButton title="#꿀잼" />
            <CharButton title="#대규모" />
            <CharButton title="#편안한 분위기" />
            <CharButton title="#가족같은" />
            <CharButton title="#신나는" />
            <CharButton title="#조용한" />
            <CharButton title="#특이한" />
            <CharButton title="#소통" />
            <CharButton title="#음주가무" />
            <CharButton title="#활동적인" />
            <CharButton title="#야외활동" />
            <CharButton title="#이벤트" />
        </View>

        
        <View style={styles.inputView}>
            {/* 위에 샾버튼 클릭했을 때 생긴 샾버튼 들어가는 곳 */}
            <View>

            </View>

            <TextInput 
                style={styles.input} 
                placeholder={"직접입력"}
                placeholderTextColor={"#32B8FF"}
            />
        </View>


        {/* 완료버튼 */}
        <View style={styles.footer}>
          <ConfirmButton
            style={styles.button}
            title={'선택완료'}/>
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
    height:'5%',
    // backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'5%',
    flexDirection: "row",
    alignItems:"flex-end",
    // backgroundColor: '#9aa9ff',
    paddingLeft: 15
  },
  content: {
    flex: 1,
    // backgroundColor: '#d6ca1a',
    padding:15,
    paddingTop:30,
    flexDirection: "row",
    flexWrap: "wrap"
    
  },
  inputView:{
    width:'100%',
    height:110,
    flexDirection: "row",
    alignItems: "center"
  },
  footer: {
    width:'100%',
    height:100,
    // backgroundColor: '#1ad657',
    paddingTop: 10
  },
  input: {
    width:'100%',
    padding: 10,
    borderColor: "#32B8FF",
    borderWidth: 1,
    fontSize: 17,
    marginTop:13,
    borderRadius: 7
  },
  text_1: {
      fontSize: 25,
      color:"#0A6EFF",
      marginRight:3
  },
  text_2: {
      color: "#aaaaaa"
  }
});