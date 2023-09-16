import style from "../styles/home.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import CountDownTimer from "../components/CountDownTimer";

const Home = () => {
  return (
    <section className={style.home_container}>
      <div className={style.bg_image}></div>
      <div className={style.social_icons}>
        <a href="/">
          <FaFacebookF />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaLinkedinIn />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
      </div>
      <div className={style.home_content}>
        <h1 className={style.home_title}>Comming Soon</h1>
        <p>
          Our website is currently under construction. We are working on and
          will get back in
        </p>
        <CountDownTimer duration={5 * 24 * 60 * 60 * 1000} />
        <div className={style.subscription_wrapper}>
          <p>Subscribe to get notified when we are back . . !</p>
          <div className={style.subscription}>
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="button">Notify Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
