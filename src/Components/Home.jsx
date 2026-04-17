import React, { useRef } from 'react';
import Explore from './Explore';
import Projects from './Projects';

const Home = () => {

  const exploreRef = useRef(null);
  const projectsRef = useRef(null);

  const handleExploreClick = () => {
    exploreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1>Welcome To DevConnect</h1>
      <p>Connect with Developers and build projects Together</p>

      <button onClick={handleExploreClick}>
        Explore Developers
      </button>

      <br />

      <button onClick={handleProjectsClick}>
        View Projects
      </button>

      <Explore ref={exploreRef} />
      <Projects ref={projectsRef} />
    </div>
  );
};

export default Home;