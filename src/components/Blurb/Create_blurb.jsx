import React, { useState } from 'react';

const CreateBlurb = () => {
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  const categories = ['Business', 'Leadership', 'Law', 'IT and Software'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      blurb,
      category: selectedCategory,
    });
    // TODO: Post to backend or save in Firebase
  };

  if (!formVisible) return null;

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={() => setFormVisible(false)}
          className="absolute top-3 right-3 w-6 h-6 text-xl flex items-center justify-center text-white hover:text-gray-100 bg-gray-600 border rounded-full"
          title="Close form"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-700">Post a Blurb</h2>
        <p className="mb-4 text-gray-600">Unleash your thoughts in brief brilliance</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Book Title */}
          <div className="mb-4">
            <label htmlFor="book-title" className="block text-gray-600 mb-1">
              Book Title
            </label>
            <input
              type="text"
              id="book-title"
              name="book-title"
              placeholder="The Alchemist"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Blurb */}
          <div className="mb-4">
            <label htmlFor="blurb" className="block text-gray-600 mb-1">
              Blurb
            </label>
            <textarea
              id="blurb"
              name="blurb"
              rows="4"
              placeholder="Your thoughts..."
              value={blurb}
              onChange={(e) => setBlurb(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <p className="pb-2 text-gray-700 text-sm">Choose Blurb Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium border ${
                    selectedCategory === cat
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition shadow-md font-bold"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlurb;
