import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// About Us page for the Dadio application.
// It details the application's unique features, mission, and how it differentiates itself from other dating apps.

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8 md:p-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
          <h1 className="text-3xl md:text-3xl font-extrabold text-center text-[#009dff] mb-8">
            About Dadio
          </h1>

          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Dadio is the world's first dating app with audio profiles. Every
              person has an audio introduction, so you can not only see a person
              but also hear their voice. You can now chat with everyone for
              free! You can see all the persons nearby with their distance,
              name, and gender. If you like someone, simply click on the heart
              button or send a text message—it's all free. If you want to chat
              on audio, you can simply call the person. However, audio calls are
              a paid feature. Simply add as little as Rs 10 to start enjoying
              the audio call / audio chat feature.
            </p>

            <p>
              In other dating apps, you often have to become a premium member
              before you can send any message to other users. Dadio is the first
              FREE dating app, where you can send unlimited free text messages
              to anyone without paying any money.
            </p>

            <p>
              On Dadio, you can search profiles with images, name, gender,
              distance, etc., and can simply send them a free text message to
              start the conversation.
            </p>
          </div>

          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mt-10 mb-6 ">
            The Unique Features of Dadio App are as below:
          </h2>

          <div className="space-y-8">
            {/* Feature 1: Audio Profiles */}
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#009dff] mr-4 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.899a9 9 0 010 12.728M5.88 12.518L9.5 16.138m0-7.278l-3.62 3.62m3.62 3.62L5.88 16.138m1.285-1.285a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707z"
                />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Audio Profiles
                </h3>
                <p className="text-gray-600">
                  Every profile on Dadio has an Audio introduction, which proves
                  that the profile is of a real person, unlike other apps that
                  often have a high number of fake profiles.
                </p>
              </div>
            </div>

            {/* Feature 2: Free Text Messages */}
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#009dff] mr-4 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Free Text Messages
                </h3>
                <p className="text-gray-600">
                  You can send text messages to other users without buying any
                  expensive membership plans.
                </p>
              </div>
            </div>

            {/* Feature 3: Audio Calling */}
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#009dff] mr-4 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Audio Calling
                </h3>
                <p className="text-gray-600">
                  The best feature of the Dadio app is audio calling, where you
                  can talk to anyone on a call without revealing your number.
                  This is an app-to-app calling feature and costs only Rs 3 per
                  minute.
                </p>
              </div>
            </div>

            {/* Feature 4: Digital Gifts */}
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#009dff] mr-4 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4M4 12L7 9M4 12L7 15"
                />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Digital Gifts
                </h3>
                <p className="text-gray-600">
                  You can impress your friends by sending them digital gifts.
                  You can buy and send digital gifts to your partners on the
                  Dadio app, with gifts starting from as low as Rs 10. The
                  interesting part is that the receiver of the gift gets 70% of
                  the gift value in points.
                </p>
              </div>
            </div>

            {/* Feature 5: Random Call */}
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#009dff] mr-4 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Random Call
                </h3>
                <p className="text-gray-600">
                  You can also try your luck with the random calling feature,
                  where you can talk to any random person available at that
                  time. This is the best feature to connect with interesting new
                  people.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-4 text-lg text-gray-700">
            <p>
              We try to ensure that there are NO FAKE accounts in the Dadio
              Dating app, as every profile has an audio introduction, so you can
              hear the audio introduction of every person in the app.
            </p>
            <p>
              Dadio is a "Made in India" dating app. This is the first Indian
              dating app with all the unique features to help you find lovely
              people. Have fun!
            </p>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default About;
