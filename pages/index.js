import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import HomeCarouselData from "../components/HomeCarouselData";
import styled from "@emotion/styled";
import { useState } from "react";
export default function Home() {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setfirst(next),
  };

  const [first, setfirst] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>next slick slider</title>
        <meta name="description" content="pankaj verma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Hi I am carousel</div>
        <Slider {...settings}>
          {HomeCarouselData?.map((data, index) => (
            <SlideDiv style={{ height: "50vh" }} key={index}>
              <img src={data?.path} className={styles.image} />
            </SlideDiv>
          ))}
        </Slider>
        <div
          style={{ marginTop: "100px", fontWeight: "800", fontSize: "50px" }}
        >
          {" "}
          {first}
        </div>
      </main>
    </div>
  );
}

const SlideDiv = styled.div`
  height: 80vh;
`;
