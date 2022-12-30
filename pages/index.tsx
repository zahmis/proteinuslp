import styled from "styled-components";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <Main>
      <Navbar />
    </Main>
  );
}

const Main = styled.main``;
const Title = styled.div``;
const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
