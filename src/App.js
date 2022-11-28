import './App.css';
import Home from './pages/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import AppliedJob from './pages/AppliedJob';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import JobInfo from './pages/JobInfo';
import FadeLoader from "react-spinners/FadeLoader";
import { CSSProperties, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from './redux/actions/jobActions';
import Login from './pages/Login';
import Register from './pages/Register';
import Postedjobs from './pages/Postedjobs';
import Editjob from './pages/Editjob';
import { getAllUsers } from './redux/actions/userActions';
import Userinfo from './pages/Userinfo';

function App() {
  const { loader } = useSelector((state) => state.loaderReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
    dispatch(getAllUsers())
  }, [])

  return (
    <div className="App">
      {loader && (<div className="sweet-loading text-center">
        <FadeLoader
          color={'#001529'}

        />
      </div>)}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/appliedjobs" element={<AppliedJob />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs/:id" element={<JobInfo />} />

        <Route path="/posted" element={<Postedjobs />} />
        <Route path="/editjob/:id" element={<Editjob />} />
        <Route path="/users/:id" element={<Userinfo />} />
      </Routes>
    </div>
  );
}

export default App;


