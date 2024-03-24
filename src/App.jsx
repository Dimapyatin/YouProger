import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import {useHistory} from "react-router";

// import { CSSTransition } from 'react-transition-group';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import Icons from './pages/icons/Icons';
import Icons2 from './pages/icons2/Icons2';

import Review from './pages/review/Review';
import Form from './pages/form/Form';

import Python from './pages/python/Python';
import Cplus from './pages/cplus/Cplus';
import Php from './pages/php/Php';
import Js from './pages/js/Js';
// import { text } from 'express';
// import { CSSTransition } from 'react-transition-group';
// import CSSTransition from 'react-transition-group';

function App() {




  const [displayStyle, setDisplayStyle] = useState('block');

  const [opacityStyle, setOpacityStyle] = useState('1');
  const [transformStyleFoot, setTransformStyleFoot] = useState('translateY(0%)')
  const [transformStyleHead, setTransformStyleHead] = useState('translateY(0%)')

  const [displayStyleIcon, setDisplayStyleIcon] = useState('none');
  const [showImagesLeft, setShowImagesLeft] = useState('translateX(0%)');
  const [showImagesRight, setShowImagesRight] = useState('translateX(0%)');


  // const [fadeOut, setFadeOut] = useState(false);
  // const history = useHistory();

  // ДЛЯ РОУТЕРА
  // const [isTransitioning, setIsTransitioning] = useState(false);
  // useEffect(() => {
  //   if (isTransitioning) {
  //     const transitionTimeout = setTimeout(() => {
  //       setIsTransitioning(false)
  //     }, 3000);
  //     return() => 
  //       clearTimeout(transitionTimeout);
  //   }
  // }, 1000);
  // const handleLinkClick = () => {
  //   setIsTransitioning(true);
  // };
  let navigate = useNavigate();

  const IconsPage = () => {
    // history.push("/IconsPage")
    setTimeout(() => {
      navigate('/IconsPage');
    }, 1000)

    setTimeout(() => {
      setDisplayStyle('block')
      setOpacityStyle('1')
      setTransformStyleFoot('translateY(0%)')
      setTransformStyleHead('translateY(0%)')
    }, 3000)

  };



  // ДЛЯ РОУТЕРА
  const hideElement = () => {
    // УБИРАЕТ  ЭЛЕМЕНТЫ ГЛАВНОЙ СТРАНИЦЫ
    setTimeout(() => {
      setDisplayStyle('none');

    }, 700);
    setOpacityStyle('0')
    setTransformStyleFoot('translateY(180%)')
    setTransformStyleHead('translateY(-120%)')
    // setFadeOut(true);
    // setTimeout(() => {
    //   history.push('/IconsPage')
    // }, 3000)

    // УБИРАЕТ  ЭЛЕМЕНТЫ ГЛАВНОЙ СТРАНИЦЫ

    IconsPage();

    // setTimeout(() => {
    //   setDisplayStyleIcon('block');
    // }, 700)
    // setTimeout(() => {
    //   setDisplayStyleIcon('block');
    //   setShowImagesLeft('translateX(0%)');
    //   setShowImagesRight('translateX(0%)');
    // }, 1500);
    // setTimeout(()=> {
    //   window.location.reload()
    // }, 5000)



  };


  const [displayStyleForm, setDisplayStyleForm] = useState('block')
  const [displayStyleApp, setDisplayStyleApp] = useState('none')

  const [paddingStyleForm, setPaddingStyleForm] = useState('20px')
  const [widthStyleForm, setWidthStyleForm] = useState('100%')
  const [minHeightStyleForm, setMinHeightStyleForm] = useState('100%')
  // const [traslateStyleForm, setTraslateStyleForm] = useState('traslateY(200%)')


  const FormPage = () => {
    // setTimeout(() => {

    // }, 1000)

  }
  // data: inputText, password: inputValuePassword, mail: inputValueMail 






  // const [displayStyleNoneReview, setDisplayStyleNoneReview] = useState('none')
  // const [opacityStyleReview, setOpacityStyleReview] = useState('0')

  const ReviewPage = () => {
    setTimeout(() => {
      navigate('/ReviewPage')
    }, 1000)
    setTimeout(() => {
      // setDisplayStyle('block')
      setOpacityStyle('1')
      setTransformStyleFoot('translateY(0%)')
      setTransformStyleHead('translateY(0%)')
    }, 3000)
  }

  const displayReview = () => {
    setTimeout(() => {
      // setDisplayStyle('none');

    }, 700);
    setOpacityStyle('0')
    setTransformStyleFoot('translateY(180%)')
    setTransformStyleHead('translateY(-120%)')
    setTimeout(() => {
      // setDisplayStyleNoneReview('block');
    }, 1000)
    // setTimeout(() => {
    //   setOpacityStyleReview('1')

    // }, 1500)
    ReviewPage();

  }

  const PythonPage = () => {
    setTimeout(() => {
      navigate('/PythonPage')
    }, 1000)
    setTimeout(() => {
      setShowImagesLeft('translateX(0%)');
      setShowImagesRight('translateX(0%)');
    }, 3000)

  };

  // const [displayStylePython, setDisplayStylePython] = useState('none');
  const hideIconsHandlerPython = () => {
    setTimeout(() => {
      // setDisplayStyleIcon('none');
      // setDisplayStylePython('block');
    }, 1000);
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');
    PythonPage();
  };
  const hidePython = () => {
    setTimeout(() => {
      setDisplayStyleIcon('block');
      // setDisplayStylePython('none');
    }, 1000);
    setShowImagesLeft('translateX(0%)');
    setShowImagesRight('translateX(0%)');
    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  };

  // const [displayStyleCplus, setDisplayStyleCplus] = useState('none');
  const [transformStyleCplus, setTransformStyleCplus] = useState('translateY(400%)');

  const CplusPage = () => {
    setTimeout(() => {
      navigate('/CplusPage')
    }, 1000)
    setTimeout(() => {
      setShowImagesLeft('translateX(0%)');
      setShowImagesRight('translateX(0%)');
    }, 3000)
  }

  const hideIconsHandlerCplus = () => {
    setTimeout(() => {
      // setDisplayStyleIcon('none');
      // setDisplayStyleCplus('block');
    }, 1000);
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');
    setTransformStyleCplus('translateY(0%)');
    CplusPage()
  };
  const hideCplus = () => {
    setTimeout(() => {
      setDisplayStyleIcon('block');
      // setDisplayStyleCplus('none');
    }, 1000);
    setShowImagesLeft('translateX(0%)');
    setShowImagesRight('translateX(0%)');
    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  }

  const [displayStylePhp, setDisplayStylePhp] = useState('none');

  const PhpPage = () => {
    setTimeout(() => {
      navigate('/PhpPage')
    }, 1000)
    setTimeout(() => {
      setShowImagesLeft('translateX(0%)');
      setShowImagesRight('translateX(0%)');
    }, 3000)
  }

  const hideIconsHandlerPhp = () => {
    setTimeout(() => {
      setDisplayStyleIcon('none');
      setDisplayStylePhp('block');
    }, 1000);
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');
    PhpPage()
  };
  const hidePhp = () => {
    setTimeout(() => {
      setDisplayStyleIcon('block');
      setDisplayStylePhp('none');
    }, 1000);
    setShowImagesLeft('translateX(0%)');
    setShowImagesRight('translateX(0%)');
    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  }

  const [displayStyleJs, setDisplayStyleJs] = useState('none');

  const JsPage = () => {
    setTimeout(() => {
      navigate('/JsPage')
    }, 1000)
    setTimeout(() => {
      setShowImagesLeft('translateX(0%)');
      setShowImagesRight('translateX(0%)');
    }, 3000)
  }

  const hideIconsHandlerJs = () => {
    setTimeout(() => {
      setDisplayStyleIcon('none');
      setDisplayStyleJs('block');
    }, 1000);
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');
    JsPage();
  };
  const hideJs = () => {
    setTimeout(() => {
      setDisplayStyleIcon('block');
      setDisplayStyleJs('none');
    }, 1000);
    setShowImagesLeft('translateX(0%)');
    setShowImagesRight('translateX(0%)');
    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  }


  // const [formCompleted, setFormCompleted] = useState(false);
  // const checkFormCompletion = () => {
  //   if (inputText !=='' && inputValuePassword !=='' && inputValueMail !=='') {
  //     setFormCompleted(true);
  //   } else {
  //     setFormCompleted(false);
  //   }
  // }

  // const [isMailValid, setIsMailValid] = useState(false);
  // const handleVerification = () => {
  //   if (inputValueMail ==='example@example.com') {
  //     setIsMailValid(true);
  //   } else {
  //     alert('Пожалуйста введите правильный email');
  //   }
  // }


  // Здесь происходит проверка на наличие данные и правильно введенной почты

  const [isMailValid, setIsMailValid] = useState(false);
  const [inputValueMail, setInputValueMail] = useState('');
  const handleInputChangeMail = (event) => {
    setInputValueMail(event.target.value);
    // checkFormCompletion();
    // handleVerification();
    const isValidEmail = /\S+@\S+\.\S+/
      .test(event.target.value);
    setIsMailValid(isValidEmail && inputValuePassword !=='' && inputText !=='')

  }

  const [inputValuePassword, setInputValuePassword] = useState('');
  const handleInputChangePassvord = (event) => {
    setInputValuePassword(event.target.value);
    // checkFormCompletion();
  }

  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    setInputText(event.target.value);
    // checkFormCompletion();
  };

  // кароче тут будет код для переноса данных логина на сервер
  const handleSubmit = (event) => {
    event.preventDefault();
    // sendDataToServer();
  };

  const hideForm = () => {
    // setTimeout(() => {
    //   setDisplayStyleForm('none')
    //   setDisplayStyleApp('block')
    //   setPaddingStyleForm('0')
    //   setWidthStyleForm('100%')
    //   // setTraslateStyleForm('traslateY(200%)')
    //   setMinHeightStyleForm('100%')
    // }, 500);
    if (isMailValid) {
      fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputText, password: inputValuePassword, mail: inputValueMail }),

      })
        .then((response) => response.json())
        .then((data, password, mail) => {
          console.log('Ответ от сервера:', data, password, mail);
          setInputText('')
          setInputValuePassword('')
          setInputValueMail('')
        })

        .catch((error) => {
          console.error('Ошибка:', error);
        }, []);

      setTimeout(() => {
        navigate('/MainPage')
      }, 100)
    } else {
      alert('Заполните все поля  правильно ')
    }


  };


  // const sendDataToServer = () => {
  //   if (isMailValid) {
  //     fetch('http://localhost:3000/api/data', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ data: inputText, password: inputValuePassword, mail: inputValueMail }),

  //     })
  //       .then((response) => response.json())
  //       .then((data, password, mail) => {
  //         console.log('Ответ от сервера:', data, password, mail);
  //         setInputText('')
  //         setInputValuePassword('')
  //         setInputValueMail('')
  //       })

  //       .catch((error) => {
  //         console.error('Ошибка:', error);
  //       });
  //   } else {
  //     console.log('Данные не отправлены');
  //   }

  // };

  // кароче тут будет код для переноса данных логина на сервер




  const [color, setColor] = useState('#ffffff')
  const [shadow, setShadow] = useState(' 0px 0px 10px #007068')
  const [colorPolicy, setColorPolicy] = useState('#333')
  const [shadowPolicy, setShadowPolicy] = useState('none')
  const [shadowHead, setShadowHead] = useState(' 0px 0px 10px #007068')

  const trasparentStyle = () => {
    setColor('transparent');
    setShadow('0px 0px 4px #ffffff');
    setColorPolicy('transparent')
    setShadowPolicy('0px 0px 4px #666')
    setShadowHead('0px 0px 15px #ffffff')
  }
  const trasparentStyleBack = () => {
    setColor('#ffffff');
    setShadow('0px 0px 10px #007068');
    setColorPolicy('#333')
    setShadowPolicy('none')
    setShadowHead('0px 0px 10px #ffffff')
  }

  return (
    <Routes>
      <Route path='/' element={
        <div style={{
          // display: displayStyleForm,
          padding: paddingStyleForm,
          width: widthStyleForm,
          minHeight: minHeightStyleForm,
          // translate: traslateStyleForm
        }}>
          <Form
            // iconsPage={iconsPage}
            hideForm={hideForm}
            handleInputChange={handleInputChange}
            inputText={inputText}
            inputValuePassword={inputValuePassword}
            inputValueMail={inputValueMail}
            handleSubmit={handleSubmit}

            handleInputChangePassvord={handleInputChangePassvord}
            handleInputChangeMail={handleInputChangeMail}
          />
        </div>
      } />

      <Route exact path='/MainPage' element={
        <div style={{
          // display: displayStyleApp,
        }}>
          <div style={{
            display: displayStyle,
            transform: transformStyleHead,
            transition: 'all .6s ease-in-out'
          }}>
            <Header
              color={color}
              shadowHead={shadowHead}
            />
          </div>

          <div style={{
            display: displayStyle,
            opacity: opacityStyle,
            transition: 'opacity 0.8s ease'
          }}>
            <Main
              displayReview={displayReview}
              trasparentStyle={trasparentStyle}
              trasparentStyleBack={trasparentStyleBack}
              color={color}
              shadow={shadow}
            />
          </div>


          <div className='ctn_footer' style={{
            display: displayStyle,
            transform: transformStyleFoot,
            transition: 'all .6s ease-in-out'
          }}>
            <Footer
              // handleLinkClick={handleLinkClick}
              // iconsPage={iconsPage}

              hideElement={hideElement}
              inputText={inputText}
              trasparentStyle={trasparentStyle}
              trasparentStyleBack={trasparentStyleBack}
              color={color}
              shadow={shadow}
              colorPolicy={colorPolicy}
              shadowPolicy={shadowPolicy}
            />
          </div>
          {/* <div style={{
          display: displayStyle,
          opacity: opacityStyle,        
          transition: 'opacity 0.6s ease'
        }} className="wrapper">
          <button style={{color: color, textShadow: shadow, transition: 'all .3s ease-in-out'}} onClick={hideElement} id="btn_start" className="a1">Н а ч а т ь</button>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </div> */}

        </div>


      } />

      <Route path='/ReviewPage' element={
        <div style={{
          // display: displayStyleNoneReview,
          // opacity: opacityStyleReview,
          transition: 'opacity 0.6s ease'
        }} className="cont_review">
          <Review
            inputText={inputText}
          />
        </div>
      } />

      <Route path='/IconsPage' element={
        <div className="container_icons ">
          <div className='cont_left-images'>
            <div style={{
              // display: displayStyleIcon,
              transform: showImagesLeft,
              transition: 'all .9s ease-in-out'
            }}>
              <Icons
                hideIconsHandlerPython={hideIconsHandlerPython}
                hideIconsHandlerCplus={hideIconsHandlerCplus} />

            </div>
          </div>

          <div className='cont_right-images'>
            <div style={{
              // display: displayStyleIcon,
              transform: showImagesRight,
              transition: 'all .9s ease-in-out',
            }}>
              <Icons2
                hideIconsHandlerPhp={hideIconsHandlerPhp}
                hideIconsHandlerJs={hideIconsHandlerJs} />

            </div>
          </div>
        </div>
      } />

      <Route path='/PythonPage' element={
        <div style={{
          // display: displayStylePython,
          // transition: 'all .6s ease-in-out'
        }}>
          <Python hidePython={hidePython} />
        </div>
      } />

      <Route path='/CplusPage' element={
        <div style={{
          // display: displayStyleCplus,
          // transform: transformStyleCplus,
          transition: 'all .6s ease-in-out'
        }}>
          <Cplus hideCplus={hideCplus} />
        </div>
      } />

      <Route path='/PhpPage' element={
        <div style={{
          display: displayStylePhp,
          transition: 'all .6s ease-in-out'
        }}>
          <Php hidePhp={hidePhp} />
        </div>

      } />

      <Route path='/JsPage' element={

        <div style={{
          // display: displayStyleJs,
          transition: 'all .6s ease-in-out'
        }}>
          <Js hideJs={hideJs} />
        </div>

      } />
    </Routes>
  );
}

export default App;
