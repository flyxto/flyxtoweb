import Header from "./header";
import Container from '@/layout/container';
import WhatWeDo from "./WhatWeDo";
import Techstack from "./techstack";

const Home = () => {
  return (
    <Container>
      <Header/>
      <Techstack/>
      <WhatWeDo/>

    </Container>
  );
}

export default Home;