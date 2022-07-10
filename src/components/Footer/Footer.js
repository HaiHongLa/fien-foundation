import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="https://www.instagram.com/fienfoundation/">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/fienfoundation/">
              <i class="fa fa-facebook-official"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="/">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="/#about-us">About us</a>
            </li>
            <li class="list-inline-item">
              <a href="/#our-team">Our team</a>
            </li>
            <li class="list-inline-item">
              <a href="/blog">Student's stories</a>
            </li>
            <li class="list-inline-item">
              <a href="/careers">Volunteer/Internship</a>
            </li>
            <li class="list-inline-item">
              <a href="/programs">Programs</a>
            </li>
          </ul>
          <p class="copyright">FIEN Foundation © 2022</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
