import React, { Component} from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
    render() {
        return this.props.children
    }

} 
export default Home;