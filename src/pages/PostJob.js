import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Tabs } from 'antd'
import DefaultLayout from '../components/DefaultLayout'
import { Option } from 'antd/es/mentions';
import { useDispatch } from 'react-redux';
import { postJobs } from '../redux/actions/jobActions';
const { TextArea } = Input;
const { TabPane } = Tabs;

function PostJob() {

  const [jobInfo, setJobInfo] = useState({})
  const [activeTab, setActiveTab] = useState("0")
  const dispatch = useDispatch()

  function onFirstFormFinish(values) {
    setJobInfo(values)
    setActiveTab("1")
  }

  function onFinalFormFinish(values) {
    const finalobj = { ...jobInfo, ...values };
    console.log(finalobj)
    dispatch(postJobs(finalobj))
  }
  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey='0' activeKey={activeTab}>
          <TabPane tab="Job Info" key="0">
            <Form layout="vertical" onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item name="title" required rules={[{ required: true }]} label="Title">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item name="department" required rules={[{ required: true }]} label="Department">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item name="experience" required rules={[{ required: true }]} label="Experience">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item name="salaryFrom" required rules={[{ required: true }]} label="Salary From">
                    <Input type='number' />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item name="salaryTo" required rules={[{ required: true }]} label="Salary To">
                    <Input type='number' />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item name="skillsRequired" required rules={[{ required: true }]} label="Skills Required">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item name="minimumQualification" required rules={[{ required: true }]} label="Minimum Qualification">
                    <Select>
                      <Option value="Degree">
                        Degree
                      </Option>
                      <Option value="Plus 2">
                        Plus 2
                      </Option>
                      <Option value="Master Degree">
                        Master Degree
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item name="smallDescription" required rules={[{ required: true }]} label="Small Description">
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item name="fullDescription" required rules={[{ required: true }]} label="Full Description">
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType='submit'>Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Company Info" key="1">
            <Form layout="vertical" onFinish={onFinalFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item name='company' label="Company Name" required rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item name='email' label="Company Email" required rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item name='phoneNumber' label="Phone Number" required rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item name='companyDescription' label="Company Description" required rules={[{ required: true }]}>
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>
              </Row>
              <Button onClick={() => { setActiveTab("0") }}>Previous</Button>
              <Button htmlType='submit'>Post Job</Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  )
}

export default PostJob