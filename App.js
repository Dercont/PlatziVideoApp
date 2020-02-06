import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

export default class App extends Component{
  render() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text> 
    <Image 
    style={{width: 50, height: 50}}
    source={{uri:
      'https://www.techpowerusa.com/wp-content/uploads/2017/06/default-user.png'}}
    ></Image>
     <Image 
    style={{width: 300, height: 80}}
    source={require('./assets/logo.png')}
    ></Image>
  </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Platform.select({
      android:'green',
      ios:'blue',
    })
  },
});
