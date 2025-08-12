import { Send, Mail, User } from "lucide-react";
import ModalMenu from "../components/ModalMenu";
import "./Contato.css"; // Importe o arquivo CSS criado

function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formsubmit.co/luisoctavio0425@gmail.com", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          alert("Mensagem enviada com sucesso!");
          form.reset();
        } else {
          alert("Ocorreu um erro ao enviar sua mensagem.");
        }
      })
      .catch(() => {
        alert("Erro na conexão. Tente novamente.");
      });
  };

  return (
    <>
      <ModalMenu />
      <div className="contato-container">
        <h1 className="contact-title"> Entre em Contato </h1>
        <div className="red-line-contact"></div>
        <div className="form-container">
          <h3 className="send-message">Envie uma Mensagem</h3>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />

            <div class="form-grid">
              <div>
                <label for="name" class="form-label">
                  Nome{" "}
                  <span class="icon">
                    {" "}
                    <User />{" "}
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="form-input"
                />
              </div>

              <div>
                <label for="email" class="form-label">
                  Email{" "}
                  <span class="icon">
                    {" "}
                    <Mail />{" "}
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="form-input"
                />
              </div>
            </div>

            <div class="message">
              <label for="message" class="form-label">
                Mensagem
                <span className="icon">
                  {" "}
                  <Send />
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                class="message-textarea"
              ></textarea>
            </div>

            <button type="submit" className="send-button">
              <span>Enviar Mensagem</span>
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contato;
