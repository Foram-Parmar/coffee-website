import React from "react";
import pic1 from "./img/pic1.jpg";
import pic2 from "./img/pic2.jpg";
import pic3 from "./img/pic3.jpg";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Coffee Corner ☕</strong> — A place where every sip
          tells a story. We serve freshly brewed coffee made with love.
        </p>
      </div>

      <div className="about-images">
        <div className="card">
          <img src={pic1} alt="Coffee 1" />
          <h3>Fresh Coffee Beans</h3>
        </div>

        <div className="card">
          <img src={pic2} alt="Coffee 2" />
          <h3>Perfect Brew</h3>
        </div>

        <div className="card">
          <img src={pic3} alt="Coffee 3" />
          <h3>Cafe Vibes</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
