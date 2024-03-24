import './Icons2.css';
import johnsonImg4 from "../public/javascript-logo-big.png";
import johnsonImg3 from "../public/919830.png";
// import  johnsonImg5 from "../public/665ca361cbdcd2d5d56518ede238eea0.png";
import { useState } from 'react';

function Icons2({hideIconsHandlerPhp, hideIconsHandlerJs}) {
  const [menuOpacityJs, setMenuOpacityJs] = useState('0');
  const dropMenuOver4 = () => {
    setMenuOpacityJs('0.7')
  }
  const dropMenuOut4 = () => {
    setMenuOpacityJs('0')
  }


  const [menuOpacityPhp, setMenuOpacityPhp] = useState('0');
  const dropMenuOver3 = () => {
    setMenuOpacityPhp('0.7')
  }
  const dropMenuOut3 = () => {
    setMenuOpacityPhp('0')
  }


  // const [menuOpacityPascal, setMenuOpacityPascal] = useState('0');
  // const dropMenuOver5 = () => {
  //   setMenuOpacityPascal('0.7')
  // }
  // const dropMenuOut5 = () => {
  //   setMenuOpacityPascal('0')
  // }
  return (
    <>

      <div className="right-images">
        <div>
          <div
            onMouseOver={dropMenuOver4}
            onMouseOut={dropMenuOut4}
            className='johnsonImg4'
            onClick={hideIconsHandlerJs}><img className='RightImageTwo' src={johnsonImg4} alt="Right Image 2" width={120} /></div>
          <p style={{
            opacity: menuOpacityJs,
            transition: '.6s ease',
          }}
            className='js_info'><span className='style_name_js'>JavaScript</span>  <br />С его помощью делаются сайты и web-приложения</p>

        </div>


        <div>
          <div
            onMouseOver={dropMenuOver3}
            onMouseOut={dropMenuOut3}
            className='johnsonImg3'
            onClick={hideIconsHandlerPhp}
            ><img className='RightImageOne' src={johnsonImg3} alt="Right Image 1" width={120} />
          </div>
          <p style={{
            opacity: menuOpacityPhp,
            transition: '.6s ease',
          }}
            className='php_info'><span className='style_name_php'>PHP</span>  <br />Также, как и JS предназначен для web-разработки</p>

        </div>





        {/* <div>
              
              <div  
              onMouseOver={dropMenuOver5} 
              onMouseOut={dropMenuOut5} 
              className='johnsonImg5'
              onClick={hideIconsHandler}><img src={johnsonImg5} alt="Right Image 3" width={120} /></div>
              <p style={{
                opacity: menuOpacityPascal,
                transition:'.6s ease',
              }}
               className='pascal_info'> Это Pascal. <br />Его уже не считают современным, но он старается быть полезным.</p>
            </div> */}

      </div>
    </>
  );
}

export default Icons2;