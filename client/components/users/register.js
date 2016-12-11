import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { InputItem, Button, Flex, WhiteSpace, WingBlank } from 'antd-mobile/dist/antd-mobile';
import { createForm } from 'rc-form';

class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { dispatch, createNewUser } = this.props;
    const { username, phone, password } = this.props.form.getFieldsValue();
    const data = { username, phone, password };
    dispatch(createNewUser(data));
  }

  render() {
    const { getFieldProps } = this.props.form;
    return(
      <Flex direction='column' align='center' style={{marginTop: '1.5rem'}}>
        <Helmet title='用户注册' />
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <InputItem
            {...getFieldProps('username')}
            type='text'
            placeholder='your name'
            clear
          >用户名：
          </InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type='phone'
            placeholder='186 1234 1234'
            clear
          >手机号：
          </InputItem>
          <InputItem
            {...getFieldProps('password')}
            type='password'
            placeholder='******'
            clear
          >密码：
          </InputItem>
          <Button type='primary' inline onClick={this.onSubmit}>确定</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
      </Flex>
    );
  }
}

Register.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  createNewUser: PropTypes.func
};

export default createForm()(Register);
