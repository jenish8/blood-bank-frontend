import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>DAIICT BLOOD BANK</h4>
            <h3 className="list-unstyled">
              <li>91-9157168815</li>
              <li>Reliance Cross Rd</li>
              <li>Gandhinagar, Gujarat 382007</li>
            </h3>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>Blood bank</li>
              <li>Blood test</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>Blood bank</li>
              <li>Blood test</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Jainam Shah | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
