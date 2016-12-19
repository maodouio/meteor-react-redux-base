import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { InputItem, Button, Flex, WhiteSpace, WingBlank } from 'antd-mobile/dist/antd-mobile';
import { createForm } from 'rc-form';

class AddToMember extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const { phone, email, job, hobby } = this.props.form.getFieldsValue();
    const { dispatch, addToMember, id } = this.props;
    dispatch(addToMember(id, phone, email, job, hobby));
  }

  render() {
    const { getFieldProps } = this.props.form;
    return(
      <Flex direction='column' align='center' style={{fontSize: '.3rem', paddingTop: '1rem'}}>
        <WhiteSpace size="lg" />
        <Helmet title='申请会员' />
        <WingBlank size="lg">
          <div>完善以下资料，申请成为会员.</div>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('phone')}
            type='phone'
            placeholder='186 1234 1234'
            clear
          >手机号：
          </InputItem>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('email')}
            type='email'
            placeholder='username@example.com'
            clear
          >邮箱
          </InputItem>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('job')}
            type='text'
            placeholder='(选填)'
            clear
          >工作
          </InputItem>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('hobby')}
            type='text'
            placeholder='(选填)'
            clear
          >爱好
          </InputItem>
          <WhiteSpace size="lg" />
          <Flex justify='center'>
            <Button type='primary' inline onClick={this.handleClick}>申请</Button>
          </Flex>
        </WingBlank>
      </Flex>
    );
  }
}

AddToMember.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  addToMember: PropTypes.func,
  username: PropTypes.string,
  id: PropTypes.string,
};

export default createForm()(AddToMember);
