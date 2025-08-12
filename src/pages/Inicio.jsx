import React from "react";
import { useState, useRef } from "react";
import ModalMenu from "../components/ModalMenu";
import "./Inicio.css"; // Importe o arquivo CSS criado

function Inicio() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText("luisoctavio0425@gmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500);
  };

  const imgRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("translate(0px, 0px)");

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;

    const { width, height, left, top } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const moveX = x * 0.2; // ajuste a intensidade aqui
    const moveY = y * 0.2;

    setTransformStyle(`translate(${moveX}px, ${moveY}px)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("translate(0px, 0px)");
  };

  return (
    <>
      <ModalMenu />
      <div className="inicio-container">
        <div className="content-flex">
          <div className="left-section">
            <h1 className="left-title"> Luís Octávio</h1>
            <p className="left-description"> Desenvolvedor Front-End Junior</p>
            <div className="red-line-start-1"></div>
            <p className="left-text">
              {" "}
              Sou um desenvolvedor front-end júnior dando os primeiros passos no
              universo da programação. Tenho me dedicado a transformar ideias em
              sites visualmente atrativos, modernos e funcionais, sempre
              buscando unir criatividade com boas práticas de desenvolvimento.
              Neste portfólio, você poderá conferir uma seleção dos projetos que
              venho desenvolvendo — desde criações pessoais, onde exploro minha
              imaginação e aprendizados, até trabalhos profissionais que
              demonstram minha evolução técnica e compromisso com resultados de
              qualidade.{" "}
            </p>
            <div className="social-icons">
              <div className="icons-images-container">
                <button onClick={copiarEmail}>
                  <img
                    className="icon-image"
                    src="/img/gmail-icon.png"
                    alt="Copiar e-mail"
                  />
                </button>

                {showTooltip && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                    Copiado!
                  </span>
                )}
              </div>

              <a
                href="https://www.instagram.com/marques_0425/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon-image"
                  src="/img/instagram-icon.png"
                  alt="Instagram"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/luis-octavio-marques-developer/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon-image"
                  src="/img/linkedin-icon.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div
            className="image-section"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imgRef}
          >
            <img
              className="profile-image"
              src="/img/imagem-perfil.png"
              alt="Foto de Perfil"
              style={{ transform: transformStyle }}
            />
          </div>
          <div className="right-section">
            <p className="right-text">
              {" "}
              Estou começando na área de programação e venho aprendendo o básico
              de front-end, e me tornando mais experiente em algumas linguagens
              como HTML, CSS e um pouco de JavaScript. Gosto de brincar com
              layouts, testar efeitos visuais e aprender como deixar os sites
              mais bonitos e fáceis de usar. Cada projeto é uma chance de
              descobrir algo novo e me divertir enquanto aprendo. Para saber
              mais, clique na aba de "Sobre mim" no botão acima{" "}
            </p>
            <div className="red-line-start-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
