import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://www.instagram.com/fienfoundation/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/fienfoundation/">
              <i className="fa fa-facebook-official"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="/#about-us">About us</a>
            </li>
            <li className="list-inline-item">
              <a href="/#our-team">Our team</a>
            </li>
            <li className="list-inline-item">
              <a href="/blog">Student's stories</a>
            </li>
            <li className="list-inline-item">
              <a href="/careers">Volunteer/Internship</a>
            </li>
            <li className="list-inline-item">
              <a href="/programs">Programs</a>
            </li>
          </ul>
          <p className="copyright">FIEN Foundation © 2022</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
