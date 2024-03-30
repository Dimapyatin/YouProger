import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

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

function App() {

  const [displayStyle, setDisplayStyle] = useState('block');
  const [opacityStyle, setOpacityStyle] = useState('1');
  const [transformStyleFoot, setTransformStyleFoot] = useState('translateY(0%)')
  const [transformStyleHead, setTransformStyleHead] = useState('translateY(0%)')
  const [showImagesLeft, setShowImagesLeft] = useState('translateX(0%)');
  const [showImagesRight, setShowImagesRight] = useState('translateX(0%)');


  // ФОРМА РЕГИСТРАЦИИ

  // Здесь происходит проверка на наличие данные и правильно введенной почты
  const [isMailValid, setIsMailValid] = useState(false);
  const [inputValueMail, setInputValueMail] = useState('');
  const handleInputChangeMail = (event) => {
    setInputValueMail(event.target.value);
    const isValidEmail = /\S+@\S+\.\S+/
      .test(event.target.value);
    setIsMailValid(isValidEmail && inputValuePassword !== '' && inputText !== '');
  }
  const [inputValuePassword, setInputValuePassword] = useState('');
  const handleInputChangePassvord = (event) => {
    setInputValuePassword(event.target.value);
  }

  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // кароче тут будет код для переноса данных логина на сервер
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const hideForm = () => {
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

  // ФОРМА РЕГИСТРАЦИИ КОНЕЦ

  // КОД ДЛЯ АНИМАЦИИ ГЛАВНОЙ СТРАНИЦЫ (ДЛЯ КНОПКИ)
  let navigate = useNavigate(); // для навигации 

  const IconsPage = () => {
    setTimeout(() => {
      navigate('/IconsPage');
    }, 1000)

    setTimeout(() => {
      setDisplayStyle('block')
      setOpacityStyle('1')
      setTransformStyleFoot('translateY(0%)')
      setTransformStyleHead('translateY(0%)')
    }, 3000);

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

    // УБИРАЕТ  ЭЛЕМЕНТЫ ГЛАВНОЙ СТРАНИЦЫ

    IconsPage();
  };
  // КОД ДЛЯ АНИМАЦИИ ГЛАВНОЙ СТРАНИЦЫ (ДЛЯ КНОПКИ)


  // КОД ДЛЯ ОТЗЫВОВ 
  const ReviewPage = () => {
    setTimeout(() => {
      navigate('/ReviewPage')
    }, 1000)
    setTimeout(() => {
      setOpacityStyle('1')
      setTransformStyleFoot('translateY(0%)')
      setTransformStyleHead('translateY(0%)')
    }, 3000)
  }

  const displayReview = () => {
    setOpacityStyle('0');
    setTransformStyleFoot('translateY(180%)');
    setTransformStyleHead('translateY(-120%)');

    ReviewPage();
  }
  // КОД ДЛЯ ОТЗЫВОВ КОНЕЦ


  // КОД ДЛЯ PYTHON 
  const PythonPage = () => {
    setTimeout(() => {
      navigate('/PythonPage')
    }, 1000)
    setTimeout(() => {
      setShowImagesLeft('translateX(0%)');
      setShowImagesRight('translateX(0%)');
    }, 3000)
  };

  const hideIconsHandlerPython = () => {
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');
    PythonPage();
  };
  const hidePython = () => {
    setShowImagesLeft('translateX(0%)');
    setShowImagesRight('translateX(0%)');
    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  };
  // КОД ДЛЯ PYTHON КОНЕЦ


  // КОД ДЛЯ CPLUS
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
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');
    CplusPage()
  };
  const hideCplus = () => {
    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  }
  // КОД ДЛЯ CPLUS КОНЕЦ


  // КОД ДЛЯ PHP
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
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');

    PhpPage()
  };
  const hidePhp = () => {
    setShowImagesLeft('translateX(0%)');
    setShowImagesRight('translateX(0%)');
    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  }
  // КОД ДЛЯ PHP КОНЕЦ


  // КОД ДЛЯ JS
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
    setShowImagesLeft('translateX(-700%)');
    setShowImagesRight('translateX(700%)');

    JsPage();
  };
  const hideJs = () => {
    setShowImagesLeft('translateX(0%)');
    setShowImagesRight('translateX(0%)');

    setTimeout(() => {
      navigate('/IconsPage')
    }, 200)
  }
  // КОД ДЛЯ JS КОНЕЦ


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
      <Route path='/Iproger/' element={
        <div style={{}}>
          <Form
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
        <div style={{}}>
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
        </div>
      } />

      <Route path='/ReviewPage' element={
        <div style={{
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
        <div style={{}}>
          <Python hidePython={hidePython} />
        </div>
      } />

      <Route path='/CplusPage' element={
        <div style={{}}>
          <Cplus hideCplus={hideCplus} />
        </div>
      } />

      <Route path='/PhpPage' element={
        <div style={{}}>
          <Php hidePhp={hidePhp} />
        </div>
      } />

      <Route path='/JsPage' element={
        <div style={{}}>
          <Js hideJs={hideJs} />
        </div>
      } />
    </Routes>
  );
}

export default App;
