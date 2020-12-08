import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      text:"",
      displayText:"",
    }
  }

  render(){
    return(
      <View>

        <Header 
          backgroundColor = {'blue'}
          centerComponent = {{
            text:'Online Pocket Dictionary',
            style:{color:'red',fontSize:17}
          }}
        />
        
        <TextInput
          style = {styles.inputBox}
          onChangeText = {text => {
            this.setState({
              text:text,
            })
          }}
          value = {this.state.text}
        />

        <TouchableOpacity 
          style = {styles.searchButton}
          onPress = {()=>{
            this.setState({displayText:this.state.text});
          }}>
          <Text style = {styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <Text style = {styles.displayedtext}>{this.state.displayText}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox:{
    width:250,
    height:50,
    alignSelf:'center',
    textAlign:'center',
    borderWidth:3,
    borderColor:'black',
    backgroundColor:'cyan',
    marginTop:90
  },
  searchButton:{
    height:60,
    width:140,
    alignSelf:'center',
    alignText:'center',
    marginTop:30,
    backgroundColor:'cyan',
    borderWidth:3,
  },
  buttonText:{
    marginTop:12,
    fontSize:20,    
    alignSelf:'center',
  },
  displayedtext:{
    textAlign:'center',
    fontSize:20,
    marginTop:20,
  }
})