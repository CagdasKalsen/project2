import React from "react";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div>
      <div className="profile">
        <div className="cagdas">
          <h4 className="gitname">Cagdas Kalsen</h4>
          <a
            href="https://github.com/CagdasKalsen"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cagdaskalsensoftwareengineer/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="brandon">
          <h4 className="gitname">Brandon Tobin</h4>
          <a
            href="https://github.com/BrandonTobin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brandontobinswe/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
