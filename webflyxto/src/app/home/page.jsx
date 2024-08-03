import Header from "./header";
import Container from '@/layout/container';
import WhatWeDo from "./WhatWeDo";
import Techstack from "./techstack";
import Projects from "./projects";
import Contact from "./contact";

const Home = () => {
  return (
    <Container>
      <Header/>
      <Techstack/>
      <WhatWeDo/>
      <Projects/>
      <Contact/>
    </Container>
  );
}

export default Home;