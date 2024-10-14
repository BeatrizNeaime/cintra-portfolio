import { useEffect, useState } from 'react';
import Layout from './components/common/Layout';
import Navbar from './components/navbar/index';
import { motion } from 'framer-motion';
import Home from './views/home/Home';
import About from './views/about';
import Skills from './views/skills';
import Divider from './components/common/Divider';
import Projects from './views/projects';
import Contact from './views/contact';

function App() {
  const [language, setLanguage] = useState("en");
  const [selectedPage, setSelectedPage] = useState(window.localStorage.getItem("language") || "en");

  useEffect(() => {
    setLanguage(window.localStorage.getItem("language") || "en");
  }, []);

  const changeLanguage = () => {
    window.localStorage.setItem("language", language === "en" ? "pt" : "en");
    setLanguage(window.localStorage.getItem("language") || "en");
  }

  return (
    <Layout>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        language={language}
        setLanguage={changeLanguage}
      />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        id='home'
      >
        <Home
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>
      <Divider />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("about")}
        id='about'
      >
        <About
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>
      <Divider />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("skills")}
        id='skills'
      >
        <Skills
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>
      <Divider />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("projects")}
        id='projects'
      >
        <Projects
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>
      <Divider />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("contact")}
        id='contact'
      >
        <Contact
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>
    </Layout>
  );
}

export default App;
