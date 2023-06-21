import React from 'react';
// import Signup from './pages/Signup';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Signup1 from './pages/Signup1'
import { Routes, Route } from "react-router-dom";
// import { Switch } from 'antd';

function App(){
  return(
    <>
      {/* <Login/>  */}
     {/* <Signup/> */}
      {/* <Forgot/>  */}
      {/* <Signup1/> */}
      
       <Routes>
        
          <Route path='/' element={<Signup1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
       </Routes>  
     
    
    </>
  )
}

export default App;