/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
export default function Home() {
  return (
    <>
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/nobranding/1500x600_Hero-Tall_ft._CB417073813_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB657360537_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home__row">
        <Product
          id="3215"
          title="Código Limpio / Clean Code : Robert C. Martin"
          price={9361}
          rating={4}
          image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        />
        <Product
          id="6987"
          title="Book : Javascript: Javascript Programming For Absolute Be..."
          price={1349}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_794903-MLA26289240932_112017-O.webp"
        />
      </div>

      <div className="home__row">
        <Product
          id="6457"
          title="Book : Learning React Native: Building Native Mobile Apps..."
          price={11151}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_835599-MLA26239270219_102017-O.webp"
        />
        <Product
          id="6547"
          title="Book : React For Real Front-end Code, Untangled - Fischer,.."
          price={4720}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_960888-MLA30864694005_052019-O.webp"
        />
        <Product
          id="3259"
          title="Book : React Design Patterns And Best Practices Build Easy.."
          price={4800}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_949721-MLA29020525244_122018-O.webp"
        />
      </div>

      <div className="home__row">
        <Product
          id="9865"
          title="Book : Python Crash Course The Introduction To Programming.."
          price={4951}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_678176-MLA31546487400_072019-O.webp"
        />
      </div>
    </>
  );
}
