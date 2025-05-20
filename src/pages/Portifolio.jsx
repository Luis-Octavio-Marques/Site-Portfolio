import React from "react";
import ModalMenu from "../components/ModalMenu";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./Portifolio.css"; // Importe o arquivo CSS criado

const images = [
  {
    title: "Site de Previsão do Tempo",
    src: "/img/image-web1.png",
    description:
      "Um site que mostra o clima em tempo real de qualquer lugar do mundo.",
    link: "https://site-previsao-tempo-tau.vercel.app",
  },
  {
    title: "Player de Música",
    src: "/img/image-web2.png",
    description:
      "Um replica do player do Spotify com algumas músicas de gosto pessoal.",
    link: "https://loquacious-dodol-918a40.netlify.app",
  },
  {
    title: "Pedra, Papel e Tesoura",
    src: "/img/image-web3.png",
    description: "Jogo clássico do Pedra Papel Tesoura, onde você desafia o computador e sua inteligência.",
    link: "https://luis-octavio-marques.github.io/Site-Pedra-Papel-Tesoura/",
  },
  {
    title: "Jogo da Velha",
    src: "/img/image-web4.png",
    description: "O famoso Jogo da Velha para desafiar e se divertir com seu amigo.",
    link: "https://luis-octavio-marques.github.io/Site-Jogo-da-Velha/",
  },
];

function Portifolio() {
  return (
    <>
      <ModalMenu />
      <div className="portifolio-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1500}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper-slider"
        >
          {images.map((images, index) => (
            <SwiperSlide key={index} className="rounded-[50px]">
              <div
                style={{ backgroundImage: `url(${images.src})` }}
                className="image-slide"
              >
                <div className="web-container">
                  <h1 className="web-title">{images.title}</h1>
                  <p className="web-description"> {images.description} </p>
                  <div>
                    <Link
                      to={images.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="web-button">Visitar o Site</button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Portifolio;
