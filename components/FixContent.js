import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default class FixContent extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>{this.props.title}</Text>
            
            <TextInput
                style={styles.content}
                placeholder={this.props.content}
                placeholderTextColor={"#000"}
                multiline={true}
            />

        </View>

    )
  }
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
      borderTopWidth:1,
      borderColor: '#bebebe',
      padding: 15,
      paddingLeft:20,
      flexDirection: 'row'
    },
    title:{
        marginRight:60,
        fontSize:20
    },
    content:{
        flex:1,
        fontSize:20
    }

    });