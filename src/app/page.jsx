"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";


export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <main className="pt-24 relative z-10">
        {/* 🚀 Hero Section */}
        <section className="hero-section">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Making the Web{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Awesome
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-purple-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            With Clean Code & Creative Design
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Hi, I’m <span className="text-purple-400 font-semibold">Gouthami Lokare</span>, 
            a Full Stack Web & Android Developer passionate about creating seamless 
            and scalable digital experiences.
          </motion.p>
        </section>
        {/* 🛠 Projects Section */}
<section id="projects" className="section projects-section">
  <h2>Featured Projects</h2>

  <div className="projects-grid">
    {/* Project 1 - HealthMate App */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="project-card"
    >
      <Image
        src="/project1.png" // 👉 replace with your screenshot
        alt="HealthMate App"
        width={500}
        height={300}
        className="project-img"
      />
      <h3 className="project-title">HealthMate App</h3>
      <p className="project-desc">
        A mobile app designed to track health metrics, manage fitness goals, 
        and promote overall well-being with smart insights.
      </p>
      <div className="project-stack">
        <span className="tech-pill">Flutter</span>
        <span className="tech-pill">Firebase</span>
        <span className="tech-pill">Dart</span>
      </div>
      <a
        href="https://github.com/yourusername/healthmate"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        🔗 View Project
      </a>
    </motion.div>

    {/* Project 2 - Personal Finance Tracker */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="project-card"
    >
      <Image
        src="/project2.png" // 👉 replace with your screenshot
        alt="Humaxx"
        width={500}
        height={300}
        className="project-img"
      />
      <h3 className="project-title">Humax</h3>
      <p className="project-desc">
        A MERN-based web app that helps users manage income, expenses, and budgets 
        with interactive charts and real-time tracking.
      </p>
      <div className="project-stack">
        <span className="tech-pill">React</span>
        <span className="tech-pill">Node.js</span>
        <span className="tech-pill">MongoDB</span>
        <span className="tech-pill">Express</span>
      </div>
      <a
        href="https://github.com/yourusername/finance-tracker"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        🔗 View Project
      </a>
    </motion.div>
  </div>
</section>

        {/* 🙋 About Section */}
<section id="about" className="about-section">
  <div className="about-container">
    {/* Profile Image - Left */}
    <motion.div
      className="about-image"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src="/profile.jpg" alt="Gouthami Lokare" />
    </motion.div>

    {/* About Content - Right */}
    <motion.div
      className="about-content"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <h3>
        Hi, I’m <span className="highlight">Gouthami Lokare</span>
      </h3>
      <p>
        I’m a passionate Software Developer with expertise in{" "}
        <span className="highlight">Full-Stack Development</span> and{" "}
        <span className="highlight">AI Integration</span>. 
        I love building scalable web applications and exploring 
        new technologies.
      </p>
      <p>
        Beyond coding, I’m always curious about emerging tech, solving 
        real-world problems, and sometimes… mastering the fine art of 
        Googling error messages 😅.
      </p>

      <a href="/Resumee.pdf" download className="resume-btn">
        <span className="cv-icon">📄</span> Download Resume
      </a>
    </motion.div>
  </div>
</section>

        {/* ⚡ Stack Section */}
        <section id="stack" className="section stack-section">
          {/* ⚡ Stack Section */}
<section id="stack" className="section stack-section">
  <h2>The Stack Behind the Magic</h2>

  {/* Frontend */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="stack-category-wrapper"
  >
    <h3>Frontend</h3>
    <div className="stack-grid">
      <span className="tech-pill">⚛️ ReactJS</span>
      <span className="tech-pill">▲ NextJS</span>
      <span className="tech-pill">🎨 TailwindCSS</span>
      <span className="tech-pill">📱 Flutter</span>
    </div>
  </motion.div>

  {/* Backend & Database */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="stack-category-wrapper"
  >
    <h3>Backend & Database</h3>
    <div className="stack-grid">
      <span className="tech-pill">🟩 NodeJS</span>
      <span className="tech-pill">⚡ Express</span>
      <span className="tech-pill">🍃 MongoDB</span>
      <span className="tech-pill">🔥 Firebase</span>
      <span className="tech-pill">🐬 MySQL</span>
      <span className="tech-pill">🐘 PostgreSQL</span>
      <span className="tech-pill">🚀 Supabase</span>
    </div>
  </motion.div>

  {/* Others */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="stack-category-wrapper"
  >
    <h3>Others</h3>
    <div className="stack-grid">
      <span className="tech-pill">🎨 Figma</span>
      <span className="tech-pill">🔗 Git</span>
      <span className="tech-pill">🐙 GitHub</span>
      <span className="tech-pill">⚡ Zustand</span>
    </div>
  </motion.div>
</section>

        </section>

        {/* 📩 Contact Section */}
        <section id="contact" className="get-in-touch">
      <h2>
        Get In <span className="highlight">Touch</span>
      </h2>
      <p>
        Have an idea or want to collaborate? 🚀  
        Let’s build something amazing together!
      </p>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/Gouthamii2" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gouthamilokaree2/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>

      {/* Back to Top Button */}
      <a href="#top" className="back-to-top">
        <FaArrowUp />
      </a>

      <div className="closing">© 2025 Gouthami Lokare. All Rights Reserved.</div>
    </section>
      </main>

      {/* 🌟 Footer */}
      <footer>
        &copy; {new Date().getFullYear()} Gouthami Lokare. All rights reserved.
      </footer>
    </div>
  );
}
