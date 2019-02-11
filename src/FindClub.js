import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ClubView from '../components/ClubView';
import ClubDiv from '../components/ClubDiv';
import { AntDesign } from '@expo/vector-icons';


export default class FindClub extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {/* 전체화면 스크롤 */}
        <ScrollView style={styles.scroll}>

          {/* 맨 위 d:Lite */}
          <ClubView
            clubTitle={'d:Lite'}
            clubChar={'동아리 관련 플랫폼'}/>

          {/* 대학교 이름과 동아리 종류 볼수있는 아이콘 */}
          <View style={styles.div}>
              <Text style={styles.school}>울산대학교</Text>
              <TouchableOpacity>
                <AntDesign name="bars" size={25} color="#0A6EFF" />
              </TouchableOpacity>
          </View>

          {/* 종류에 따라 동아리 구분 */}
          <ClubDiv
            menuTitle={'내 동아리'}
          />
          <ClubDiv
            menuTitle={'예술 공연'}
          />
          <ClubDiv
            menuTitle={'체육 구기'}
          />
          <ClubDiv
            menuTitle={'종교'}
          />

        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  scroll: {
    flex: 1,
    paddingTop: 10
  },
  div: {
    height:50,
    // backgroundColor:'#dcdcdc',
    paddingLeft:15,
    paddingTop:15,
    paddingRight:15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  school: {
    fontSize: 20
  }
});