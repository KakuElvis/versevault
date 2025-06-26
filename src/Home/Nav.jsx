import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    
    <header>
        <nav class="px-5 flex justify-between items-center bg-white  shadow-md fixed top-0 left-0 right-0 z-50">
            <div class="py-5 font-bold text-3xl">
                <a href="#home">
                    <span class="text-logo">Blurb</span>
                </a>
            </div>
            
            <div>
                <ul class="hidden lg:flex items-center font-bold justify-center space-x-6"> 
                  <li>
                    <a href="#home" class="hover:bg-hover-text ease-in duration-200 px-4 py-2 rounded-md">Home</a>
                  </li>
                  <li>
                    <a href="#about" class="hover:bg-hover-text ease-in duration-200 px-4 py-2 rounded-md">About</a>
                  </li>
                  <li>
                    <a href="#contact" class="hover:bg-hover-text ease-in duration-200 px-4 py-2 rounded-md">Contact</a>
                  </li>
                  <li>
                    <a href="#contact" class="hover:bg-hover-text ease-in duration-200 px-4 py-2 rounded-md">Blog</a>
                  </li>
                </ul>
            </div>
                  {/* <!-- Action Buttons --> */}
            <div>
                <div class="hidden lg:flex items-center justify-center space-x-6">
                  <Link to="/signin">
                    <button class="text-white bg-button-main px-9 py-3 rounded-md capitalize font-bold cursor-pointer hover:opacity-80 ease-in duration-200">
                      Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button class="text-white bg-button-second px-9 py-3 rounded-md capitalize font-bold cursor-pointer hover:opacity-80 ease-in duration-200">
                      Get Started
                    </button>
                </Link>
                </div>
            </div>
              
            
            {/* <!-- mobile screen --> */}
             <div id="hamburger" class="lg:hidden cursor-pointer z-50">
                <i class="fa-solid fa-bars"></i>
             </div>

             <div id="menu" class="hidden bg-logo h-[100vh] absolute inset-0">
                <ul class="h-full grid place-items-center py-20">
                    <div class="flex items-center ml-7 space-x-6">
                        <li><a id="hLink" href="#home" class="hover:bg-hover-text ease-in duration-200">Home</a></li>
                        <li><a id="hLink" href="#about" class="hover:bg-hover-text ease-in duration-200">About</a></li>
                        <li><a id="hLink" href="#contact" class="hover:bg-hover-text ease-in duration-200">Contact</a></li>
                    </div>

                    <div class="flex items-center space-x-4">
                        <li><button class="bg-button-main px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">Login</button></li>
                        <li><button class="bg-button-second px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">Get Started</button></li>
                    </div>
                </ul>
             </div>
        </nav>
    </header>
    
    
    
    </>
  )
}

export default Nav