import React from 'react'

const Create_blurb = () => {
  return (
    <>
        <div class="bg-gray-200 flex items-center justify-center h-screen">
            <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button class="absolute top-3 right-3 w-6 h-6 text-xl flex items-center justify-center text-white hover:text-gray-100 bg-gray-600 border rounded-full">
                    &times;
                </button>
                
                <h2 class="text-2xl font-bold text-gray-600">Post a Blurb</h2>
                <h1 class="mb-4 text-gray-600">Unleash your thoughts in brief brilliance</h1>
                <form action="#" method="POST">
                    <div class="mb-4">
                        <label for="book-title" class="block text-gray-600">Book Title</label>
                        <input type="text" id="book-title" name="book-title" placeholder="The Alchemist" class="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div class="mb-4">
                        <label for="blurb" class="block text-gray-600">Blurb</label>
                        <textarea id="blurb" name="blurb" rows="4" placeholder="Unleash your thoughts in brief brilliance" class="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div class="mb-4 items-center">
                        <p class="pb-2 text-gray-700  text-xs">Choose Blurb Category</p>
                        <div class="flex space-x-2">
                            <button type="button" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 cursor-pointer">Business</button>
                            <button type="button" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 cursor-pointer">Leadership</button>
                            <button type="button" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 cursor-pointer">Law</button>
                            <button type="button" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 cursor-pointer">IT and Software</button>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 shadow-md font-bold cursor-pointer">Post</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Create_blurb