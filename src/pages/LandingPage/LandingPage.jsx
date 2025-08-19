import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPageCSS.css"; // Assuming you have a CSS file for styles
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FaGift } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import whyDadioImage from "../../assets/whydadioimggroup.png";
import closeQuote from "../../assets/icon1.png";
import openQuote from "../../assets/icon2.png";
import HomeExploreSection from "../../components/HomeExploreSection";
import Navbar from "../../components/Navbar/Navbar";
import noUser from "../../assets/NoUser.png";
import findUser from "../../assets/Find_User_Male.png";
import audioWave from "../../assets/Audio_Wave.png";
import communicationIcon from "../../assets/Communication.png";
import Testimonial from "../../components/TestimonialContainer/Testimonial";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const handleDownloadNavigation = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.dadio.app&pcampaignid=web_share";
  };
  const navigate = useNavigate();

  return (
    <>
      <div class="bg-container">
        <div>
          <Navbar />
        </div>
        <div className="home-section" id="home">
          <div className="content-container">
            <div className="tagline-container">
              <img
                src={openQuote}
                alt="Opening quote"
                className="quote-icon open"
              />
              <span className="tagline">Hear. Connect. Express!</span>
              <img
                src={closeQuote}
                alt="Closing quote"
                className="quote-icon close"
              />
            </div>
            <h1 className="main-heading">Dating Starts With an Audio</h1>
            <div className="button-group">
              <button
                className="download-btn"
                onClick={handleDownloadNavigation}
              >
                <HiOutlineDownload style={{ marginRight: "8px" }} />
                Download Now
              </button>
              <button className="join-btn" onClick={() => navigate("/login")}>
                Join now
              </button>
            </div>
          </div>

          <section className="features-section">
            <div className="feature">
              <MdOutlineRecordVoiceOver className="feature-icon" />
              <h3>Voice</h3>
              <p>
                Every profile includes a voice intro so you can truly hear the
                person behind the photo.
              </p>
            </div>
            <div className="feature">
              <IoIosChatbubbles className="feature-icon" />
              <h3>Chat</h3>
              <p>
                Message anyone nearby instantly and start real conversations.
              </p>
            </div>
            <div className="feature">
              <FiPhoneCall className="feature-icon" />
              <h3>Call</h3>
              <p>
                Connect through real-time audio calls and talk your heart out.
              </p>
            </div>
            <div className="feature">
              <FaGift className="feature-icon" />
              <h3>Send Gifts</h3>
              <p>
                Express your vibe with digital gifts and make connections
                memorable.
              </p>
            </div>
          </section>
        </div>

        <div class="why-dadio" id="about">
          <div class="image-container">
            <img
              class="why-dadio-img"
              src={whyDadioImage}
              alt="image"
            />
          </div>
          <div class="why-dadio-right-card">
            <h1 class="why-dadio-heading">Why Dadio?</h1>
            <p class="why-dadio-para">
              Dadio isn’t just another dating app — it’s a voice-first platform
              built for real connections. With audio profiles, free messaging,
              and genuine people near you, Dadio makes dating more human, more
              honest, and more fun.
            </p>
            <div class="right-top-sub-card-con">
              <div class="right-top-sub-card">
                <img src={audioWave} alt="img1" className="subcard-img" />
                <h3>Audio-First Dating Experience</h3>
                <p>
                  Profiles come with voice introductions so you can feel the
                  personality behind the photo.
                </p>
              </div>
              <div class="right-top-sub-card">
                <img src={noUser} alt="img1" className="subcard-img" />
                <h3>No Fake Profiles</h3>
                <p>
                  Hearing someone’s voice makes it easier to spot real people
                  and avoid fakes.
                </p>
              </div>
            </div>
            <div class="right-top-sub-card-con">
              <div class="right-top-sub-card">
                <img
                  src={communicationIcon}
                  alt="img1"
                  className="subcard-img"
                />
                <h3>Free & Open Communication</h3>
                <p>
                  Send unlimited messages and connect without restrictions or
                  subscriptions.
                </p>
              </div>
              <div class="right-top-sub-card">
                <img src={findUser} alt="img1" className="subcard-img" />
                <h3>Discover People Nearby</h3>
                <p>
                  Find genuine connections around you with filters for location,
                  gender, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <HomeExploreSection />
        </div>
        <Testimonial />
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
