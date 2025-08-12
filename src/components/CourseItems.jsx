import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./CourseItems.css";

const cursos = [
  {
    title: "Curso Básico Full-Stack",
    provider: "Hashtag Treinamentos",
    project:
      "Curso básico de Fullstack, aprendendo habilidades nas principais tecnologias do mercado",
    image: "/img/Certificado-Jornada-Fullstack.png",
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "Mongo",
      "Express",
      "Git/Github",
    ],
  },
];

function CurseItems() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verifica no carregamento inicial
    checkIsMobile();

    // Adiciona listener para mudanças no tamanho da tela
    window.addEventListener('resize', checkIsMobile);

    // Cleanup do listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const openModal = (curso) => {
    setSelectedCourse(curso);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="course-container">
      <h1 className="course-accomplished">Cursos Realizados</h1>
      <div className="red-line-about" />

      <Swiper
        direction={isMobile ? "horizontal" : "vertical"}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 2}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[Autoplay]}
        style={{ 
          height: isMobile ? "500px" : "990px", 
          marginTop: "5px",
          width: "100%"
        }}
      >
        {cursos.map((curso, index) => (
          <SwiperSlide key={index}>
            <div className="course-box">
              <div className="course-card">
                <p className="course-title">
                  {curso.title} | {curso.provider}
                </p>

                <p className="course-project">{curso.project}</p>
                <div>
                  <button
                    onClick={() => openModal(curso)}
                    className="bg-transparent underline text-white hover:text-gray-300"
                  >
                    Ver Certificado
                  </button>
                </div>
                <div className="course-skills">
                  {curso.languages?.map((language, i) => (
                    <p key={i} className="skill">
                      {language}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && selectedCourse && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img
              src={selectedCourse.image}
              alt="Certificado"
              className="md:w-[50vw] w-[95vw] m-auto object-cover rounded-lg"
            />

            <button onClick={closeModal} className="modal-close-button">
              Fechar Imagem
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurseItems;