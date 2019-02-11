import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FixContent from '../components/FixContent';
import FixClubChar from '../components/FixClubChar';

export default class ClubFix extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {/* 회색부분 */}
        <View style={styles.title}>

            {/* 동아리 대표 이미지 부분 */}
            <TouchableOpacity style={styles.clubImage}>
                <Image
                    style={styles.Image}
                    source={require('../images/momo.jpg')}/>
            </TouchableOpacity>

            {/* 동아리 대표 이미지 오른쪽 하단 카메라 부분 */}
            <TouchableOpacity style={styles.camera1}>
                <AntDesign name="camera" size={20} color="#fff" />
            </TouchableOpacity>

            {/* 동아리 로고 부분 */}
            <TouchableOpacity style={styles.logoImage}>
                <Image
                    style={styles.logo}
                    source={require('../images/logo.png')}/>
            </TouchableOpacity>

            {/* 동아리 로고 오른쪽 밑 카메라 부분 */}
            <TouchableOpacity style={styles.camera2}>
                <AntDesign name="camera" size={20} color="#fff" />
            </TouchableOpacity>

        </View>

          
          <FixContent
            title={'이름'}
            content={'꼴데'}
          />
          <FixClubChar
            title={'특징'}
            content={'#야구 #마음맞는'}
          />
          <FixContent
            title={'소개'}
            content={'우리 동아리!!ㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㄴ'}
          />
        
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
    height:'50%',
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: '#dcdcdc',
    paddingTop: 25
  },
  clubImage:{
    width: '80%',
    height: '60%',
    backgroundColor: '#323232',
    borderRadius: 15
  },
  Image:{
    width: '100%',
    height: '100%',
    backgroundColor: '#323232',
    borderRadius: 15,
  },
  logo:{
    height:70,
    width:70,
    resizeMode:'contain',
    // backgroundColor: '#0A6ECD',
    borderRadius: 35,
  },
  logoImage:{
    borderRadius:35,
    backgroundColor: '#fff',
    // flex:1,
    top: -10
  },
  camera1:{
    left: 140,
    top:-20,
    backgroundColor: '#828282',
    padding:5,
    borderRadius:15
  },
  camera2:{
    left: 30,
    top:-40,
    backgroundColor: '#828282',
    padding:5,
    borderRadius:15
  }
  
});