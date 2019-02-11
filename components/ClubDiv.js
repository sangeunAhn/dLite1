import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import ClubView from './ClubView';

export default class ClubDiv extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <View style={styles.container}>

            <Text style={styles.menuTitle}>{this.props.menuTitle}</Text>
            
            <ClubView
                clubTitle={'그르메'}
                clubChar={'야구'}/>
            <ClubView
                clubTitle={'틱펑스'}
                clubChar={'밴드'}/>

        </View>

    )
  }
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
      borderTopWidth:1,
      borderColor: '#bebebe',
      marginBottom: 10
    },
    menuTitle:{
        marginBottom: 7,
        paddingTop:15,
        paddingLeft:25,
        color: '#828282',
        fontSize: 15
    }

    });