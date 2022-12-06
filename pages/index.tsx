import type { NextPage } from "next";

import LandingPage from "../components/LandingPage/LandingPage";
import Wrapper from "../components/Wrapper/Wrapper";

const Home: NextPage = ({addToCart}:any) => (
  <Wrapper>
    <LandingPage addToCart={addToCart} />
  </Wrapper>
);

export default Home;
