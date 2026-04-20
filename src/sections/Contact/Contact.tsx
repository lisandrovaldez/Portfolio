import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";

const EMAILJS_SERVICE_ID = "service_d9a8647";
const EMAILJS_TEMPLATE_ID = "template_wv2uiq7";
const EMAILJS_PUBLIC_KEY = "W9fg6tYZ6k9j2jbE9";

type Status = "idle" | "loading" | "success" | "error";

const SONGS = [
  {
    title: "There Is A Light That Never Goes Out",
    artist: "The Smiths",
    color: "#ff4d6d",
  },
  {
    title: "Showbiz",
    artist: "Muse",
    color: "#f4a261",
  },
  {
    title: "Not The Same Anymore",
    artist: "The Strokes",
    color: "#e9c46a",
  },
  {
    title: "Slow Dancing In A Burning Room",
    artist: "John Mayer",
    color: "#a78bfa",
  },
  { title: "Chalk Outline", artist: "Three Days Grace", color: "#38bdf8" },
  {
    title: "I Wanna Be Yours",
    artist: "Artic Monkeys",
    color: "#4ade80",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [songIndex, setSongIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { ref, inView } = useInView();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSongIndex((prev) => (prev + 1) % SONGS.length);
        setFade(true);
      }, 400);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const song = SONGS[songIndex];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact reveal ${inView ? "reveal--visible" : ""}`}
    >
      <div className="contact__header">
        <p className="contact__tag">{"// contacto"}</p>
        <h2 className="contact__title">Hablemos</h2>
        <p className="contact__subtitle">
          Estoy buscando mi primer empleo como desarrollador. Si tenés una
          propuesta o simplemente querés charlar, escribime.
        </p>
      </div>

      <div className="contact__content">
        <div className="contact__left">
          <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label">Nombre</label>
              <input
                className="contact__input"
                type="text"
                name="from_name"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="contact__field">
              <label className="contact__label">Email</label>
              <input
                className="contact__input"
                type="email"
                name="from_email"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="contact__field">
              <label className="contact__label">Mensaje</label>
              <textarea
                className="contact__input contact__textarea"
                name="message"
                placeholder="Tu mensaje..."
                rows={5}
                required
              />
            </div>

            <button
              className="contact__btn"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p className="contact__feedback contact__feedback--success">
                Mensaje enviado correctamente, te respondo pronto.
              </p>
            )}
            {status === "error" && (
              <p className="contact__feedback contact__feedback--error">
                Algo falló, intentá de nuevo o escribime directo al email.
              </p>
            )}
          </form>
          <div className="contact__socials">
            <div className="contact__card">
              <div className="contact__card-header">
                <span className="contact__card-dot contact__card-dot--red"></span>
                <span className="contact__card-dot contact__card-dot--yellow"></span>
                <span className="contact__card-dot contact__card-dot--green"></span>
                <span className="contact__card-title">status.ts</span>
              </div>
              <div className="contact__card-body">
                <p>
                  <span className="contact__t-key">ubicacion</span>:{" "}
                  <span className="contact__t-string">"Buenos Aires, AR"</span>
                </p>
                <p>
                  <span className="contact__t-key">disponibilidad</span>:{" "}
                  <span className="contact__t-bool">true</span>
                </p>
                <p>
                  <span className="contact__t-key">modalidad</span>:{" "}
                  <span className="contact__t-string">"remoto"</span>
                </p>
                <p>
                  <span className="contact__t-key">respondeTarda</span>:{" "}
                  <span className="contact__t-string">"menos de 24hs"</span>
                </p>
              </div>
            </div>

            <div className="contact__socials">
              <p className="contact__links-title">Encontrame en</p>
              <a
                href="https://github.com/lisandrovaldez"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <SiGithub size={20} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/lisandrovaldez"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>
              <a href="mailto:tu@email.com" className="contact__link">
                <span className="contact__link-icon">@</span>{" "}
                lisandroval09@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="contact__right">
          <div className="now-playing" style={{ borderColor: song.color }}>
            <div className="now-playing__header">
              <span className="now-playing__label">{"// now playing"}</span>
            </div>

            <div
              className={`now-playing__body ${
                fade ? "now-playing__body--visible" : ""
              }`}
            >
              <div
                className="now-playing__avatar"
                style={{
                  background: song.color + "22",
                  borderColor: song.color + "44",
                }}
              >
                <span
                  className="now-playing__note"
                  style={{ color: song.color }}
                >
                  ♪
                </span>
              </div>

              <div className="now-playing__info">
                <div
                  className={`now-playing__title-wrapper ${song.title.length > 29 ? "now-playing__title-wrapper--long" : ""}`}
                >
                  <span
                    key={song.title}
                    className={`now-playing__title ${song.title.length > 29 ? "now-playing__title--marquee" : ""}`}
                    style={{ color: song.color }}
                  >
                    {song.title}
                  </span>
                </div>
                <span className="now-playing__artist">{song.artist}</span>
              </div>
            </div>

            <div className="now-playing__progress">
              <div className="now-playing__bar-track">
                <div
                  className="now-playing__bar-fill"
                  style={{ background: song.color }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
