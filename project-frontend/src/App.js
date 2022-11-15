import './App.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import AboutPage from './components/AboutPage/AboutPage'
import HomePage from './components/HomePage/HomePage'
import PolicyPage from '/components/PolicyPage/PolicyPage'
import ContactPage from '/components/ContactPage/ContactPage'
import CategoryPage from './components/CategoryPage/CategoryPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import axios from 'axios';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");

    if(token != null){
      let user = jwt_decode(token);

      if(user){
        setIsAuth(true);
        setUser(user)
      }
      else if(!user){
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, [])
  
  const registerHandler = (user) => {
    axios.post("http://localhost:4000/users", user)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    });
  }

  const loginHandler = (cred) => {
    axios.post("http://localhost:4000/auth/signin", cred)
    .then(res => {
      console.log(res.data.token)

      // Store the token in Local Storage.
      if(res.data.token != null){
        localStorage.setItem("token", res.data.token);
        let user = jwt_decode(res.data.token);
        setIsAuth(true);
        setUser(user);
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }

  return (
    <Router>
      <NavBar onLogoutHandler={onLogoutHandler} isAuth={isAuth} user={user}/>
      <div className="App">
        <Routes>
          <Route path='/home' element={isAuth ? <HomePage /> : <Signin login={loginHandler}></Signin>} />
          <Route path='*' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/policy' element={<PolicyPage />} />
          <Route path='/category' element={<CategoryPage />} />
          
          <Route path="/signup" element={<Signup register={registerHandler}></Signup>}></Route>
          <Route path="/signin" element={isAuth ? <HomePage></HomePage> : <Signin login={loginHandler}></Signin>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

// const registerHandler = (user) => {
//   axios.post("http://localhost:4000/users", user)
//   .then(res => {
//     console.log(res);
//     })
//   .catch(err => {
//     console.log(err)
//   });
// }

export default App;











