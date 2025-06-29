import React from 'react'

const Blurb = () => {
  return (
    <>

       <div class="flex">
        {/* <!-- Sidebar --> */}
        <div class="w-1/6 bg-logo text-white h-screen p-4">
            <div class="flex justify-end mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </div>
            <div class="font-semibold text-2xl mb-12 text-center">
                <h1>Blurb</h1>
            </div>
            <ul>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-black text-white p-2 rounded-md">
                    <i class="fa-solid fa-home"></i></span>
                    <a href="#" class="hover:text-gray-300">Home</a>
                </li>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-white text-black p-2 rounded-md">
                    <i class="fa-solid fa-book-open"></i></span>
                    <a href="#" class="hover:text-gray-300">Blurbs</a>
                </li>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-white text-black p-2 rounded-md">
                    <i class="fa-solid fa-message"></i></span>
                    <a href="#" class="hover:text-gray-300">Messages</a>
                </li>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-white text-black p-2 rounded-md">
                    <i class="fa-solid fa-bell"></i></span>
                    <a href="#" class="hover:text-gray-300">Notifications</a>
                </li>
                
                {/* <!-- HTML with Tailwind and Font Awesome --> */}
            </ul>
        </div>
        {/* <!-- sidebar --> */}

        {/* <!-- Search Bar --> */}
        

        {/* <!-- Main Content --> */}
        <div class="w-full p-8">
            
            {/* <!-- <div class="px-8"> --> */}

                <div class="">
                    <div class="p-4">
                        <input type="text" placeholder="Search..." class="w-1/2 p-2 border border-gray-300 rounded-lg"/>
                    </div>
                </div>
            {/* <!-- </div> --> */}

            <div class="lg:flex items-center font-bold justify-center space-x-8  py-5">
                <h3 class="rounded-xl bg-blue-200 px-4 py-2 text-center">Media</h3>
                <h3 class="rounded-xl bg-blue-200 px-4 py-2 text-center">Law</h3>
                <h3 class="rounded-xl bg-blue-200 px-4 py-2 text-center">IT and Software</h3>
                <h3 class="rounded-xl bg-blue-200 px-4 py-2 text-center">Business</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <div class="bg-red-300 p-8 rounded-lg shadow-lg relative">
                    {/* <!-- Icon at the top-right corner --> */}
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    {/* <!-- Card content --> */}
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
                <div class="bg-gray-300 p-8 rounded-lg shadow-lg relative">
                    {/* <!-- Icon at the top-right corner --> */}
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    {/* <!-- Card content --> */}
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
                <div class="bg-blue-300 p-8 rounded-lg shadow-lg relative">
                    {/* <!-- Icon at the top-right corner --> */}
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
                <div class="bg-green-300 p-8 rounded-lg shadow-lg relative">
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
                <div class="bg-indigo-300 p-8 rounded-lg shadow-lg relative">
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
                <div class="bg-yellow-300 p-8 rounded-lg shadow-lg relative">
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
                <div class="bg-red-300 p-8 rounded-lg shadow-lg relative">
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
                <div class="bg-pink-300 p-8 rounded-lg shadow-lg relative">
                    <div class="mb-4">
                         <span class="absolute top-2 left-2  text-black p-2 pb-4">Business</span>
                         <span class="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow">
                           <i class="fa-solid fa-star text-xs"> <span class="text-xs text-black">4.5</span></i>
                         </span>
                    </div>
                    <div>
                        <p class="text-gray-700">“When we love, we always strive to become better than we are. When we strive to become better than we are, .......</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Blurb