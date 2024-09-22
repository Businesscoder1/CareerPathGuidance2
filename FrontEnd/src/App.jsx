  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import Navbar from './Components/Page1/Navbar';
  import SideBar from './Components/Page1/SideBar';
  import MainButton from './Components/Page1/MainButton';
  import Login from './Components/LoginPage/Login';
  import Signup from './Components/SignupPage/Signup'; // Import Signup
  import ForgotPassword from './Components/ForgotPass/ForgotPassword';
  import Welcome from './Components/WelcomePage/Welcome';
import Assessment1 from './Components/AssesmentPage1/Assessment1';
import Assessment2 from './Components/AssessmentPage2/Assessment2';
import Assessment3 from './Components/AssessmentPage3/Assessment3';
  const App = () => {
    return (
      <div className="app">
        <Navbar />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainButton />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
            <Route path='/home' element={<MainButton/>}/>
            <Route path='/forgot' element={<ForgotPassword/>}/>
            <Route path='/mainpage' element={<Welcome/>}/>
            <Route path="/assesment1" element={<Assessment1 />} />
            <Route path='/assessment2' element={<Assessment2/>}/>
            <Route path='/assessment3' element={<Assessment3/>}/>
          </Routes>
        </div>
      </div>
    );
  };

  export default App;
