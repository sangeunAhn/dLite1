import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MainButton from '../components/MainButton';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />

        {/* 로고랑 설명 */}
        <View style={styles.title}>
        <Image
            style={{height:'80%',width:'80%',resizeMode:'contain'}}
            source={require('../images/logo.png')}/>
        <Text>동아리 관리를 편하게 하기 위한 완벽 솔루션</Text>
        </View>

        {/* 버튼2개 */}
        <View style={styles.content}>
            <MainButton
                buttonColor={'#444'}
                title={'동아리 회장'}
                onPress={() => alert('취소 버튼')}/>
            <View style={{width:"100%",height:10}} />
            <MainButton
                buttonColor={'#023e73'}
                title={'일반'}
                onPress={() => alert('확인 버튼')}/>
        </View>
        <View style={styles.footer}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    alignItems: "center",
    // backgroundColor: '#9aa9ff'
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    paddingTop:120,
    // backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'17%',
    // backgroundColor: '#1ad657'
  },
});