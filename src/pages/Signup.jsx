import { useState } from 'react';
import React from 'react';
import '../App.css';
import { Form, Input,Row,Col,Button } from 'antd';
// import { Outlet, Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";


import styled from 'styled-components';
// const { Link } = Anchor;
const H1 = styled.h1`
color: black;
font-size: 2rem;
`;
const DIV=styled.div`
width:500px;
  height:auto;
  margin:auto;

`


function Signup(){
    // // function submit(){
    // //     <Link to= '/login'></Link>
    // // }
    const[name,setName]=useState({
       
    });
    const inputEvent=(event)=>{
        setName({...name,[event.target.name]:event.target.value});
        // console.log(setName);
    }
    
function Fun(event){
    event.preventDefault();
    
    console.log(name);
}
    
    return(
        <DIV>
            <Form>
                <H1 >Let's Create an account</H1>
                <Row>
                    
                    <Col span={10}>
                     <label>FirstName</label>

                       <Input placeholder='First name' required name='firstname' value={name.firstname} onChange={inputEvent}/>
                       {/* <label>first name can't empty</label> */}
                    </Col>
                    <Col span={10} offset={4}>
                     <label>LastName</label>
                       <Input placeholder='Last name' required name='lastname' value={name.lastname} onChange={inputEvent} />
                       {/* <label>last name can't empty</label> */}
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <label>Email</label>
                        <Input type={'email'} placeholder='email' required name='email' value={name.email} onChange={inputEvent} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <label>Indian Phone no.</label>
                        <Input tyep={'tel'} placeholder='+91'minLength={10} maxLength={10} required name='phone' value={name.phone} onChange={inputEvent}/>
                    </Col>
                </Row>
                {/* <Row>
                    <Col span={24}>
                        <label>USA Phone no.</label>
                        <Input placeholder='+1' minLength={11} maxLength={11} required/>
                    </Col>
                </Row> */}
                <Row>
                    <Col span={24}>
                        <label>Password</label>
                        <Input.Password required value={name.password} name='password'  onChange={inputEvent}/>
                    </Col>
                </Row>
                <p style={{marginTop:10}}>By registering, you agree to Gaize's<a href='/'>Terms of use and privacy policy</a></p>
              <Button type="primary" block style={{marginTop:10}} htmlType="submit" onClick={Fun} >Register</Button>
                <p style={{marginTop:15}}>Already have an account?<a href='/'>Sign in</a></p>
               
            </Form>

        </DIV>
    )
}

export default Signup;