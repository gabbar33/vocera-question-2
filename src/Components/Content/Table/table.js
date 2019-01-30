import React, { Component } from 'react';
import './table.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
class TestSuite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  render() {
    const data = this.state.data;
    let items = null;
    let dataObjs = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      let rowObj = {
        product_name: row[0],
        retail_price: row[1],
        discounted_price: row[2],
        description: row[3],
        brand: row[4]
      }
      dataObjs.push(rowObj);
    }
    items = <ReactTable
      data={dataObjs}
      columns={[
        {
          Header: "Product Name",
          accessor: "product_name"
        },
        {
          Header: "Retail Price",
          accessor: "retail_price"
        },
        {
          Header: "Discounted Price",
          accessor: "discounted_price"
        },
        {
          Header: "Description",
          accessor: "description",
          Cell: props => <span className='ceil'>{props.value}</span>
        },
        {
          Header: "Brand",
          accessor: "brand"
        }

      ]}
      defaultPageSize={15}
      pageSizeOptions={[15, 30, 50, 100]}
      minRows={0}
      className="-striped -highlight"
    />
    return (
      <div>
        {items}
        <br />
      </div>
    );
  }
}

export default TestSuite