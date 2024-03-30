import React, { useState } from "react";
import './Main.css';


function Main({ displayReview, trasparentStyle, trasparentStyleBack, color, shadow }) {

  return (
    <>
      <div className="container-main" >
        <div className="container_txt_main">
          <p className="main_text" style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}>
            Однажды, в 1957 году, Великий и Ужасный Джон Бекус положил начало новой эре - эре высоких языков программирования. Именно с них всё и началось. Так, с годами, те высокие языки сильно преобразились, но по сей день активно используются во многих сферах, также появились новые виды языков программирования. И все они сейчас объединены одним словом - современные.
          </p>
          <div className="container_info">
            <div className="info_backgr">
              <a onMouseOver={trasparentStyle} onMouseOut={trasparentStyleBack} className="info_href_gitg" href="https://github.com/freedie2">  GitHub  </a>
            </div>
            <div className="info_backgr_rew">
              <button onClick={displayReview} onMouseOver={trasparentStyle} onMouseOut={trasparentStyleBack} className="btn_review">Оставить отзыв</button>
            </div>
            <div className="info_backgr">
              <a onMouseOver={trasparentStyle} onMouseOut={trasparentStyleBack} className="info_href_kwrk" href="https://kwork.ru/user/dimapatin">  Kwork  </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
