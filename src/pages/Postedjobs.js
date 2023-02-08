import { Modal, Table } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom"
import DefaultLayout1 from '../components/DefaultLayout1'


function Postedjobs() {

  const alljobs = useSelector((state) => state.jobsReducer).jobs
  const userid = JSON.parse(localStorage.getItem('user'))._id
  const userPostedJobs = alljobs.filter((job) => job.postedBy === userid)
  const allusers = useSelector((state) => state.usersReducer).users
  console.log(userPostedJobs)
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState()

  const showModal = (job) => {
    setIsModalOpen(true);
    setSelectedJob(job)
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function CandidatesList() {
    const candidatesColumns = [
      {
        title: "Candidate Id",
        render: (text, data) => {
          return <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
        }
      },
      {
        title: "Full Name",
        dataIndex: "fullName"
      },
      {
        title: "Applied Date",
        dataIndex: "appliedDate"
      }
    ]

    var candidatesDataSource = []

    for (var candidate of selectedJob.appliedCandidates) {
      var user = allusers.find((user) => user._id === candidate.jobid)
      var obj = {
        candidateId: user._id,
        fullname: user.firstName + " " + user.lastName,
        appliedDate: user.appliedDate
      }
      candidatesDataSource.push(obj)
    }
    return <Table columns={candidatesColumns} dataSource={candidatesDataSource} />
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return <div className="flex">
          <EditOutlined
            onClick={() => { navigate(`/editjob/${data.completeJobData._id}`) }}
          />
          <UnorderedListOutlined
            onClick={() => { showModal(job) }}
          />
        </div>
      }
    }
  ]

  const dataSource = []

  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(job.createdAt).format('MMM-DD-YYYY'),
      appliedCandidates: job.appliedCandidates.length,
      completeJobData: job
    }
    dataSource.push(obj)
  }
  return (
    <div>
      <DefaultLayout1>
        <h1>Posted Jobs</h1>
        <Table columns={columns} dataSource={dataSource} />
        <Modal
          title="Applied Candidate List"
          open={isModalOpen}
          closable={false}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}>
          <CandidatesList />
        </Modal>
      </DefaultLayout1>
    </div>
  )
}

export default Postedjobs