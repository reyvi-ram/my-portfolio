import React, { useState } from 'react'; // Import useState
import profile from '../images/profile.jpg'; 
import proj1 from '../images/proj1.png';
import './Portfolio.css'; // Import your CSS file
// import monkey from  '../images/monkey.jpg'; 
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



const PortfolioCard = () => {
  const [closed, setClosed] = useState(false); // State to control visibility

  if (closed) return null; // Don't render anything if closed
  
  // Inject custom CSS for flip card

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center p-8 space-y-8 mb-0 pl-0 pr-0 pb-0" >
      {/* Close Button */}
      <button
        onClick={() => setClosed(true)}
        className="self-end bg-red-500 text-white px-2 py-1 rounded hover:bg-blue-500 cursor-pointer" style={{ marginBottom: '0px', }}
      >
        Bye!👋
      </button>

      {/* Header: Name, Contact, and Socials */}
      <header className="text-center text-white space-y-4 mb-">
      {/* <img
          src={monkey
          alt="Robot"
          className="absolute w-16 left-1/2 -translate-x-1/2 -top-10 animate-bounce mt-15"
        /> */}
        <h1 className="text-5xl font-bold">REYVI RAMIREZ</h1>
        <div className="flex justify-center space-x-10 text-white">
          <a href="https://www.instagram.com/rmrzryvi/" aria-label="Instagram"><FaInstagram size={24} /></a>
          <a href="https://www.facebook.com/rramirez1020" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={24} /></a>
          <a href="https://github.com/reyvi-ram" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub size={24} /></a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={24} /></a>
        </div>
      </header>



      {/* Profile Image */}
      <div className="relative w-32 h-32">
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
       
      </div>


      {/* Description Text */}
      <p className="text-center text-white text-l text-bold max-w-md text-sm leading-relaxed">
        As a dedicated and compassionate IT graduate, I'm determined to fully understand the work, apply my
        experiences and talents, and fully immerse myself in mastering the job in order to support the company's expansion.
      </p>

      {/* Content Boxes */}
      <h2 className="text-2xl text-white font-bold mr-135" style={{ marginBottom: '10px' }}>My Projects</h2>     
       <div className="w-full max-w-2xl space-y-8">
        {/* Project 1 with flip card effect */}
        <div className="flip-card rounded-md shadow-md overflow-hidden">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={proj1} alt="Project 1" className="w-full object-contain max-h-[500px]" />
            </div>
            <div className="flip-card-back bg-white">
              <h3 className="text-xl font-bold text-red-800 mb-2">Project 1</h3>
              <p className="text-gray-700">
                This is a Chat Bot assistance that answer the queries of the public in City of San Fernando, Pampanga.
                It is designed to provide quick and accurate responses to frequently asked questions, enhancing user experience and engagement.
              </p>
              {/* <div className="mt-4">
                <a href="https://github.com/yourproject1" target="_blank" rel="noopener noreferrer" 
                   className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 inline-block mt-2">
                  View Code
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Project 2 with flip card effect */}
        <div className="flip-card w-full rounded-md shadow-md overflow-hidden">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Project 2 Image</p>
            </div>
            <div className="flip-card-back bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Project 2</h3>
              <p className="text-gray-700">
                This is a detailed description of Project 2. It showcases your skills and the technologies you used.
                Hover over to see more details about this amazing project.
              </p>
              {/* <div className="mt-4">
                <a href="https://github.com/yourproject2" target="_blank" rel="noopener noreferrer" 
                   className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 inline-block mt-2">
                  View Code
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Hardcoded Copyright Footer */}
      <div className="w-full mt-5">
        <div className="w-full text-center py-4 border-t border-gray-300 bg-gray-300 text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} <a href="https://github.com/reyvi-ram" className="underline hover:text-blue-600">Reyvi Ramirez</a>. All rights reserved.
        </div>
      </div>
    </div>

   

  );
};

export default PortfolioCard;
