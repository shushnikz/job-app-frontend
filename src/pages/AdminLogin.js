import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAdmin } from '../redux/actions/adminActions'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function AdminLogin() {

    const dispatch = useDispatch()

    function signin(values) {
        dispatch(loginAdmin(values))
    }

    return (
        <div className='login'>
            <Row justify='center' className="flex align-items-center">
                <Col lg={5}><h1 className="heading1" data-aos="slide-left">Find</h1></Col>
                <Col lg={10} sm={24} className="bs p-5 login-form">
                    <h3>Admin Page</h3>
                    <hr />
                    <Form layout="vertical" onFinish={signin} >
                        <Form.Item label="username" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button className="mb-3" htmlType='submit'>Login</Button>
                        <br></br>
                        <Link to="/login">Not registered? Click here to user login</Link>
                        <br />
                        <Link to="/register">Click here to login to user register page</Link>
                        <br />
                        <p>Username: admin</p>
                        <p>Password: admin123</p>
                    </Form>
                </Col>
                <Col lg={5}><h1 className="heading2" data-aos="slide-right">Jobs</h1></Col>
            </Row>
        </div>
    )
}

export default AdminLogin
