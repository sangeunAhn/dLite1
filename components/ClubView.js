import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class ClubView extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <View style={styles.container}>

            <View style={styles.logo}>
              <Image
                style={styles.Image}
                source={require('../images/logo.png')}/>
            </View>
            
            <TouchableOpacity style={styles.club}>
                <Text style={styles.clubTitle}>{this.props.clubTitle}</Text>
                <Text style={styles.clubChar}>#{this.props.clubChar}</Text>
            </TouchableOpacity>

        </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:70,
  //   backgroundColor:'#FAFABE',
    flexDirection:"row",
    justifyContent: "flex-start",
    padding:15,
    paddingLeft:25,
    alignItems:'center'
  },
  logo:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:'#fff',
    borderColor:'#0064FF',
    borderWidth:1,
    marginRight:25
  },
  Image:{
    height:50,
    width:50,
    resizeMode:'contain',
  },
  club:{
      flex:1,
    //   backgroundColor: '#DCEBFF',
  },
  clubTitle:{
      fontSize:20,
      fontWeight: '500',
      marginBottom: 8
  },
  clubChar:{
      fontSize: 14,
      color: '#828282'
  }
});