import { message } from "antd";
import axios from "axios";

export const registerUser = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        await axios.post("https://job-app-12r4.onrender.com/api/users/register", values)
        message.success("User Registered Successfully")
        setTimeout(() => {
            window.location.href = "/login"
        }, 1000)
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        message.error("something went wrong please try later")
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const loginUser = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const user = await axios.post("https://job-app-12r4.onrender.com/api/users/login", values)
        message.success("Login Successfully")
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
            window.location.href = "/"
        }, 1000)
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        message.error("Invalid Credential")
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const updateUser = (values) => async dispatch => {
    const userId = JSON.parse(localStorage.getItem('user'))._id
    values._id = userId
    dispatch({ type: 'LOADING', payload: true })
    try {
        const user = await axios.post("https://job-app-12r4.onrender.com/api/users/update", values)
        message.success("Updated Successfully")
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
            window.location.reload()
        }, 1000)
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        message.error("Something went wrong, please try later")
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const getAllUsers = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.get("https://job-app-12r4.onrender.com/api/users/getallusers")
        dispatch({ type: 'GET_ALL_USERS', payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}