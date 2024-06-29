import Header from "./header";
import Container from '@/layout/container';
import WhatWeDo from "./WhatWeDo";
import Techstack from "./techstack";
import Projects from "./projects";

const Home = () => {
  return (
    <Container>
      <Header/>
      <Techstack/>
      <WhatWeDo/>
      <Projects/>
    </Container>
  );
}

export default Home;