import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  };
   
  componentDidMount() {
    console.log('did mount', this.state);
  }

  componentDidUpdate() {
    console.log('did update', this.state);
  };

  incrementCount = () => {this.setState({count: this.state.count+1})} 

  
  render() {
    return (
      <div className="App">
        Wartość licznika: {this.state.count}
        <div onClick={this.incrementCount}>Zwiększ licznik</div>
      </div>
    );
  }
}

export default App;
