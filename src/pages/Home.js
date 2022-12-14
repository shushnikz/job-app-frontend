import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllJobs } from '../redux/actions/jobActions'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import moment from "moment"

function Home() {
  const { jobs } = useSelector((state) => state.jobsReducer)
  console.log(jobs)
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("user"))
  console.log("hello")

  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

  return (
    <div>
      <DefaultLayout>
        <Row gutter={16}>
          { jobs && jobs?.map((job) => {
            return <Col lg={12} sm={24}>
              <div className="job-div bs m-2 p-2">
                <h4>{job.title}</h4>
                <p>{job.company}</p>
                <hr />
                <p>{job.smallDescription}</p>
                <div className="flex">
                  <p>Salary : <b>{job.salaryFrom} - {job.salaryTo}</b></p>
                  <p style={{ marginLeft: 20 }}>Experience : <b>{job.experience} Years</b></p>
                </div>
                <hr />
                <div className="flex justify-content-between">
                  <Link to={`/jobs/${job._id}`}><Button>View</Button></Link>
                  <p>Posted on : {moment(job.createdAt).format('MMM-DD-YYYY')}</p>
                </div>

              </div>
            </Col>
          })}
        </Row>

      </DefaultLayout>
    </div>
    
  )
}

export default Home