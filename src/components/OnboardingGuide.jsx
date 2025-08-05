import React from "react";
import {
  FaUserPlus,
  FaSignInAlt,
  FaUserCog,
  FaBookOpen,
  FaPenFancy,
  FaHandsHelping,
  FaSignOutAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-3xl text-logo" />,
    title: "Create Your Account",
    description:
      "Sign up with your email and password or use Google to register instantly.",
  },
//   {
//     icon: <FaSignInAlt className="text-3xl text-logo" />,
//     title: "Login to Your Account",
//     description:
//       "Enter your credentials or use Google login to access your dashboard.",
//   },
//   {
//     icon: <FaUserCog className="text-3xl text-logo" />,
//     title: "Set Up Your Profile",
//     description:
//       "Add a display name and personalize your profile for the community.",
//   },
//   {
//     icon: <FaBookOpen className="text-3xl text-logo" />,
//     title: "Explore the Dashboard",
//     description:
//       "View your blurbs, likes, and activity. Access features via the sidebar.",
//   },
  {
    icon: <FaPenFancy className="text-3xl text-logo" />,
    title: "Post a Blurb",
    description:
      "Click 'Post Blurb', enter book title, your thoughts, select category, and publish.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-logo" />,
    title: "Engage with the Community",
    description:
      "Like, comment, and discover blurbs from others in the reading community.",
  },
//   {
//     icon: <FaSignOutAlt className="text-3xl text-logo" />,
//     title: "Logout Safely",
//     description:
//       "Click 'Logout' in your profile section to exit your account securely.",
//   },
];

const OnboardingGuide = () => {
  return (
    <div className="">
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-logo mb-10">
                How to Use VerseVault
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div
                    key={index}
                    className="bg-white p-6 flex flex-col items-center text-center rounded-xl shadow hover:shadow-lg hover:translate-y-2 transition-all duration-300"
                    >
                    <div className="mb-4 bg-gray-100 p-5 rounded-full">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
      
       {/* Call to Action */}
      <div className="text-center m-10 ">
        <h2 className="text-2xl font-semibold mb-4">Ready to share your thoughts?</h2>
        <p>Join the VerseVault community today and start sharing your blurbs!</p>
        <div className="mt-6">
          <a href="/register" className="bg-button-main text-white px-6 py-3 rounded-xl font-bold hover:opacity-80 transition">Get Started</a>
        </div>
      </div>
    </div>

    
  );
};

export default OnboardingGuide;
