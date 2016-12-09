import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { InputItem, Button, Flex, WhiteSpace, WingBlank } from 'antd-mobile/dist/antd-mobile';
import { createForm } from 'rc-form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { phone, password } = this.props.form.getFieldsValue();
    const { dispatch, loginWithPassword} = this.props;
    dispatch(loginWithPassword(phone, password));
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Flex direction='column' align='center'>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <InputItem
            {...getFieldProps('phone', {
              initialValue: '123 4567 8910',
            })}
            type='phone'
            clear
          >手机号：
          </InputItem>
          <InputItem
            {...getFieldProps('password', {
              initialValue: '123456',
            })}
            type='password'
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

LoginForm.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loginWithPassword: PropTypes.func,
};

export default  createForm()(LoginForm);
