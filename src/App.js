import React, {Component} from 'react';
import Content from './components/Content';
import Carousel from './components/Carousel';

import './App.css';

//Renders both the Content and Carousel components
class App extends Component {
  render() {
    return (
      <div>
        <Content />
        <Carousel />
      </div>
    );
  }
}

export default App;
