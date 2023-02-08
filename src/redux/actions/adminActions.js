import { message } from "antd";
import axios from "axios";

export const signupAdmin = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        await axios.post("https://job-app-12r4.onrender.com/api/admin/signup", values)
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

export const loginAdmin = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const user = await axios.post("https://job-app-12r4.onrender.com/api/admin/signin", values)
        message.success("Login Successfully")
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
            window.location.href = "/postjob"
        }, 1000)
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        message.error("Invalid Credential")
        dispatch({ type: 'LOADING', payload: false })
    }
}

