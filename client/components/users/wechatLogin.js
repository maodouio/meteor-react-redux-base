import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { InputItem, Button, Flex, WhiteSpace, WingBlank } from 'antd-mobile/dist/antd-mobile';
import { createForm } from 'rc-form';

class WechatLogin extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const { phone, password } = this.props.form.getFieldsValue();
    const { dispatch, wechatGetPhone, username, id } = this.props;
    dispatch(wechatGetPhone(id, username, phone, password));
  }

  render() {
    const { getFieldProps } = this.props.form;
    return(
      <Flex direction='column' align='center'>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p>欢迎你，{this.props.nickname}</p>
          <div>绑定手机 以后可以使用手机号直接登录</div>
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
          <Button type='primary' inline onClick={this.handleClick}>确定</Button>
          <Link to='/user'><Button type='ghost' inline>以后再说</Button></Link>
        </WingBlank>
        <WhiteSpace size="lg" />
      </Flex>
    );
  }
}

WechatLogin.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  wechatGetPhone: PropTypes.func,
  nickname: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.string,
};

export default createForm()(WechatLogin);
