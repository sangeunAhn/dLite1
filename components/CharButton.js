import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView, TouchableWithoutFeedback,
} from 'react-native';

export default class CharButton extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#28E7FF',
    
  }

  constructor(props){
    super(props);
    this.state = {
      disabled: true,
    }
  }
   
  render(){
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <TouchableOpacity 
      style={[
        styles.button,
        this.state.disabled == true ? styles.button: styles.buttonN
      ]}
      onPress={()=> this.state.disabled == true ? this.setState({disabled:false}) : this.setState({disabled:true})}>
      
          <Text style={[styles.title]}>
            {this.props.title}
          </Text>

      </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 15,
    height: 40, 
    backgroundColor: '#fff',
    paddingRight: 15,
    paddingLeft:15,
    marginRight:10,
    borderColor: '#32AAFF',
    borderWidth:1
  },
  buttonN: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 15,
    height: 40, 
    backgroundColor: 'blue',
    paddingRight: 15,
    paddingLeft:15,
    marginRight:10,
    borderColor: '#32AAFF',
    borderWidth:1
  },
  title: {
    fontSize: 13,
    color: '#0064FF'
  }
});