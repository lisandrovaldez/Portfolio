import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__name">
        <span className="footer__bracket">&lt;</span>
        Lisandro Valdez
        <span className="footer__bracket"> /&gt;</span>
      </span>

      <span className="footer__divider">—</span>

      <span className="footer__copy">Diseñado y construido por mí</span>

      <div className="footer__links">
        <a
          href="https://github.com/lisandrovaldez"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          <SiGithub size={16} />
        </a>
        <a
          href="https://linkedin.com/in/lisandrovaldez"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          <FaLinkedin size={16} />
        </a>
      </div>

      <span className="footer__year">2025</span>
    </footer>
  );
}
