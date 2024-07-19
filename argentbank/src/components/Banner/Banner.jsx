import React from "react";
import "./Banner.scss";

function Banner (){
    return(
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="hero-content-subtitle">No fees.</p>
                <p className="hero-content-subtitle">No minimum deposit.</p>
                <p className="hero-content-subtitle">High interest rates.</p>
                <p className="hero-content-text">Open a savings account with Argent Bank today!</p>
            </section>
      </div>
    )
}

export default Banner;