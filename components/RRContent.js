import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
} from 'react-native';

const { width, height } = Dimensions.get("window");

export default class RRContent extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <View>

            <View style={styles.contentBackground}>

                <View style={styles.content}>

                </View>

            </View>

            <View style={styles.coment}>

                <TextInput
                    style={styles.commentInput}
                    placeholder={"간단한 코멘트를 입력해주세요"}
                    placeholderTextColor={"#bebebe"}
                />

            </View>
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    contentBackground:{
        backgroundColor: '#d2d2d2',
        marginBottom: 15,
        width:'100%',
        height:height*0.57,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      content:{
        backgroundColor:'#fff',
        width:width*0.8,
        height:width*0.8,
        borderRadius: 10
      },
      coment:{
        width: '100%',
        height: height*0.15,
        // backgroundColor: '#c98cc9',
        borderTopWidth:1,
        borderColor: "#969696",
        paddingTop:10,
        paddingLeft:10
      },
      commentInput:{
        fontSize:17
    }
    });