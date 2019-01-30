import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'
import './Content.css';
import Table from './Table/table';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  handleChange = data => {
    this.setState({
      data: data
    })
  };

  render() {
    let tableTag = null;
    if (this.state.data != null) {
      tableTag = <Table data={this.state.data} />
    }
    return (
      <div className="content">
        <div className= "container" >
          <CSVReader
            cssClass="csv-reader-input"
            label="Select CSV File"
            onFileLoaded={this.handleChange}
            onError={this.handleDarkSideForce}
            inputId="ObiWan"
            inputStyle={{ color: 'red', fontsize:20 }}
          />
        </div>
        <div className={this.state.data ? '' : 'hidden'}>
          {tableTag}
        </div>
      </div>
    );
  }
}

export default Content;