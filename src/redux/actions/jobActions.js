import { message } from "antd";
import axios from "axios";

export const getAllJobs = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.get("https://job-app-12r4.onrender.com/api/jobs/getalljobs")
        dispatch({ type: 'GET_ALL_JOBS', payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const postJobs = (values) => async dispatch => {
    values.postedBy = JSON.parse(localStorage.getItem('user'))._id
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post("https://job-app-12r4.onrender.com/api/jobs/postjob", values)

        dispatch({ type: 'LOADING', payload: false })
        message.success("Job Posted Successfully")
        setTimeout(() => {
            window.location.href = "/posted"
        }, 1000)
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const editJobs = (values) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post("https://job-app-12r4.onrender.com/api/jobs/editjob", values)

        dispatch({ type: 'LOADING', payload: false })
        message.success("Job Edited Successfully")
        setTimeout(() => {
            window.location.href = "/posted"
        }, 1000)
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const applyJobs = (job) => async dispatch => {

    const user = JSON.parse(localStorage.getItem("user"))

    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post("https://job-app-12r4.onrender.com/api/jobs/applyjob", { job, user })

        dispatch({ type: 'LOADING', payload: false })
        message.success("Job Applied Successfully")
        setTimeout(() => {
            window.location.href = "/"
        }, 1000)
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const searchJobs = (searchKey) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.get("https://job-app-12r4.onrender.com/api/jobs/getalljobs")
        const jobs = response.data
        const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchKey.toLowerCase()))
        dispatch({ type: 'GET_ALL_JOBS', payload: filteredJobs })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const filterJobs = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.get("https://job-app-12r4.onrender.com/api/jobs/getalljobs")
        const jobs = response.data
        var filteredJobs = jobs
        if (values.experience !== undefined) {
            filteredJobs = jobs.filter((job) => job.experience <= values.experience)
        }
        if (values.salary !== undefined) {
            filteredJobs = jobs.filter((job) => job.salaryTo >= values.salary)
        }

        dispatch({ type: 'GET_ALL_JOBS', payload: filteredJobs })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}