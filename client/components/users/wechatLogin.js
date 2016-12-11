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
      <Flex direction='column' align='center' style={{fontSize: '.3rem'}}>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p>欢迎你，{this.props.nickname}</p>
          <WhiteSpace size="lg" />
          <div>绑定手机 以后可以使用手机号直接登录</div>
          <WhiteSpace size="lg" />
          <InputItem
            {...getFieldProps('phone')}
            type='phone'
            placeholder='186 1234 1234'
            clear
          >手机号：
          </InputItem>
          <WhiteSpace size="lg" />
          <InputItem
            {...getFieldProps('password')}
            type='password'
            placeholder='******'
            clear
          >密码：
          </InputItem>
          <WhiteSpace size="lg" />
          <Flex justify='center'>
            <Button type='primary' inline onClick={this.handleClick}>确定</Button>
            <WhiteSpace size="lg" />
            <Link to='/user' style={{marginLeft: '.2rem'}}><Button type='ghost' inline>以后再说</Button></Link>
          </Flex>
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
