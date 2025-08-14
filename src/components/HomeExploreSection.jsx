import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./HomeExploreSectionCss.css"; // Assuming you have a CSS file for styles
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";

const insights = [
  {
    id: 1,
    image: blog5,
    title: "Modern Love: Swipe, Chat, Repeat",
    text: "Welcome to the messy, magical world of modern dating. In this episode, we dive into the highs, lows, ghostings, and accidental love stories that happen between a swipe right and 'let's meet for coffee.",
  },
  {
    id: 2,
    image: blog2,
    title: "From Soundwaves to Soulmates",
    text: "Music. Podcasts. Voice notes. Explore the intimate power of hearing someone—the laughs, the pauses, the unspoken emotions—and how these sounds became the bridge between strangers and lovers.",
  },
  {
    id: 3,
    image: blog3,
    title: "When Words Become Worlds",
    text: "Some met in quiet corners of audio communities, others through deep conversations on dating apps with voice notes. This episode captures how dialogue created depth long before meeting face-to-face.",
  },
  {
    id: 4,
    image: blog4,
    title: "Love at First Listen",
    text: "Forget love at first sight—this is love at first listen. Real couples share how the warmth, tone, and rhythm of someone’s voice created instant connection—and lasting relationships.",
  },
  {
    id: 5,
    image: blog1,
    title: "Whispers, Chats & Midnight Calls",
    text: "How do late-night calls, whispered secrets, and vulnerable voice messages deepen intimacy? We explore how audio nurtures emotional safety, leading to stronger relationships.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % insights.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // alternate direction
      setCurrentIndex((prev) => (prev + 1) % insights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getIndexes = () => {
    const len = insights.length;
    if (isMobile) return [currentIndex]; // only center on mobile
    const center = currentIndex;
    const left = (center - 1 + len) % len;
    const right = (center + 1) % len;
    return [left, center, right];
  };

  const visibleIndexes = getIndexes();

  return (
    <div className=" text-center max-w-[2560px] mx-auto px-4 py-10 overflow-hidden insights-container" id="blog">
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-sans p-2">
          Explore Our Latest Insights
        </h1>
        <p className="text-gray-600 p-2 font-sans text-2xl">
          Stay informed with our latest insights and updates.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-white shadow rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* Cards Container */}
        {isMobile ? (
      <div className="relative w-[412px] h-[508px] flex rounded-lg justify-center items-center overflow-hidden ">
      <div
        key={insights[currentIndex].id}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[90%] h-[507px] bg-white border-2 border-gray-200
          rounded-lg shadow-md duration-500 ease-in-out transform
          flex flex-col overflow-hidden
        "
      >
        {/* Image */}
        <img
          src={insights[currentIndex].image}
          alt={insights[currentIndex].title}
          className="w-full h-[60%] object-cover rounded-t-md hover:scale-105 transition-transform duration-3000"
        />

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow p-2">
          <div className="overflow-hidden">
            <h3 className=" font-semibold text-left text-lg line-clamp-2">
              "{insights[currentIndex].title}"
            </h3>
            <p className="text-gray-700 text-left text-sm line-clamp-5">
              {insights[currentIndex].text}
            </p>
          </div>

            <a
              href="#"
              className="text-blue-600 text-left font-medium hover:underline mt-2"
            >
              <span className="hover:underline">Continue Reading</span> →
            </a>
          </div>
        </div>
      </div>

      ) : (
              <div className="flex justify-center items-center gap-4 w-full overflow-hidden">
      {visibleIndexes.map((index) => {
        const card = insights[index];
        const isCenter = index === currentIndex;

        let width = "w-[30%]";
        let height = "h-[480px]";
        if (isCenter) {
          width = "w-[33%]";
          height = "h-[500px]";
        }

    return (
      <div
        key={card.id}
        className={`ease-in-out rounded-lg shadow-md bg-white border-2 border-gray-200  hover:scale-101 transition-shadow duration-1000 overflow-hidden
        ${width} ${height} flex-shrink-0 flex flex-col`}
      >
        {/* Image */}
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[60%] object-cover rounded-t-md hover:scale-105 transition-transform duration-3000"
        />

        {/* Text and Link Section */}
        <div className="flex flex-col justify-between flex-grow p-2">
          <div className="overflow-hidden">
            <h3 className="text-xl font-semibold text-left line-clamp-2">
              " {card.title} "
            </h3>
            <p className="text-gray-700 text-left line-clamp-4">
              {card.text}
            </p>
          </div>

          <a
            href="#"
            className="text-blue-600 text-left font-medium  "
          >
            <span className="hover:underline">Continue Reading</span> →
          </a>
        </div>
      </div>
    );
  })}
</div>


        )}
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2  bg-white shadow rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
