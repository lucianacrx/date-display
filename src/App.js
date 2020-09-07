import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state= {
      apiResponse: ''
    };
  }

  handleButtonClick = () => {
    API.getAPIResponse().then((res) => {
      this.setState({apiResponse: res.data.date.replace(/(^|-)0+/g, '$1')});
    });
  }

  getFullDate(date) {
    return date.split('-');
  }

  render() {
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton onClickButton={this.handleButtonClick.bind(this)}></DateButton></center>
        <DateDisplay apiResponse={this.state.apiResponse}></DateDisplay>
      </div>
    );
  }
}

export default App;
