import React from "react";
import './Footer.css';
import { useState } from "react";
import { Link } from "react-router-dom";


function Footer({ inputText, trasparentStyle, trasparentStyleBack, color, shadow, colorPolicy, shadowPolicy, hideElement, iconsPage }) {
    const [displayStyle, setDisplayStyle] = useState('block');
    const [opacityStyle, setOpacityStyle] = useState('1');

    return (
        <>
            <div className="container-footer">
                <div className="container_txt_footer">
                    <div className="contact-backgr">
                        <div className="info_backgr_cont">
                            <p onMouseOver={trasparentStyle} onMouseOut={trasparentStyleBack} className="contact">&#129047; Связаться &#129047;</p>
                        </div>
                        <div className="info_backgr_two ib1">
                            <p > <a onMouseOver={trasparentStyle} onMouseOut={trasparentStyleBack} className="href_dfomic" href="https://mail.google.com/mail/u/0/#inbox?compose=lqrslrnDgQLGbGDwKHfVzkKkJNmJzKjMrWzTMcJljZXnCfRLVRrVmjRdPWPpTvhBRdJTWfMKQxpHgwNpp"><span className="span_mail"> </span> dfomicev@gmail.com</a></p>
                        </div>
                        <div className="info_backgr_two ib2">
                            <p > <a onMouseOver={trasparentStyle} onMouseOut={trasparentStyleBack} className="href_strela" href="https://mail.google.com/mail/u/0/#inbox?compose=lqrslrnDgQLGbGDwKHfVzkKkJNmJzKjMrWzTMcJljZXnCfRLVRrVmjRdPWPpTvhBRdJTWfMKQxpHgwNpp"><span className="span_mail"> </span> strela@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="cont_footer_text">
                        <p className="footer_text" style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}>
                            В один дождливый вечер собрались Python, JavaScript, PHP и C++ в одном тихом баре "VS Code". В тот вечер они не поделили одного ооооочень крутого и способного разработчика - {inputText}. Это привело к бурному спору и ещё бы чуть-чуть и началась бы драка, но внезапно в баре распахнулись двери и к нашей компании залетел худой дряхлый старик, имя его Паскаль. Паскаль быстро усмирил своих буйных молодых братьев и предложил следующее: "Народ, нет смысла спорить попусту, давайте решим этот вопрос иначе: кто сумеет завлечь {inputText} к себе, тот и заберёт его к себе."
                        </p>

                        <div style={{
                            display: displayStyle,
                            opacity: opacityStyle,
                            transition: 'opacity 0.6s ease'
                        }} className="wrapper">
                            <button style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} id="btn_start" className="a1" onClick={hideElement}>Н а ч а т ь</button>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="policy" style={{ color: colorPolicy, textShadow: shadowPolicy, transition: 'all .3s ease-in-out' }}>©2023 Я у мамы программист. Все материалы взяты из публичных источников, все права принадлежат их владельцам. </p>
            </div>
        </>
    );
}

export default Footer;