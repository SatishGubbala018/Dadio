import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import xLogo from "../../assets/X.png";
import instagramLogo from "../../assets/Instagram.png";
import facebookLogo from "../../assets/Facebook.png";
import DadioLogo from "../../assets/logo.png";
import playstoreicon from "../../assets/Google_Play.png";
import appleIcon from "../../assets/Apple_Inc.png";
import mobileLogo from "../../assets/Group_49.png";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <>
      <div class="get-app-section">
        <div class="get-app-left-container">
          <h1>Get the Mobile App Today!</h1>
          <p>
            Get the Dadio app and meet real people who share your interests.
            Start connecting today!
          </p>
          <div class="playstore-appstore-con">
            <div
              class="playstore-button hover:scale-102"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.dadio.app&pcampaignid=web_share&pli=1",
                  "_blank"
                )
              }
            >
              <img
                className="playstore-icon"
                src={playstoreicon}
                alt="playstore image"
              />
              <p>
                GET IT ON <br />
                <span>Google Play</span>
              </p>
            </div>
            <button class="playstore-button hover:scale-102">
              <img
                className="apple-icon"
                src={appleIcon}
                alt="apple image"
              />
              <p>
                GET IT ON <br />
                <span>App Store</span>
              </p>
            </button>
          </div>
        </div>
        <div class="card-con">
          <img
            src={mobileLogo}
            alt="card-icon"
            className="get-app-card-icon"
          />
        </div>
      </div>
      <div class="footer" id="contact">
        <div class="footer-top-card">
          <div class="footer-top-right-card">
            <img
              src={DadioLogo}
              alt="dadio logo"
              className="footer_didiologo"
            />
            <p>
              {" "}
              Dadio is the world’s first audio-first dating app where every
              profile starts with a voice. Connect with real people nearby
              through voice intros, free chats, and genuine conversations.
            </p>
            <div className="logos-container">
              <a
                href="https://www.instagram.com/dadiodating/"
                className="soicalmedia-icons"
              >
                <img src={instagramLogo} alt="insta logo" />
              </a>
              <a href="https://www.facebook.com/dadioapp/">
                <img src={facebookLogo} alt="facebook logo" />
              </a>
              <a href="https://x.com/dadioapp">
                <img src={xLogo} alt="x logo" />
              </a>
            </div>
          </div>
          <div class="footer-top-left-card">
            <div className="footer-top-left-card-con">
              <h3>Company</h3>
              <p onClick={() => navigate("/contact")}>ContactUs</p>
              <p onClick={() => navigate("/about")}>About Us</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>
            <div>
              <h3>Resources</h3>
              <p>FAQ’S</p>
              <p onClick={() => navigate("/child-safety-policy")}>
                Chlid Sexual Explotation And Abuse Policy
              </p>
              <p onClick={() => navigate("/privacy-policy")}>
                Privacy & Policy
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div class="footer-bottom-card">
          <p>© 2020 Dadio. All RIghts Reserved.</p>
          <div class="subscribe-card">
            <h2>Subscribe</h2>
            <input placeholder="Enter Email Id" class="footer-inputbox" />
            <button class="footer-send-button">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
