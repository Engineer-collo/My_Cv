import React from "react";

export default function App() {
  return (
    <div className="min-h-screen relative bg-gray-100 bg-cover bg-center bg-no-repeat">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 mt-10 text-gray-800 font-sans">
      <header className="text-center mb-6">
  <div className="flex justify-center items-center gap-4 mb-3">
    <img
      className="h-20 w-20 rounded-full object-cover border-2 border-blue-500 shadow-md"
      src="/image.png"
      alt="Engineer Collins Logo"
    />
    <div className="text-left">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
        Collins Likhomba
      </h1>
      <p className="text-sm text-gray-600">
        Software Engineer | Fullstack Web Developer
      </p>
    </div>
  </div>

  <div className="flex justify-center mt-2 space-x-4 text-sm">
    <span>Nairobi</span>
    <span>|</span>
    <span>0743250838</span>
    <span>|</span>
    <span>collinslikhomba@gmail.com</span>
  </div>

  <div className="flex justify-center mt-2 flex-wrap gap-3 text-blue-600 underline text-sm">
    <a
      href="https://www.linkedin.com/in/collins-likhomba-7b364730a/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/Engineer-collo?tab=repositories"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
    <a
      href="https://portfolio-git-main-collins-likhombas-projects.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      Portfolio
    </a>
    <a
      href="https://x.com/CollinsLikhomba"
      target="_blank"
      rel="noreferrer"
    >
      Twitter
    </a>
  </div>
</header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Summary</h2>
          <p>
            Experienced in Python with Flask and JavaScript-based programming and a background in building fullstack applications. Possess strong skills in team-building and project management that help startups and educational platforms drive scalable and impactful solutions. Passionate about using technology to inspire, educate, and empower communities.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Technical Skills</h2>
          <ul className="list-disc pl-5">
            <li>Python (Flask, Django)</li>
            <li>JavaScript (ES6+), React, Redux</li>
            <li>HTML5, CSS3, Tailwind CSS</li>
            <li>SQL (PostgreSQL, SQLite)</li>
            <li>Git, GitHub, REST APIs, JWT</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Experience</h2>
          <div>
            <h3 className="font-semibold">Freelance Fullstack Developer <span className="text-sm text-gray-500">(Present)</span></h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Developed responsive websites and fullstack apps with clients.</li>
              <li>Built RESTful APIs with Flask and integrated React frontends.</li>
              <li>Handled deployment, performance, and technical consultation.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Technical Projects</h2>

          {/* Pixi-Fy Project */}
          <div className="mb-4">
            <h3 className="font-semibold">
              Pixi-Fy –{" "}
              <a
                href="https://github.com/Engineer-collo/Pixi-fy"
                target="_blank"
                className="text-blue-600 underline"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" | "}
              <a
                href="https://pixi-fy-hrmt.vercel.app/"
                target="_blank"
                className="text-blue-600 underline"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </h3>
            <p className="text-sm italic">
              A social media platform built with Flask and React for sharing educational tech content.
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>JWT-based authentication and role-based access control.</li>
              <li>Image/file upload with preview and media streaming.</li>
              <li>UI built using Tailwind CSS with React Router navigation.</li>
            </ul>
          </div>

          {/* E-Commerce Project */}
          <div className="mb-4">
            <h3 className="font-semibold">
              E-Commerce App –{" "}
              <a
                href="https://github.com/Engineer-collo/Modern-Ecommerce-Application"
                target="_blank"
                className="text-blue-600 underline"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" | "}
              <a
                href="https://modern-ecommerce-application-v2qd.vercel.app/"
                target="_blank"
                className="text-blue-600 underline"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </h3>
            <p className="text-sm italic">
              A modern shopping platform with Flask backend and React frontend.
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>Product catalog, cart, and secure checkout integration.</li>
              <li>Dynamic filtering, authentication, and order history.</li>
              <li>Styled using Tailwind CSS and Redux Toolkit for state.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Education</h2>
          <p className="text-sm">Moringa School – Full Stack Web Development (Python + JavaScript)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Languages</h2>
          <ul className="list-disc pl-5 text-sm">
            <li>English – Fluent</li>
            <li>Kiswahili – Fluent</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Hobbies</h2>
          <ul className="list-disc pl-5 text-sm">
            <li>Tech blogging and open-source contributions</li>
            <li>Public speaking and mentorship</li>
            <li>Watching documentaries and football</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">References</h2>
          <ul className="text-sm list-disc pl-5 space-y-3">
            <li>
              <span className="font-semibold">Victor Kuria</span> – Lead Software Engineer, Moringa School<br />
              Email: <a href="mailto:victorkuria@example.com" className="text-blue-600 underline">victorkuria@example.com</a><br />
              Relationship: Mentor & Instructor
            </li>
            <li>
              <span className="font-semibold">Bin Amin</span> – Software Developer & Technical Lead<br />
              Email: <a href="mailto:binamin@example.com" className="text-blue-600 underline">binamin@example.com</a><br />
              Relationship: Mentor
            </li>
            <li>
              <span className="font-semibold">Mercy Nzau</span> – Project Manager, DevTech Solutions<br />
              Email: <a href="mailto:mercynzau@example.com" className="text-blue-600 underline">mercynzau@example.com</a><br />
              Relationship: Mentor
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
