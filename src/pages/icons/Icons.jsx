import './Icons.css';
import johnsonImg1 from "../public/5968350.png";
import johnsonImg2 from "../public/6132222.png";
import { useState } from 'react';


function Icons({ hideIconsHandlerPython, hideIconsHandlerCplus }) {

  const [menuOpacityPhython, setMenuOpacityPhython] = useState('0');
  const dropMenuOver1 = () => {

    setMenuOpacityPhython('0.7')

  }
  const dropMenuOut1 = () => {
    setMenuOpacityPhython('0')
  }

  const [menuOpacityCplus, setMenuOpacityCplus] = useState('0');
  const dropMenuOver2 = () => {
    setMenuOpacityCplus('0.7')
  }
  const dropMenuOut2 = () => {
    setMenuOpacityCplus('0')
  }

  return (
    <>
      <div className="left-images">

        <div style={{}}>
          <div
            onMouseOver={dropMenuOver1}
            onMouseOut={dropMenuOut1}
            className='johnsonImg1'
            onClick={hideIconsHandlerPython}><img className='LeftImageOne' src={johnsonImg1} alt="Left Image 1" width={120} /> </div>
          <p style={{
            opacity: menuOpacityPhython,
            transition: '.6s ease',
          }}
            className='python_info' ><span className='style_name_python'>Python</span>  <br /> Самый популярный на момент 2024 года.</p>
        </div>

      <div>
          <div
            onMouseOver={dropMenuOver2}
            onMouseOut={dropMenuOut2}
            className='johnsonImg2'
            onClick={hideIconsHandlerCplus}
          ><img className='LeftImageTwo' src={johnsonImg2} alt="Left Image 2" width={120} /></div>
          <p style={{
            opacity: menuOpacityCplus,
            transition: '.6s ease',
          }}
            className='cplus_info'><span className='style_name_cplus'>C++</span>  <br /> Удобен для desktop-разработки</p>
        </div>
      </div>
    </>
  );
}

export default Icons;