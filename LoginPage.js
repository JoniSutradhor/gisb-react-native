import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default class LoginPage extends React.Component{

  render(){
    return(
      <View style={loginPageStyle.containerView}>
        <View style={{height:50, alignItems:"center", paddingTop:20}}>
            <Text>Login</Text>
        </View>
        
          
          <TextInput placeholder='Name/Email' style={{marginBottom:10, height:50, borderColor: 'blue', borderWidth: 1, borderRadius:10}} ></TextInput>
        
        <View>
          <TextInput placeholder='Password' style={{marginBottom:10, height:50, borderColor: 'blue', borderWidth: 1, borderRadius:10}}></TextInput>
        </View>
        
          <Button style={{marginBottom:10}} title='Sing In'></Button>
        
        <View style={{flexDirection: "row", marginTop:10}}>
          <Text style={{flex:1, marginLeft:200, paddingTop:7.5}}>Sign Up Now</Text>
          <Button style={{flex:3}} title='Sign Up'></Button>
        </View>
      </View>
    );
  }

}

const loginPageStyle = StyleSheet.create({
  containerView : {
    marginTop:20,
  }
})
