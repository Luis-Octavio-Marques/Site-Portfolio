// components/ModalMenu.jsx
import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import "./ModalMenu.css"; // Importando o CSS do ModalMenu

const ModalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mostrarBotaoB, setMostrarBotaoB] = useState(true);

  const esconderBotaoB = () => {
    setMostrarBotaoB(false);
  };

  const mostrarbotaoB = () => {
    setMostrarBotaoB(true);
  };

  const handleCloseModal = () => {
    setIsClosing(true); // Inicia a animação de saída
    setTimeout(() => {
      setIsOpen(false); // Após a animação, fecha o modal
      setIsClosing(false); // Reseta o estado de fechamento
      mostrarbotaoB();
    }, 300); // Ajuste a duração para corresponder à sua animação CSS
  };

  const links = {
    link: 
      "block relative border-b border-white/20 pb-2 overflow-hidden group",

    span_primary:
      "inline-block transform transition-transform duration-300 group-hover:-translate-y-1",

    span_secundary:
      "absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full",
  };

  return (
    <div className="font-oswald">
      {/* Botão de abrir */}
      {mostrarBotaoB && (
        <button
          className="menu-button"
          onClick={() => {
            setIsOpen(true);
            esconderBotaoB();
          }}
        >
          MENU
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div
          className={`modal-container ${
            isClosing ? "modal-closing" : "modal-opening"
          }`}
        >
          {/* Conteúdo do menu */}
          <div className="modal-content">
            <nav className="modal-nav">
              <div className="nav-links">
                <Link className={links.link} to="/">
                  <span className={links.span_primary}>Início</span>
                  <span className={links.span_secundary}></span>
                </Link>

                <Link className={links.link} to="/sobre">
                  <span className={links.span_primary}>Sobre Mim</span>
                  <span className={links.span_secundary}></span>
                </Link>

                <Link className={links.link} to="/portifolio">
                  <span className={links.span_primary}>Portifólio</span>
                  <span className={links.span_secundary}></span>
                </Link>

                <Link className={links.link} to="/contato">
                  <span className={links.span_primary}>Contato</span>
                  <span className={links.span_secundary}></span>
                </Link>

                <button className="close-button" onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>

              {/* Botão fechar */}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalMenu;
