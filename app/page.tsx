import { EnvelopeIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Profile Section */}
      <section className="bg-gray-900 rounded-xl shadow-xl p-8 w-full flex flex-col items-center mb-8 transition">
        <img
          src="/profilepic.jpeg"
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-slate-700 mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">DIPALI BALAS</h1>
        <p className="text-lg text-gray-300 text-center mb-2">
          Hello,
          I am a passionate MERN Stack Developer skilled in building scalable, high-performance web applications using MongoDB, ExpressJS, ReactJS, and NodeJS.  
    Experienced with modern frontend frameworks and backend APIs, I deliver seamless user experiences and robust server-side logic with clean, maintainable code.  
    Constantly learning and adopting new technologies to build full-stack solutions that drive business success.
        </p>
      </section>


{/* Skills Section */}
<section className="bg-gray-900 rounded-xl shadow-lg p-6 w-full mb-6">
  <h2 className="text-2xl font-semibold text-blue-500 mb-4">Skills</h2>
  <ul className="space-y-3 text-white">
    <li>
      <span className="font-semibold">•&nbsp;Languages:</span>{" "}
      JavaScript (ES6+), TypeScript, HTML.
    </li>
    <li>
      <span className="font-semibold">•&nbsp;Frontend:</span>{" "}
      ReactJS, NextJS, Redux, CSS, Chrome Extension Development, Tailwind CSS, Material UI.
    </li>
    <li>
      <span className="font-semibold">•&nbsp;Backend:</span>{" "}
      NodeJS, ExpressJS, Postman, MongoDB, MySQL, Firebase.
    </li>
    <li>
      <span className="font-semibold">•&nbsp;Tools:</span> Git, GitHub, Bitbucket, Jira, GCP.
    </li>
  </ul>
