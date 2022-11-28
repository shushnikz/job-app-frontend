import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/actions/userActions'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Login() {
    const dispatch = useDispatch()

    function login(values) {
        dispatch(loginUser(values))
    }
    return (
        <div className="login">

            <Row justify='center' className="flex align-items-center">
                <Col lg={5}><h1 className="heading1" data-aos="slide-left">Find</h1></Col>
                <Col lg={10} sm={24} className="bs p-5 login-form">
                    <h3>Login Page</h3>
                    <hr />
                    <Form layout="vertical" onFinish={login} >
                        <Form.Item label="username" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button className="mb-3" htmlType='submit'>Login</Button>
                        <br></br>
                        <Link to="/register">Not registered? Click here to register</Link>
                        <br />
                        <p>Username: John</p>
                        <p>Password: john123</p>
                    </Form>
                </Col>
                <Col lg={5}><h1 className="heading2" data-aos="slide-right">Jobs</h1></Col>
            </Row>
        </div>
    )
}

export default Login