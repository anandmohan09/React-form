import {useState} from 'react';
import React from 'react';
import { Button, Form, Input,Row,Col } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const H1=styled.h1`
font-size:2.5em;
`





const Signup1 = () => {
  const[name,setName]=useState('');
  const handle=(e)=>{
    setName({...name,[e.target.name]: [e.target.value]})
  }
    const n=useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(name);
        n("/Login")
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      return(
  <Form
    name="basic"
   
    style={{ width: 500 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <H1>Let's Create an account</H1>
    <Row>
        <Col span={11} >
          <label>First Name</label>
    <Form.Item
    //  wrapperCol={{ span: 10 }}
    //  wrapperCol={{ span: 10 }}
      
      name="firstname"
      rules={[{ required: true, message: 'Please input your firstname!' }]}
    >
        {/* <label>First Name</label> */}
      <Input type='text' placeholder='first name' name='firstname' value={name.firstname} onChange={handle} />
      
    </Form.Item>
    </Col>
    <Col span={11} offset={2} >
      <label>Last Name</label>
    <Form.Item
    //  wrapperCol={{ span: 10 }}
    //  wrapperCol={{ span: 10 }}
      name="lastname"
      rules={[{ required: true, message: 'Please input your lastname!' }]}
    >
        {/* <label>Last Name</label> */}
      <Input type='text' placeholder='last name' name='lastname' value={name.lastname} />
    </Form.Item>
    </Col>
    </Row>
    <label>Email</label>
    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please input your email' }]}
    >
        {/* <label>Email</label> */}
      <Input  type='email'placeholder='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" name='email' value={name.email}/>
    </Form.Item>
    <label>Organization</label>
    <Form.Item
      name="organization"
      rules={[{ required: true, message: 'Please input your organization' }]}
    >
        {/* <label>Organization</label> */}
      <Input placeholder='organization' name='organization' value={name.organization} />
    </Form.Item>
    <label>Phone</label>
    <Form.Item
      name="phone"
      rules={[{ required: true, message: 'Please input your phone' }]}
    >
        {/* <label>Phone</label> */}
      <Input type='text' placeholder='+9' maxLength={10} minLength={10}  pattern="[9][0-9]{9}" name='phone' value={name.firstname} />
    </Form.Item>
    <label>Password</label>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password' }]}
    >
        {/* <label>Password</label> */}
      <Input.Password placeholder='password' name='password' />
    </Form.Item>
    <span>By registering,you agree to Gaize's <a href='/'>Terms of use and Privacy Policy</a></span>
    <Form.Item wrapperCol={{ span: 24 }}>
      <Button type="primary" htmlType="submit" style={{marginTop:10}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
      )
};

export default Signup1;