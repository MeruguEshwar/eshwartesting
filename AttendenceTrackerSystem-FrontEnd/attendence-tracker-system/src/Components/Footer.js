import React from "react";
import india from '../../src/Images/india.png'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footerheader">
            <img src={india} className="indiapng " alt="networkerror"/>
            <p className="text-center text-primary fs-1 fw-bold">Made with love in India.</p>
          </div>
          <div className="row">
            <div className="col-sm-3 col-md-3 mt-5 mb-5">
              <h3>COMPANY</h3>
              <ul>
                <li>
                  <a href="#" className="text-decoration-none">
                    Web design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 item mt-5 mb-5">
              <h3>TOOLS</h3>
              <ul>
                <li>
                  <a href="#" className="text-decoration-none">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 item mt-5 mb-5">
              <h3>COMPANY</h3>
              <ul>
                <li>
                  <a href="#" className="text-decoration-none">
                    Web design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 item mt-5 mb-5">
              <h3>Support</h3>
              <ul className="text-decoration-none">
                <li>
                  <a href="#" className="text-decoration-none">
                    GetSupport
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">Company Name © 2018</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
