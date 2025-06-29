// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home'
import Signup from './Pages/Signup'; 
import Signin from './Pages/Signin';
import Post_blurb from './Pages/Post_blurb';

function App() {

  return (
    <div>
      
        {/* <Home/> */}

      <Router>
        <Routes>
          
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produce" element={<Produce />} /> */}

        
          {/* <Route path="/single_produce" element={<Single_produce />} />
          <Route path="/checkout" element={<Checkout />} /> */}

         
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/post_blurb" element={<Post_blurb />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
