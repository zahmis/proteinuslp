import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

export default function Home() {
  return (
    <>
      <Main>
        <Navbar />
        <SlideWrapper>
          <Splide
            options={{
              type: "loop",
              gap: "1rem",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              width: 1000,
              height: "100%",
            }}
            hasTrack={false}
            aria-label="計画中"
          >
            <SplideTrack>
              <SplideSlide key="proto1.jpg">
                <Image
                  src="/proto1.jpg"
                  alt="Picture of the author"
                  width={1000}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </SplideSlide>
              <SplideSlide key="proto2.jpg">
                <Image
                  src="/proto2.jpg"
                  alt="Picture of the author"
                  width={1200}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </SplideSlide>
              <SplideSlide key="proto3.jpg">
                <Image
                  src="/proto3.jpg"
                  alt="Picture of the author"
                  width={1200}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </SplideSlide>
              <SplideSlide key="proto4.jpg">
                <Image
                  src="/proto4.jpg"
                  alt="Picture of the author"
                  width={1000}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </SplideSlide>
              <SplideSlide key="proto6.jpg">
                <Image
                  src="/proto6.jpg"
                  alt="Picture of the author"
                  width={1000}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </SplideSlide>
              <SplideSlide key="proto7.jpg">
                <Image
                  src="/proto7.jpg"
                  alt="Picture of the author"
                  width={1000}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </SlideWrapper>
      </Main>
    </>
  );
}

const Main = styled.main``;
const Title = styled.div``;
const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
