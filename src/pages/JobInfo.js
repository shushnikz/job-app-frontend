import { Button, Tag } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import moment from 'moment';
import { applyJobs } from '../redux/actions/jobActions';

function JobInfo() {
  const { jobs } = useSelector((state) => state.jobsReducer)

  const { id } = useParams();
  const job = jobs.find(job => job._id === id)
  const userid = JSON.parse(localStorage.getItem('user'))._id
  const dispatch = useDispatch()

  const appliedCandidates = job.appliedCandidates
  const alreadyApplied = appliedCandidates.find((candidate) => candidate.userid === userid)

  function applyNow() {
    dispatch(applyJobs(job))
  }
  return (
    <div>
      <DefaultLayout>
        {job && (<div>
          <h5><b>Title</b> : {job.title}</h5>
          <p><b>Company</b> : {job.company}</p>
          <p><b>Small Description</b> : {job.smallDescription}</p>
          <p><b>Full Description</b> : {job.fullDescription}</p>
          <p><b>Skills Required</b> : {job.skillsRequired}</p>
          <p><b>Expirience</b> : {job.experience} Years</p>
          <p><b>Minimum Qualification</b> : {job.minimumQualification}</p>
          <hr />
          <p><b>Salary Range</b> : {job.salaryFrom} - {job.salaryTo}</p>
          <p><b>Department</b> : {job.department}</p>
          <p><b>Company Profile</b> : {job.companyDescription}</p>
          <p><b>Total Candidates Applied</b> : {job.appliedCandidates.length}</p>

          <hr />
          <div className="flex justify-content-between">
            {job.postedBy == userid ?
              (
                <Button>
                  <Link to={`/editjob/${job._id}`}>Edit Now</Link>
                </Button>
              ) : alreadyApplied ? (<Tag color='green'>Already Applied</Tag>) : (
                <Button onClick={applyNow}>Apply Now</Button>
              )}
            <p><b>Posted on</b> {moment(job.createdAt).format('MMM DD YYYY')}</p>
          </div>

        </div>)}


      </DefaultLayout>
    </div>
  )
}

export default JobInfo

