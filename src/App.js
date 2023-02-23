import React from 'react';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">

    </div>
  );
}

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: '',
      arr: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.onButtonClick= this.onButtonClick.bind(this)
  }

  onButtonClick() {
    console.log(this.state.val)
    this.state.arr.push(this.state.val)
    this.setState({val: ''})
  }

  handleChange(event) {
    this.setState({val: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.onButtonClick}>Submit</button>
        <Overview title={this.state.arr} />
      </div>
    )
  }  
}

export default Input