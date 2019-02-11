import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';

export default class SignUp extends Component {
  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 이름</Text>
                    <TextInput 
                        style={styles.input} 
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 종류</Text>
                    <TextInput 
                        style={styles.input} 
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 특성</Text>
                    <TextInput 
                        style={styles.input} 
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 소개</Text>
                    <TextInput 
                        style={[styles.input, styles.introduce]} 
                        multiline={true}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 로고</Text>
                    <TextInput 
                        style={styles.input} 
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 메인사진</Text>
                    <TextInput 
                        style={styles.input} 
                    />
                </View>
                <View style={styles.button}>
                    <ConfirmButton 
                        title={'확인'}/>
                </View>
                
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
  
  input: {
    width:'100%',
    padding: 7,
    borderColor: "#32B8FF",
    borderWidth: 1,
    fontSize: 17,
    marginTop: 5
  },
  text: {
      fontSize: 17
  },
  toDos: {
    alignItems: "center"
  },
  block: {
      paddingBottom: 20
  },
  introduce: {
      height: 120
  },
  button: {
      height:60
  }
});

