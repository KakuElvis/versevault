// src/components/How_to.jsx
import React from 'react';
import community from '../assets/community.svg';
import chat from '../assets/chat.svg';
import inspire from '../assets/inspire.svg';

const HowTo = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-gray-100 text-gray-800 space-y-16">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4"><span className="text-logo">Join</span> the <span className="text-logo">Community</span></h2>
          <p>Become part of a growing community of passionate readers...</p>
        </div>
        <img src={community} alt="Community" className="md:w-1/2 w-full" />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4"><span className="text-logo">Share</span> your views</h2>
          <p>Got thoughts about a book that moved you, challenged you...?</p>
        </div>
        <img src={chat} alt="Chat" className="md:w-1/2 w-full" />
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4"><span className="text-logo">Inspire</span> others to <span className="text-logo">Read</span></h2>
          <p>Your shared experience could open the door for someone else’s next great read.</p>
        </div>
        <img src={inspire} alt="Inspire" className="md:w-1/2 w-full" />
      </div>
    </section>
  );
};

export default HowTo;
