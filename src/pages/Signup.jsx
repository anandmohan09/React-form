import React from 'react';
import '../App.css';
import { Form, Input,Row,Col,Button } from 'antd';


function Signup(){
    return(
        <div className='signup'>
            <Form>
                <h1 >Let's Create an account</h1>
                <Row>
                    
                    <Col span={10}>
                     <label>FirstName</label>

                       <Input placeholder='First name' required/>
                    </Col>
                    <Col span={10} offset={4}>
                     <label>LastName</label>
                       <Input placeholder='Last name' required/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <label>Email</label>
                        <Input type={'email'} placeholder='email' required/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <label>Indian Phone no.</label>
                        <Input tyep={'tel'} placeholder='+91'minLength={10} maxLength={10} required/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <label>USA Phone no.</label>
                        <Input placeholder='+1' minLength={11} maxLength={11} required/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <label>Password</label>
                        <Input.Password required/>
                    </Col>
                </Row>
                <p style={{marginTop:10}}>By registering, you agree to Gaize's<a href='/'>Terms of use and privacy policy</a></p>
                <Button type="primary" block style={{marginTop:10}} htmlType="submit">Register</Button>
                <p style={{marginTop:15}}>Already have an account?<a href='/'>Sign in</a></p>
            </Form>

        </div>
    )
}

export default Signup;