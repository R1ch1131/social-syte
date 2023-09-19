import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <div className='appWrapper'>
              <Header />
              <Navbar />
         <div className='appWrapperContent'>
             <Routes>
                 <Route path="/profile" element={<Profile/>}/>
                 <Route path="/dialogs/*" element= {<Dialogs/>}/> 
                 <Route path="/news"/>
                 <Route path="/music"/>
                 <Route path="/setting"/>
             </Routes>
         </div>
        </div>
     </BrowserRouter>
  );
};

export default App;
