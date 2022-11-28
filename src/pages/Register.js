import React from 'react'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

function Register() {

    const dispatch = useDispatch();
    function register(values) {
        dispatch(registerUser(values))
        // if(values.password!==values.confirmpassword){
        //   message.error("passwords not matched")
        // }else{
        //     console.log(values)

        // }
    }
    return (
        <div className="register">

            <Row justify='center' className="flex align-items-center">
                <Col lg={5}><h1 className="heading1" data-aos="slide-right">Find</h1></Col>
                <Col lg={10} sm={24} className="bs p-5 register-form">
                    <h3>Registration Page</h3>
                    <hr />
                    <Form layout="vertical" onFinish={register}>
                        <Form.Item label="username" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="confirm password" name="confirm password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button className="mb-3" htmlType='submit'>Register</Button>
                        <br></br>
                        <Link to="/login">Already registered? Click here to Login</Link>
                    </Form>
                </Col>
                <Col lg={5}><h1 className="heading2" data-aos="slide-left">Jobs</h1></Col>
            </Row>
        </div>
    )
}

export default Register