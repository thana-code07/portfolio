import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.a
          href="https://anime-review-blog.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          aria-label="Open Personal Blog project in a new tab"
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/personal-blog.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Personal Blog</h3>
          <p>
            A modern SaaS platform built with Next.js and OpenAI integration,
            featuring real-time AI-powered content generation and analytics.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Express</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>

        <motion.a
          href="https://courseflow-eta.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          aria-label="Open CourseFlow project in a new tab"
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/courseflow.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>CourseFlow</h3>
          <p>
            A comprehensive social media management dashboard with analytics,
            scheduling, and engagement tracking features.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>Supabase</span>
            <span>Omise</span>
          </div>
        </motion.a>

        <motion.div
          href="https://b-chat-psi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/welcome.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>B-Chat</h3>
          <p>
            Real-time chat application featuring instant messaging and online
            status tracking using Flutter and Socket.io.
          </p>
          <div className="project-tech">
            <span>Flutter</span>
            <span>MongoDB</span>
            <span>Socket.io</span>
          </div>
        </motion.div>
        <motion.div
          href="https://neatly-hotel-t9ca.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Neatly.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Neatly Hotel</h3>
          <p>
            Hotel management platform for guests and staff featuring room
            booking, housekeeping log, and analytics dashboard.
          </p>
          <div className="project-tech">
            <span>Vue.js</span>
            <span>Spring Boot</span>
            <span>Java</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
