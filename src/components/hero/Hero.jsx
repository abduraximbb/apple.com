import React from "react";
import "./Hero.scss";

const Hero = ({ title, desc, cl, url, buttons, btn_bg }) => {
  return (
   <div className="container">
      <div
        style={{ background: `url(${url}) no-repeat center/cover`, color: cl }}
        className="hero"
      >
        <h2>{title}</h2>
        <p>{desc}</p>
        <ul className="hero__buttons">
          {buttons.map((btn, inx) => (
            <button
              key={inx}
              className="hero__btn"
              style={{
                background:
                  btn === "Learn more"
                    ? btn_bg === "blue"
                      ? "#0171E2" // #0171E2 fon rangi
                      : "white" // Oq fon
                    : "transparent", // Orqasi shaffof bo'ladi
                color:
                  btn === "Learn more"
                    ? btn_bg === "blue"
                      ? "white" // #0171E2 fon uchun oq matn
                      : "black" // Oq fon uchun qora matn
                    : btn_bg === "blue"
                    ? "#0171E2" // Shaffof tugma uchun #0171E2 matn
                    : "white", // Aks holda oq matn
                border:
                  btn === "Learn more"
                    ? btn_bg === "blue"
                      ? "none"
                      : "1px solid #0171E2" // "Learn more" uchun #0171E2 chegara
                    : `1px solid ${btn_bg === "blue" ? "#0171E2" : "white"}`, // Shaffof tugma uchun chegara rangi
              }}
            >
              {btn}
            </button>
          ))}
        </ul>
      </div>
   </div>
  );
};

export default Hero;


