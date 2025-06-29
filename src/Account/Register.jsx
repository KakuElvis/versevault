import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className='bg-gray-100 flex items-center justify-center h-screen' style={{ backgroundImage: `url('./src/assets/verse.svg')`}}>
            <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 class="text-2xl font-bold mb-4 text-center">Let’s Blurb</h2>
                <h4 class="text-center text-gray-600 mb-6">We just need your email and username.</h4>
                <form action="#" method="POST">
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700"></label>
                        <input type="email" id="email" name="email" placeholder="Email" class="w-full px-4 py-2 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-700">Password</label>
                        <input type="password" id="password" name="password" placeholder="password" class="w-full px-4 py-2 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg">Sign Up</button>
                </form>
                <div>
                    <div>
                        <h3 class="text-center py-3">Or instead</h3>
                    </div>
                    <div>
                        <a href="https://www.google.com">
                            <button  class="flex items-center justify-center px-3 w-full cursor-pointer bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"><img src="./src/assets/google.svg" 
                            alt="Google Logo" class="w-5 h-5 mr-2"/>Sign Up with Google</button>
                        </a>
                    </div>
                    <div>
                        <Link to="/Signin">
                            <h3 class="text-center py-3 text-gray-700">Already have an account? <span class="text-blue-700">Sign-in</span></h3>
                        </Link>
                        <h5 class="text-center text-blue-400">Terms and Condition | Privacy and Policy</h5>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Register