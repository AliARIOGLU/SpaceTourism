import React, { useState, useEffect } from "react";

import data from "../data/data.json";

const Crew = () => {
  const [crew, setCrew] = useState({
    id: data.crew[0].id,
    name: data.crew[0].name,
    image: data.crew[0].images.png,
    role: data.crew[0].role,
    bio: data.crew[0].bio,
  });

  const handleClick = (item) => {
    setCrew({
      id: item.id,
      name: item.name,
      image: item.images.png,
      role: item.role,
      bio: item.bio,
    });
  };

  useEffect(() => {
    let linkItem = document.querySelector("#crew");
    linkItem.classList.add("active");

    let dot = document.querySelector(`#crew-${crew.id}`);
    dot.classList.add("active");

    return () => {
      linkItem.classList.remove("active");
      dot.classList.remove("active");
    };
  }, [crew]);

  return (
    <section className="background crew-page-container">
      <div className="crew-page-title">
        <span>0{crew.id}</span>
        <p>Meet your crew</p>
      </div>

      <div className="crew-content-wrapper">
        <div className="crew-content-left">
          <div className="crew-content-left-info">
            <p>{crew.role}</p>
            <h1>{crew.name}</h1>
          </div>
          <div className="crew-content-left-description">
            <p>{crew.bio}</p>
          </div>
        </div>

        <div className="crew-content-right">
          <img src={crew.image} alt={crew.name} />
          <div className="crew-right-border"></div>
        </div>
      </div>

      <div className="dots-container">
        {data.crew.map((item) => {
          return (
            <div
              className="dot"
              id={`crew-${item.id}`}
              onClick={() => handleClick(item)}
              key={item.id}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Crew;
