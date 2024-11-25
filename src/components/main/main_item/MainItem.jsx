import React from "react";
import "./MainItem.scss";

const MainItem = ({ url, title, desc1, desc2, buttons, top, cl, btn_bg }) => {
  return (
    <div className="main__item">
      <div
        style={{
          background: `url(${url}) no-repeat center/cover`,
          color: cl,
          padding: top === "false" ? "280px 50px 0" : "", // Agar top "false" bo'lsa, padding qo'shish
        }}
        className="main__item__block"
      >
        <h2>{title}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <div className="main__buttons">
            {buttons.map((btn, inx) => (
              <button
                key={inx}
                className="main__btn"
                style={{
                  background:
                    buttons.length === 1
                      ? "#0171E1" // #0171E1 fon rangi
                      : btn === "Learn more"
                      ? "#0171E2" // "Learn more" tugmasining fonini #0171E2 qilib berish
                      : "transparent", // Orqasi shaffof bo'ladi
    
                  color:
                    buttons.length === 1
                      ? "white" // Agar buttons.length 1 bo'lsa, matnni oq qilish
                      : btn === "Learn more"
                      ? "white" // "Learn more" tugmasining ichidagi matn oq bo'ladi
                      : "#0171E2", // Learn more bo'lmagan tugmalar uchun matn #0171E2
    
                  border:
                    buttons.length === 1
                      ? "none" // Agar buttons.length 1 bo'lsa, chegara bo'lmaydi
                      : btn === "Learn more"
                      ? "1px solid #0171E2" // "Learn more" tugmasining chegarasi #0171E2 bo'ladi
                      : `1px solid #0171E2`, // Learn more bo'lmagan tugmalar uchun chegara #0171E2
                }}
              >
                {btn}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainItem;
