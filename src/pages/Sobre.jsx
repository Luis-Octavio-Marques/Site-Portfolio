import React from "react";
import ModalMenu from "../components/ModalMenu";
import CourseItems from "../components/CourseItems";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <ModalMenu />
      <div className="sobre-container">
        <div className="about-container">
          <h1 className="about-title">Sobre Mim</h1>
          <div className="red-line-about-1"></div>
          <p className="about-text">
            {" "}
            Buscando me tornar um desenvolvedor front-end, com foco em React.js.
            Embora ainda não tenha experiência profissional, dedico-me
            intensamente ao aprendizado autodidata e à prática através de
            projetos pessoais. Minha jornada começou com HTML, CSS e JavaScript,
            mas me apaixonei pelo ecossistema React e suas infinitas
            possibilidades. Estou constantemente aprendendo novas tecnologias e
            aplicando esse conhecimento em projetos práticos para desenvolver
            minhas habilidades.
          </p>
          <div className="red-line-about-2"></div>
          <div>
            <h3 className="technical-title"> Habilidades </h3>
            <div>
              <p className="technology-tools"> Tecnologias e Ferramentas </p>
              <div className="technology-container">
                <p className="html"> HTML </p>
                <p className="css"> CSS </p>
                <p className="javascript"> JavaScript </p>
                <p className="vite"> Vite </p>
                <p className="git-github"> Git/GitHub </p>
                <p className="soft-skills"> Soft Skills </p>{" "}
              </div>
            </div>
            <div>
              <p className="library-frameworks"> Bibliotecas & Frameworks </p>
              <div className="frameworks-container">
                <p className="react-js"> React.js </p>
              </div>
            </div>
          </div>
        </div>
        <CourseItems />
      </div>
    </>
  );
}

export default Sobre;
