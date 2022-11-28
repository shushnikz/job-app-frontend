import { Table } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'

function AppliedJob() {
  const { jobs } = useSelector((state) => state.jobsReducer)
  const user = JSON.parse(localStorage.getItem("user"))
  const userAppliedJobs = []

  for (var job of jobs) {
    var appliedCandidates = job.appliedCandidates
    var temp = appliedCandidates.find((candidate) => candidate.userid == user._id)
    if (temp) {
      var jobobj = {
        title: job.title,
        company: job.company,
        aplliedDate: temp.aplliedDate
      }
      userAppliedJobs.push(jobobj)
    }
  }

  const columns = [
    {
      title: "Job Title",
      dataIndex: 'title'
    },
    {
      title: "Company",
      dataIndex: 'company'
    },
    {
      title: "Applied Date",
      dataIndex: 'aplliedDate'
    }
  ]
  return (
    <div>
      <DefaultLayout>
        <h1>Applied Job</h1>
        <Table columns={columns} dataSource={userAppliedJobs} />
      </DefaultLayout>
    </div>
  )
}

export default AppliedJob