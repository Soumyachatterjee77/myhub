const PageFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are a company dedicated to providing the best.
            Our team is committed to excellence and customer.
          </p>
        </div>
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook" /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" /> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default PageFooter;
