import React from 'react';

const HowTo = () => {
  return (
    <div className="py-20 px-6 md:px-16 lg:px-40 space-y-24">
      {/* Section 1 - Join */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-semibold py-5">
            <span className="text-logo">Join</span> the{' '}
            <span className="text-logo">Community</span>.
          </h1>
          <p>
            Become part of a growing community of passionate readers. Whether you're into fiction, non-fiction, or poetry,
            there’s a place for you here. Connect, discover new titles, and celebrate the joy of reading together.
          </p>
        </div>
        <div>
          <img
            src="/src/assets/community.svg"
            alt="Community reading illustration"
            width="500"
            height="300"
            className="transform scale-x-[-1]"
          />
        </div>
      </div>

      {/* Section 2 - Share */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <img
            src="/src/assets/chat.svg"
            alt="Chat about books illustration"
            width="500"
            height="300"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-semibold py-5">
            <span className="text-logo">Share</span> your views on a book <br />
            you have <span className="text-logo">Read</span>.
          </h1>
          <p>
            Got thoughts about a book that moved you, challenged you, or made you think? Share your reflections,
            favorite quotes, or quick reviews. Your voice matters — and someone out there might be waiting to read
            exactly what you just finished.
          </p>
        </div>
      </div>

      {/* Section 3 - Inspire */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-semibold py-5">
            <span className="text-logo">Inspire</span> others to{' '}
            <span className="text-logo">Read</span>.
          </h1>
          <p>
            Reading is contagious — and your story could be the spark someone needs. Whether it’s a timeless classic or a
            modern gem, your shared experience could open the door for someone else’s next great read.
          </p>
        </div>
        <div>
          <img
            src="/src/assets/inspire.svg"
            alt="Inspire others to read illustration"
            width="500"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
