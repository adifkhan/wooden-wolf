import React from "react";
import style from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.footer_contents}>
        <div className="logo">
          <h1>Wooden olf</h1>
        </div>
        <div className={style.content_wrapper}>
          <h2>Out Products</h2>
          <div className={style.contents}>
            <a href="/">Acrylic Facemount</a>
            <a href="/">Panoramics</a>
            <a href="/">Plaquemount</a>
            <a href="/">Floatmount</a>
            <a href="/">All Products</a>
          </div>
        </div>
        <div className={style.content_wrapper}>
          <h2>Create Your Art</h2>
          <div className={style.contents}>
            <a href="/">Upload Your Photo</a>
            <a href="/">Get $20</a>
            <a href="/">Gift Cards</a>
            <a href="/">Ideas for Your Wall</a>
          </div>
        </div>
        <div className={style.content_wrapper}>
          <h2>Who We Are</h2>
          <div className={style.contents}>
            <a href="/">Our Story</a>
            <a href="/">Blog</a>
          </div>
        </div>
        <div className={style.content_wrapper}>
          <h2>Need Some Help?</h2>
          <div className={style.contents}>
            <a href="/">Size Advice</a>
            <a href="/">Prices</a>
            <a href="/">FAQs</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <p>Copyrights &copy; 2023 | All Rights Reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
