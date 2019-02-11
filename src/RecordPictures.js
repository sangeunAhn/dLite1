import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Picture from '../components/Picture';



export default class RecordPictures extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        {/* 제목부분 */}
        <View style={styles.header}>
          <Text style={styles.title}>MT</Text>
        </View>

          {/* 회색부분 */}
          <Picture
            text={'회식 후 누워서 한 일'}/>
          <Picture
            text={'어어어어'}/>
          <Picture
            text={'모모'}/>
            
      </ScrollView>
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
    height:40,
    backgroundColor: '#3296FF',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:15
  },
  title: {
    fontSize: 23,
    color: '#fff'
  },
  
});