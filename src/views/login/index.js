import React , { Component} from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../common/header/index'
import {loginAction,getUserAction} from './store/actionCreater'
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}


class Login extends React.Component {
  componentDidMount() {
    let {username,password} = this.props;
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    this.props.form.setFieldsValue({
        username,
        password
    },(res)=>{
        console.log('set success',username,password)
    })
    this.props.getUser();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          this.props.login(values);
        


      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    let {username,password} = this.props;
    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user"   style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
               
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in {username} {password}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Login);

const mapState = (state)=>{
    return {
        username:state.get('LoginReducer').get('user').get('username'),
        password:state.get('LoginReducer').get('user').get('password'),

    }
}
const mapDispatch = (dispatch)=>{
    return {
        login(values){
            const action = loginAction({
                username:values.username,
                password:values.password
            });
            dispatch(action);
           

        },
        getUser(){
          const action = getUserAction();
          dispatch(action);
          
        }
    }
}
export default withRouter(connect(mapState,mapDispatch)(WrappedHorizontalLoginForm));