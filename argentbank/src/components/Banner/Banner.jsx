import React from "react";
import PropTypes from "prop-types";

function Banner ({ backgroundImage, title, subtitles, text }){
    return(
        <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <section className="hero-content">
                <h2 className="sr-only">{title}</h2>
                {subtitles.map((subtitle, index) => (
                    <p key={index} className="hero-content-subtitle">{subtitle}</p>
                ))}
                <p className="hero-content-text">{text}</p>
            </section>
      </div>
    )
}

Banner.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired
  };
  

export default Banner;