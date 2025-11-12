import  { useRef } from "react";
import Core from "./pages/Core";
import Experience from "./pages/Experience";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Connect from "./pages/Connect";
import Education from "./pages/Education";
import About from "./pages/About";


export default function App() {
  // Create a ref for the Project section
  const projectRef = useRef<HTMLDivElement>(null);

  // Function to scroll smoothly to projects
  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Pass the scroll function to Profile */}
      <Profile scrollToProjects={scrollToProjects} />
       <About/>
      <Core />
      <Education/>
      <Experience />

      {/* Attach the ref to the Project section */}
      <div ref={projectRef}>
        <Project />
      </div>
      <Connect/>


    </div>
  );
}
