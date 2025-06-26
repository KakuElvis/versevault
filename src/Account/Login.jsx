import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div class="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 class="text-2xl font-bold mb-6 text-center text-gray-600">Start Blurbing</h2>
                <h4 class="text-left text-gray-600 mb-6">Login to blurb</h4>

                <form>
                    <input type="text" placeholder="Username" required class="w-full p-3 mb-4 border border-gray-300 rounded"/>
                    <div class="relative mb-4">
                        <input type="password" id="password" placeholder="Password" required class="w-full p-3 border border-gray-300 rounded"/>
                        <span class="absolute right-3 top-3 cursor-pointer" onclick="togglePassword()">👁️</span>
                    </div>
                    
                        <div class="flex items-center mb-4">
                            <input type="checkbox" id="remember-me" class="mr-2"/>
                            <label for="remember-me" class="text-sm">Remember Me</label>
                        </div>
                        <div class="text-left mb-4">
                            <a href="#" class="text-blue-500 text-sm hover:underline">Forgot Password?</a>
                        </div>
                    
                    <button type="submit" class="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Sign-in</button>
                </form>
                <div>
                    <div>
                        <h3 class="text-center py-3">Or instead</h3>
                    </div>
                    <div>
                        <a href="https://www.google.com">
                            <button  class="flex items-center justify-center px-3   w-full bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"><img src="../src/assets/google.svg" 
                                alt="Google Logo" class="w-5 h-5 mr-2"/>Sign in with Google</button>
                        </a>
                    </div>
                    <div>
                        <Link to="/Signup">
                            <h3 class="text-center py-3 text-gray-700">Don't have an account? <span class="text-blue-700">Sign-up</span></h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login