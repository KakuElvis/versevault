// src/components/How_to.jsx
import React from 'react';
import community from '../assets/community.svg';
import chat from '../assets/chat.svg';
import inspire from '../assets/inspire.svg';

const HowTo = () => {
  return (
    // <section className="px-6 md:px-20 py-16 bg-gray-100 text-gray-800 space-y-16">
   <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-20">

  {/* Section 1: Join Community */}
  <div className="flex flex-col md:flex-row items-center gap-10">
    <div className="md:w-1/2 space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">
        <span className="text-logo">Join</span> the <span className="text-logo">Community</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Become part of a growing community of passionate readers who love sharing and discovering powerful ideas.
      </p>
    </div>
    <img
      src={community}
      alt="Community"
      className="w-72 h-72 md:w-80 md:h-80 object-contain"
    />
  </div>

  {/* Section 2: Share Views */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-10">
    <div className="md:w-1/2 space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">
        <span className="text-logo">Share</span> Your Views
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Got thoughts about a book that moved you or challenged your thinking? Post a blurb to start a conversation.
      </p>
    </div>
    <img
      src={chat}
      alt="Chat"
      className="w-72 h-72 md:w-80 md:h-80 object-contain"
    />
  </div>

  {/* Section 3: Inspire Others */}
  <div className="flex flex-col md:flex-row items-center gap-10">
    <div className="md:w-1/2 space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">
        <span className="text-logo">Inspire</span> Others to <span className="text-logo">Read</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Your shared experience could open the door to someone’s next favorite read. Every blurb matters.
      </p>
    </div>
    <img
      src={inspire}
      alt="Inspire"
      className="w-72 h-72 md:w-80 md:h-80 object-contain"
    />
  </div>

</section>

    
  );
};

export default HowTo;
