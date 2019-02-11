import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import RRContent from '../components/RRContent';

export default class RecordRegister extends React.Component {
  render() {
    return (
        <View style={styles.container}>

            {/* 밑에 완료버튼 빼고 나머지 화면 스크롤 */}
            <ScrollView style={styles.scroll}>

                {/* 맨 위 활동 내용 적는 곳 */}
                <View style={styles.header}>
                    <TextInput 
                        style={styles.titleInput}
                        placeholder={"활동 내용"}
                        placeholderTextColor={"#fff"}
                    />           
                </View>

                {/* 사진 넣는 곳 */}
                <RRContent />
                <RRContent />
                <RRContent />
                <RRContent />

            </ScrollView>

            {/* 완료버튼 */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>완료</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  scroll:{
    flex:1,
    padding:10
  },
  header:{
      width:'100%',
      height:50,
      backgroundColor:'#32AAFF',
      flexDirection:"row",
      justifyContent: "center",
      borderRadius: 10,
      marginBottom: 20
  },
  footer:{
    width: '100%',
    height: 70,
    backgroundColor: '#5CEEE6'
  },
  button:{
      flex:1,
      backgroundColor: '#50C8FF',
      alignItems: 'center',
      justifyContent: 'center'
  },
  text:{
      fontSize: 20,
      color: '#fff'
  },
  titleInput:{
      color: '#fff',
    //   backgroundColor: '#32AAFF',
      fontSize: 20
  }
});