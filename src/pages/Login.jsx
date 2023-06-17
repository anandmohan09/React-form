import React from 'react';
import '../index.css';
import {Form,Input,Row,Col, Typography,Button} from "antd";
const { Title } = Typography;
function Login(){
    return(
        <>
        <div style={{width:500,height:'auto',margin:'auto'}} className='login'>
          <Form>
           <Title level={3}>Login</Title>
           <p>Please enter your email address and password to login</p>
                 <Row>
                    <Col span="24">
                        <label>Email</label>
                        <Input placeholder='Email' required/>
                    </Col>
                 </Row>
                 <Row>
                    <Col span="24">
                        <label>Password</label>
                        <Input.Password placeholder='Password' required/>
                    </Col>
                 </Row>
                 <Row>
                    <Col span="24">
                        <label>Confirm Password</label>
                        <Input.Password placeholder='Password' required/>
                    </Col>
                 </Row>
                 <a href='/'>Forgot your password?</a>
                 <Button type="primary" block style={{marginTop:10}} htmlType="submit">Log in</Button>
           </Form>
           </div>
        </>
    )
}

export default Login;