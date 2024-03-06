import logo from './logo.svg';
import './App.css';
import React  from 'react';
import User from './User';
import { PureComponent } from 'react';

class App extends React.Component  {

  constructor (){
    super();
    this.state={
      count:1
    }
  }

  render(){

    // console.warn("chek rerendering")

    return (
      <div className="App">
       
       {/* <h1>pure component {this.state.count}</h1> */}
       <User  count={this.state.count}/>
       <button  onClick={()=>this.setState({count:this.state.count +1})}>update count</button>
  
      </div>
    );
  }

  }
 

export default App;
