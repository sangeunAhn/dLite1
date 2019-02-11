import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class FixClubChar extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>{this.props.title}</Text>

            <TouchableOpacity style={styles.char}>

                <Text style={styles.content}>{this.props.content}</Text>
                
            </TouchableOpacity>

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
    char:{
        flex:1
    },
    content:{
        fontSize:17,
        color: '#bebebe'
    }

    });