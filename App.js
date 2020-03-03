import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/header'; 
import SuggestionList from './src/video/containers/suggestion-list';
import API from './utils/api';

export default class App extends React.Component{
  state = {
    SuggestionList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10)
    console.log(movies);
    this.setState({
      SuggestionList: movies,
    })
  }

  render() {
  return (
    <Home>
      <Header />
      <Text>buscador</Text>
      <Text>categorías</Text>
      <SuggestionList 
      list={this.state.SuggestionList
      }/>
    </Home>
  );
}
}


