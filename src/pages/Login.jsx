import { Form, Input, Button,Space } from 'antd';
import '../index.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const layout = {
//   labelCol: {
//     span: 8,
//   },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 16,
  },
};
const H1=styled.h1`
font-size:30px;
`;
const P=styled.p`
margin-top:20px;


`

const Login = () => {
    const n1=useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
    n1("/Forgot")
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  return (
    <Form style={{height:'auto',width:500,margin:'auto'}}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <H1>Login</H1>
        <P>Please enter your email address and password to login.</P>
      <Form.Item
        
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input type='email' placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='password'/>
      </Form.Item>
        <Link to='/Forgot'>Forgot your password?</Link>
      <Form.Item {...tailLayout}>
      <Space
    direction="horizontal"
    style={{
      width: '100%',
    }}
  >
    <Button type="primary" htmlType='submit' block>
      Login
    </Button>
    </Space>
      </Form.Item>
    </Form>
  );
};
export default Login;