</section>





      {/* Experience Section */}
      <section className="bg-gray-900 rounded-xl shadow-lg p-6 w-full mb-6">
        <h2 className="text-2xl font-semibold text-purple-300 mb-3">Experience</h2>
        <ul className="space-y-3">
          <li className="mb-4">
            <div className="flex flex-row justify-between">
              <div className="text-xl text-gray-300">iGNEK Infotech | Senior Software Developer</div>
              <div className="text-sm text-gray-400">Sep 2024 - Present</div>
            </div>
       
            <div className="text-gray-200">• Developed scalable and responsive enterprise web portals using the MERN stack, implementing reusable components, role-based access, and optimized performance for smooth data workflows.</div>
            <div className="text-gray-200">•	Designed and integrated backend APIs using Node.js and Express.js, supporting features like file uploads, automated email notifications, and department-specific modules for seamless data exchange.</div>
          <div className="text-gray-200">•	Led a team of 3–4 developers, mentoring juniors, conducting code reviews, and ensuring timely delivery of high-quality projects.</div> 
          </li>
          <li className="mb-4">
              <div className="flex flex-row justify-between">
                 <div className="text-xl text-gray-300">HEU Technologies pvt ltd | Software Developer</div>
                <div className="text-sm text-gray-400">Feb 2022 - Aug 2024</div>
            </div>
             <div className="text-gray-200">•	Designed and developed MERN stack applications with responsive user interfaces, secure REST APIs, and role-based authentication.</div>
                <div className="text-gray-200">•	Integrated third-party APIs and Firebase for authentication, storage, and real-time data handling, ensuring high perfor- mance.</div>
            <div className="text-gray-200">•	Developed a Chrome extension to enhance recruiting productivity for HR teams.</div>
          </li>
            <li className="mb-4">
                <div className="flex flex-row justify-between">
                <div className="text-xl text-gray-300">Attributics AI | Software Developer Engineer Intern</div>
                <div className="text-sm text-gray-400">Aug 2021 - Jan 2022</div>
            </div>
            <div className="text-gray-200">•	Built a MERN stack app for recording and analyzing cricket sessions, with video upload, playback, and review features.</div>
               {/* <div className="text-gray-200">Assisted in crafting mobile interfaces and web prototypes.</div>
                  <div className="text-gray-200">Assisted in crafting mobile interfaces and web prototypes.</div> */}
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 rounded-xl shadow-lg p-6 w-full mb-6">
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">Projects</h2>
        <ul className="space-y-2">
          <li>
            <div className="font-medium text-white">Intranet Portal</div>
            <div className="text-gray-200">•	Developed Enterprise portals for a Dubai government entity, including event registration, room booking, document management, and lead generation with secure role-based access.</div>
            {/* <div className="text-sm text-gray-400">Roles and Responsibilities: </div> */}
             <div className="text-gray-200">•	Translated Figma designs into responsive, user-friendly UI components aligned with real-world business needs.</div>
            <div className="text-gray-200">•	Collaborated with teams to deliver seamless data-driven interfaces with real-time updates.</div>
            <div className="text-gray-200">•	Implemented robust role-based access control to ensure secure and personalized user experiences across the platform.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">React.js, Redux, Clay UI, TypeScript, NodeJS, ExpressJS, MySQL.</span></div>
          </li>
          <li>
            <div className="font-medium text-white">Real Estate Web Application</div>
            <div className="text-gray-200">•	Built a property discovery platform with verified agents, featuring category-based route-finding for enhanced search.</div>
            {/* <div className="text-sm text-gray-400">Roles and Responsibilities: </div> */}
             <div className="text-gray-200">•	Integrated third-party maps for route-finding and developed a Boost Marketing module to promote listings.</div>
            <div className="text-gray-200">•	Collaborated with teams to deliver seamless data-driven interfaces with real-time updates.</div>
            <div className="text-gray-200">•	Designed secure, role-based dashboards for agents and users.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">React.js, Redux, Bootstrap, React-Leafle, NodeJS, ExpressJS, MongoDB.</span></div>
          </li>
          <li>
            <div className="font-medium text-white">Digital Marketing Web Application</div>
            <div className="text-gray-200">•	Built a user analytics platform with custom graphs and role-based data access.</div>
            {/* <div className="text-sm text-gray-400">Roles and Responsibilities: </div> */}
             <div className="text-gray-200">•	Redesigned UI, fixed bugs, and optimized overall performance.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">React.js, Redux, Bootstrap, NodeJS, ExpressJS, MongoDB.</span></div>
          </li>
          <li>
            <div className="font-medium text-white">Content Creation Web Application</div>
            <div className="text-gray-200">•	Built a content creation tool for Instagram posts and more, with search, category management, role-based access, and global theme support.</div>
             <div className="text-gray-200">•	Improved app performance using lazy loading, useCallback, and useMemo.</div>
            <div className="text-gray-200">•	Developed bulk content creation for faster generation and managed role-based themes.</div>
            <div className="text-gray-200">•	Optimized Firebase queries for efficient data storage and retrieval.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">React.js, Redux, Firebase, Tailwind CSS, Bootstrap, Material UI.</span></div>
          </li>
             <li>
            <div className="font-medium text-white">Chatbot Web Application</div>
            <div className="text-gray-200">•	Chatbot tool like ChatGPT that retrieves information from uploaded documents and displays related chat history.</div>
             <div className="text-gray-200">•	Designed and developed the user interface for the chatbot experience.</div>
            <div className="text-gray-200">•	Developed bulk content creation for faster generation and managed role-based themes.</div>
            <div className="text-gray-200">•	Optimized Firebase queries for efficient data storage and retrieval.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">React.js, Redux, Tailwind CSS, Material UI, NodeJS, ExpressJS, MongoDB.</span></div>
          </li>
             <li>
            <div className="font-medium text-white">Admin Panel Web Application</div>
            <div className="text-gray-200">•	Web application for managing Android app data with search/filter functionality, custom reports, and role-based access control.</div>
            <div className="text-gray-200">•	Managed role-based data access and permissions.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">React.js, Redux, Tailwind CSS, Material UI, NodeJS, ExpressJS, MongoDB.</span></div>
          </li>
           <li>
            <div className="font-medium text-white">HR Helper – Chrome Extension</div>
            <div className="text-gray-200">•	Developed a productivity tool for HR teams to streamline tasks such as job description generation, profile analysis, and meeting scheduling.</div>
            <div className="text-gray-200">•	Implemented secure role-based access control to ensure data privacy and proper authorization across different user roles.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">HTML, CSS, JavaScript, JQuery, Chrome Extension.</span></div>
          </li>
           <li>
            <div className="font-medium text-white">Cricket Analytics App</div>
            <div className="text-gray-200">•	An Android app that uses machine learning to help players analyze their strengths and weaknesses by comparing their performance videos with those of other players.</div>
            <div className="text-gray-200">•	Implemented OTP verification with Twilio API for secure authentication, designed and developed the app UI for a smooth user experience.</div>
             <div className="text-gray-200">•	Deployed the backend on GCP and the app frontend on the Play Store Console.</div>
            <div className="text-sm text-gray-400">Tech Stack: <span className=" text-blue-500">React-Native, Redux, Expo CLI, Node.js, Express.js, MongoDB, GCP, Play Store Console.</span></div>
          </li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="bg-gray-900 rounded-xl shadow-lg p-6 w-full mb-6">
        <h2 className="text-2xl font-semibold text-green-300 mb-3">Education</h2>
        <ul className="space-y-2">
          <li>
            <div className="font-medium text-white">ME - Computer Engineering</div>
            <div className="text-sm text-gray-400">Shantilal Shah Engineering College - 2018</div>
          </li>
          <li>
            <div className="font-medium text-white">BE - Computer Engineering</div>
            <div className="text-sm text-gray-400">Vyavasayi Vidya Pratishthan Engineering College - 2026</div>
          </li>
        </ul>
      </section>
 <section className="bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-lg mb-6 text-white">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3">
          <EnvelopeIcon className="w-6 h-6 text-blue-400" />
          <a href="mailto:your.email@example.com" className="hover:underline">
            your.email@example.com
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <PhoneIcon className="w-6 h-6 text-blue-400" />
          <a href="tel:+1234567890" className="hover:underline">
            +1 (234) 567-890
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <LocationMarkerIcon className="w-6 h-6 text-blue-400" />
          <span>City, Country</span>
        </li>
        {/* Add more contact methods or social icons as needed */}
      </ul>
    </section>
      {/* Contact Section */}
      <section className="bg-gray-900 rounded-xl shadow-lg p-6 w-full mb-6">
        <h2 className="text-2xl font-semibold text-pink-300 mb-3">Contact</h2>
        <div className="flex gap-4 text-gray-200">
          <div>
            <span className="font-medium text-white">Email: </span>
            <span className="text-blue-300">dipalimbalas@gmail.com</span>
          </div>
          <div>
            <span className="font-medium text-white">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/dipali-balas/"
              className="text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/dipali-balas/
            </a>
          </div>
          <div>
            <span className="font-medium text-white">GitHub: </span>
            <a
              href="https://github.com/dipalibalas"
              className="text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/dipalibalas
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-500">
        Made with React & TailwindCSS • © {new Date().getFullYear()} DIPALI BALAS
      </footer>
    </div>
  );
}
