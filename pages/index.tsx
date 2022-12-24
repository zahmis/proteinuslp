import Head from "next/head";
import styled from "styled-components";
import { Inter } from "@next/font/google";
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <Title>Proteinus</Title>
      </Head>
      <Main>
        <div>ProteinusLp</div>
      </Main>
    </>
  );
}

const Main = styled.main``;
const Title = styled.div``;
