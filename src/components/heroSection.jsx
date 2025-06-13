import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="text-content">
        <h2>Guided Meditation and wellness</h2>
        <p>
          Take a step to feeling better with the help of a mental health
          website. Benefit from online therapy sessions and self-therapy tools.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="image-content">
        <img src="/mental-health-illustration.png" alt="Mental health" />
      </div>
    </section>
  );
};

export default HeroSection;