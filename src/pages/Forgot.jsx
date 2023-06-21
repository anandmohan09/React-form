import {useState} from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import {ArrowLeftOutlined} from '@ant-design/icons';


const H2=styled.h2`
text-align:center;
font-size:1.7rem;
color:gray;
`
const P=styled.p`
color:gray;
text-align:center
`

const Forgot = () => {
  const[name,setname]=useState({});
  const handleChange=(event)=>{
    setname({...name,[event.target.name]:[event.target.value]});
  }

  const onFinish = (values) => {
    console.log(name);
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

return (
  <Form
    name="basic"
    wrapperCol={{
      span: 24,
    }}
    style={{
      width: 500,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <ArrowLeftOutlined style={{color:'blue'}}/><span style={{color:'gray'}}>Back</span>
    <H2>Forgot Your Password</H2>
    <P>please enter the email you use to sign in to Gaize</P>
    <label style={{fontWeight:'bold'}}>Email</label>
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input type='email' onChange={handleChange}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" name='email' value={name.email} />
    </Form.Item>
    <Form.Item
      wrapperCol={{
       
        span: 24,
      }}
    >
      <Button type="primary" htmlType="submit" style={{width:'100%'}}>
        Send Reset Email
      </Button>
    </Form.Item>
  </Form>)}
;
export default Forgot;