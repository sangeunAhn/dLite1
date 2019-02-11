import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class ClubIntroduce extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {/* 회색부분 */}
        <View style={styles.title}>

            {/* 동아리 대표 이미지 */}
            <Image
                style={styles.clubImage}
                source={require('../images/momo.jpg')}/>

            {/* 로고 이미지 */}
            <Image
                style={styles.logo}
                source={require('../images/logo.png')}/>

            <Text style={styles.clubTitle}>꼴데</Text>

            <Text style={styles.clubChar}>#야구</Text>
            
        </View>
        

        <View style={styles.content}>
            <Text style={styles.clubExplain}>
                우리동아리는 모델을 꿈꾸는 학생들이 모인 동아리입니다. 언제든지 자신의 매력을 뽐내는 부원들과 함께 밀라노 패션쇼를 목표로 활동을 하고 있습니다.
            </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  title: {
    width:'100%',
    height:'60%',
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: '#dcdcdc',
    paddingTop: 25
  },
  content: {
    flex: 1
  },
  clubImage:{
    width: '90%',
    height: '65%',
    resizeMode:'cover',
    backgroundColor: '#323232',
    borderRadius: 15
  },
  logo:{
    height:70,
    width:70,
    resizeMode:'contain',
    backgroundColor: '#fff',
    borderRadius: 35,
    top: -30
  },
  clubTitle:{
      fontSize: 25,
      top: -15
  },
  clubChar:{
      fontSize:15,
      color: '#828282',
      top: -10
  },
  clubExplain:{
      padding:30,
      fontSize: 20,
      alignItems: 'center'
  }
});