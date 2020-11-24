import React from "react";
import "./style.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header-logo">
        <a href="/">
          <img
            src="https://www.agentmarketing.co.uk/wp-content/uploads/2016/03/Netflix_2014_logo.svg_.png"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="Perfil"
          />
        </a>
      </div>
    </header>
  );
};
