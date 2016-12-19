import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { InputItem, Button, Flex, WhiteSpace, WingBlank, List } from 'antd-mobile/dist/antd-mobile';
import { createForm } from 'rc-form';
import Helmet from 'react-helmet';
import WeChatSignIn from 'maodou/wechat/client/containers/sign-in-button';

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
      <div style={{paddingTop: '45%'}}>
        <Helmet title='用户登录' />
        <List direction='column' align='center'>
          <InputItem
            {...getFieldProps('phone', {
              initialValue: '123 4567 8910',
            })}
            type='phone'
            clear
          >手机号
          </InputItem>
          <InputItem
            {...getFieldProps('password', {
              initialValue: '123456',
            })}
            type='password'
            clear
          >密码
          </InputItem>
        </List>
        <WhiteSpace />
        <Flex style={{padding: '0 1rem'}} direction="column" justify="around">
          <Button onClick={this.onSubmit}>登录</Button>
          <WhiteSpace />
          <WeChatSignIn />
        </Flex>
      </div>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loginWithPassword: PropTypes.func,
};

export default  createForm()(LoginForm);
