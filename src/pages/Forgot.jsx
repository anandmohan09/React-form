import React from 'react';
import {Col, Form,Row,Input,Button} from 'antd';
import {ArrowLeftOutlined} from'@ant-design/icons';
import '../index.css';


function Forgot(){
    return(
        <> 
        <div style={{width:500,height:'auto'}}>
            <Form>
                {/* <span><ArrowLeftOutlined /></span> */}
             <a href='/' style={{color:'black'}}>  <ArrowLeftOutlined style={{color:'blue'}} />Back</a> 
                 <h2 style={{textAlign:'center'}}>Forgot your password?</h2>
                 <p style={{textAlign:'center'}}>Please enter the email you use to sign in to Gaize.</p>
                 <Row>
                    <Col span={24}>
                        <label>Email</label>
                  <Input placeholder='email' required/>
                    </Col>
                 </Row>
                 <Button type="primary" block style={{marginTop:25}} htmlType="submit">Send Reset email</Button>
            </Form>
        </div>
        </>
    )
}
export default Forgot;