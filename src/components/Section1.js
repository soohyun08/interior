import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./section1.scss";

import { Navigation, Pagination } from "swiper";

function Section1() {
  const path = process.env.PUBLIC_URL;

  const lis = [
    { id: 1, name: "리모델링", span: "remodeling", svg: " refresh " },
    { id: 2, name: "키친 & 바스", span: "kitchen & bath", svg: " range_hood " },
    { id: 3, name: "빌트인수납", span: "builtin", svg: " room_preferences" },
    { id: 4, name: "가구", span: "furniture", svg: " bed " },
    { id: 5, name: "리모델링", span: "remodeling", svg: " refresh " },
  ];

  return (
    <div className="section1">
      <article>
        <Swiper
          pagination={true}
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={path + "/images/slider.jpg"} alt="img1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={path + "/images/slider.jpg"} alt="img2" />
          </SwiperSlide>
        </Swiper>

        <div className="txt">
          <p>리모델링하기 가장 쉬운 방법</p>
          <h2>인테리어 케이와 함께</h2>
          <p>나눔경영, 상생과 나눔을 통해</p>
          <p>미래세대를 위한 사회적 가치를 창출합니다.</p>
        </div>

        <ul className="menu">
          {lis.map((item) => (
            <li key={item.id}>
              <Link to="/">
                <h3>
                  {item.name}
                  <span>{item.span}</span>
                </h3>
                <span className="material-symbols-outlined">{item.svg}</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default Section1;
