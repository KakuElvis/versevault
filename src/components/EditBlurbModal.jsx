import React, { useState, useEffect } from "react";

const EditBlurbModal = ({ blurb, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [blurbText, setBlurbText] = useState("");

  useEffect(() => {
    if (blurb) {
      setTitle(blurb.title);
      setCategory(blurb.category);
      setBlurbText(blurb.blurb);
    }
  }, [blurb]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...blurb,
      title,
      category,
      blurb: blurbText,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Blurb</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <textarea
            value={blurbText}
            onChange={(e) => setBlurbText(e.target.value)}
            placeholder="Blurb text"
            className="w-full mb-3 p-2 border rounded"
            rows="4"
            required
          ></textarea>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-logo text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlurbModal;
