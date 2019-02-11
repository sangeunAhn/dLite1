import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';

const { width, height } = Dimensions.get("window");

export default class CharButton extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.content}>

            <Image 
              style={styles.image}
              source={require('../images/momo.jpg')}
            />

            <Text style={styles.text}>{this.props.text}</Text>
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    content: {
        width:'100%',
        height: 360,
        backgroundColor: '#dcdcdc',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop:17,
        marginBottom: 20
      },
      image: {
        width: width*0.75,
        height: width*0.75,
        resizeMode:'cover',
        backgroundColor: '#fff'
      },
      text:{
        marginTop:15,
        fontSize: 20
      }
});