import './App.css';
import Home from './pages/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import AppliedJob from './pages/AppliedJob';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import JobInfo from './pages/JobInfo';
import FadeLoader from "react-spinners/FadeLoader";
import { useEffect } from "react";
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
  const { users } = useSelector((state) => state.usersReducer)

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


        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/appliedjobs" element={<ProtectedRoute><AppliedJob /></ProtectedRoute>} />
        <Route path="/postjob" element={<ProtectedRoute><PostJob /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/jobs/:id" element={<ProtectedRoute><JobInfo /></ProtectedRoute>} />

        <Route path="/posted" element={<ProtectedRoute><Postedjobs /></ProtectedRoute>} />
        <Route path="/editjob/:id" element={<ProtectedRoute><Editjob /></ProtectedRoute>} />
        <Route path="/users/:id" element={<ProtectedRoute><Userinfo /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (!localStorage.getItem("job-app-users")) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }
}



