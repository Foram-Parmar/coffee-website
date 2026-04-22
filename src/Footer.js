import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h3>☕ Coffee Corner</h3>
        <p>Serving happiness in every cup 💖</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/products">Products</a>
          <a href="/login">Sign In</a>
          <a href="/register">Sign Up</a>
        </div>

        <p className="copyright">
          © 2026 Coffee Corner | All Rights Reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;