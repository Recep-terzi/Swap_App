import React from "react";
import "./Footer.Module.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Hakkımızda</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              deserunt esse vero quod. Dolorem, iste.
            </p>
          </div>

          <div className="col-sm-12 col-md-6 hizli-link">
            <h6>Hızlı Linkler</h6>
            <ul className="footer-links">
              <li>
                <a href="/blog">Ürünler</a>
              </li>

              <li>
                <a href="/calendar">Giriş</a>
              </li>
              <li>
                <a href="/contact">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a
                href="https://github.com/Recep-terzi"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "18px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Pyson✓{" "}
              </a>
              .
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitch"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
