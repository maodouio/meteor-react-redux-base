import React, { Component } from 'react';
import { Icon, Button, Rate, DatePicker } from 'antd';
import { WingBlank } from 'antd-mobile';

export default class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 2
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render(){
    const { value } = this.state;
    return(
      <div size='md' style={{paddingTop: '1rem'}}>
        <Icon type="caret-right" />
        <Button type="primary" >ds</Button>
        <span>
          <Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
        </span>
        <DatePicker />
      </div>
    );
  }
}
