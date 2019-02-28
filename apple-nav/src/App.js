import React, { Component, Fragment } from 'react';
import './css/index.css';
import NavWrapper from './components/NavWrapper';
import Data from './Data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      appleDevices:[]
    }
  }

componentDidMount() {
  this.setState({appleDevices:Data})
}

  render() {
    console.log(this.state);
    
    return (
      <Fragment>


        <NavWrapper 
          // appleDevices={this.state} 
        />



      </Fragment>
    );
  }
}

export default App;
