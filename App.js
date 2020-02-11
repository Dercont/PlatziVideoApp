import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/header'; 
import SuggestionList from './src/video/containers/suggestion-list';

export default class App extends React.Component{
  render() {
  return (
    <Home>
      <Header />
      <Text>buscador</Text>
      <Text>categorías</Text>
      <SuggestionList />
    </Home>
  );
}
}


