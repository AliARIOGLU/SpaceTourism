import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    let linkItem = document.querySelector("#home");
    linkItem.classList.add("active");

    return () => {
      linkItem.classList.remove("active");
    };
  }, []);

  return (
    <section className="background home-page-container">
      <div className="home-page-content-container">
        <div className="home-page-content-left">
          <h2 className="home-page-subtitle">So, you want to travel to</h2>
          <h1 className="home-page-title">Space</h1>
          <p className="home-page-description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-page-content-right-wrapper">
          <div className="home-page-content-right">
            <h2>Explore</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
