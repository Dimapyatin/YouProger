
import React from 'react';
import './Php.css';
import { useState, useEffect } from 'react';

const Php = ({ hidePhp }) => {

    const [color, setColor] = useState('')
    const [shadow, setShadow] = useState('')

    function trasparentStyle() {
        setColor('transparent');
        setShadow('0px 0px 4px #ffffff');
    }
    function trasparentStyleBack() {
        setColor('');
        setShadow('');
    }

    const [displayString1, setDisplayString1] = useState('none');
    const [displayString2, setDisplayString2] = useState('none');
    const [displayString3, setDisplayString3] = useState('none');
    const [displayString4, setDisplayString4] = useState('none');
    const [displayString5, setDisplayString5] = useState('none');
    const [displayString6, setDisplayString6] = useState('none');
    const [displayWin, setDisplayWin] = useState('none');
    const [opacityWin, setOpacityWin] = useState('0')

    function showString1() {
        setTimeout(() => {
            setDisplayString1('inline')
        }, 50);
    }
    function showString2() {
        setTimeout(() => {
            setDisplayString2('inline')
        }, 50);
    }
    function showString3() {
        setTimeout(() => {
            setDisplayString3('inline')
        }, 50);
    }
    function showString4() {
        setTimeout(() => {
            setDisplayString4('inline')
        }, 50);
    }
    function showString5() {
        setTimeout(() => {
            setDisplayString5('block')
        }, 50);
    }
    function showString6() {
        setTimeout(() => {
            setDisplayString6('block')
        }, 50);
    }
    function showWin() {
        setDisplayWin('inline')
        setTimeout(() => {
            setOpacityWin('1');
        }, 3000);
    }

    const [opacityAlertBtnDescrPhp1, setOpacityAlertBtnDescrPhp1] = useState('0')

    const [displayDescrPhp1, setDisplayDescrPhp1] = useState('none')
    const [transformDescrPhp1, setTransformDescrPhp1] = useState('scale(0)')
    const [opacityDescrPhp1, setOpacityDescrPhp1] = useState('0')
    const [opacityBtnDescrPhp1, setOpacityBtnDescrPhp1] = useState('1')

    const [displayDescrPhp2, setDisplayDescrPhp2] = useState('none')
    const [transformDescrPhp2, setTransformDescrPhp2] = useState('scale(0)')
    const [opacityDescrPhp2, setOpacityDescrPhp2] = useState('0')
    const [opacityBtnDescrPhp2, setOpacityBtnDescrPhp2] = useState('1')

    const [displayDescrPhp3, setDisplayDescrPhp3] = useState('none')
    const [transformDescrPhp3, setTransformDescrPhp3] = useState('scale(0)')
    const [opacityDescrPhp3, setOpacityDescrPhp3] = useState('0')
    const [opacityBtnDescrPhp3, setOpacityBtnDescrPhp3] = useState('1')

    const [displayDescrPhp4, setDisplayDescrPhp4] = useState('none')
    const [transformDescrPhp4, setTransformDescrPhp4] = useState('scale(0)')
    const [opacityDescrPhp4, setOpacityDescrPhp4] = useState('0')
    const [opacityBtnDescrPhp4, setOpacityBtnDescrPhp4] = useState('1')

    const [displayDescrPhp5, setDisplayDescrPhp5] = useState('none')
    const [transformDescrPhp5, setTransformDescrPhp5] = useState('scale(0)')
    const [opacityDescrPhp5, setOpacityDescrPhp5] = useState('0')
    const [opacityBtnDescrPhp5, setOpacityBtnDescrPhp5] = useState('1')

    const [displayDescrPhp6, setDisplayDescrPhp6] = useState('none')
    const [transformDescrPhp6, setTransformDescrPhp6] = useState('scale(0)')
    const [opacityDescrPhp6, setOpacityDescrPhp6] = useState('0')
    const [opacityBtnDescrPhp6, setOpacityBtnDescrPhp6] = useState('1')

    function showDescr1() {
        setTransformDescrPhp1('scale(1)')
        setDisplayDescrPhp1('block')
        setOpacityDescrPhp1('1')

        setOpacityAlertBtnDescrPhp1('1')
        setTimeout(() => {
            setOpacityAlertBtnDescrPhp1('0')
        }, 10000);

        setOpacityBtnDescrPhp2('0')
        setOpacityBtnDescrPhp3('0')
        setOpacityBtnDescrPhp4('0')
        setOpacityBtnDescrPhp5('0')
        setOpacityBtnDescrPhp6('0')

    }


    function downDescr1(event) {
        setTransformDescrPhp1('scale(0)')
        setOpacityDescrPhp1('0')

        setOpacityAlertBtnDescrPhp1('0')

        setOpacityBtnDescrPhp2('1')
        setOpacityBtnDescrPhp3('1')
        setOpacityBtnDescrPhp4('1')
        setOpacityBtnDescrPhp5('1')
        setOpacityBtnDescrPhp6('1')

    }

    function showDescr2() {
        setTransformDescrPhp2('scale(1)')
        setDisplayDescrPhp2('block')
        setOpacityDescrPhp2('1')
        setOpacityBtnDescrPhp1('0')
        setOpacityBtnDescrPhp3('0')
        setOpacityBtnDescrPhp4('0')
        setOpacityBtnDescrPhp5('0')
        setOpacityBtnDescrPhp6('0')

    }

    function downDescr2() {
        setTransformDescrPhp2('scale(0)')
        setOpacityDescrPhp2('0')

        setOpacityBtnDescrPhp1('1')
        setOpacityBtnDescrPhp3('1')
        setOpacityBtnDescrPhp4('1')
        setOpacityBtnDescrPhp5('1')
        setOpacityBtnDescrPhp6('1')
    }

    function showDescr3() {
        setTransformDescrPhp3('scale(1)')
        setDisplayDescrPhp3('block')
        setOpacityDescrPhp3('1')

        setOpacityBtnDescrPhp1('0')
        setOpacityBtnDescrPhp2('0')
        setOpacityBtnDescrPhp4('0')
        setOpacityBtnDescrPhp5('0')
        setOpacityBtnDescrPhp6('0')

    }

    function downDescr3() {
        setTransformDescrPhp3('scale(0)')
        setOpacityDescrPhp3('0')

        setOpacityBtnDescrPhp1('1')
        setOpacityBtnDescrPhp2('1')
        setOpacityBtnDescrPhp4('1')
        setOpacityBtnDescrPhp5('1')
        setOpacityBtnDescrPhp6('1')
    }

    function showDescr4() {
        setTransformDescrPhp4('scale(1)')
        setDisplayDescrPhp4('block')
        setOpacityDescrPhp4('1')

        setOpacityBtnDescrPhp1('0')
        setOpacityBtnDescrPhp2('0')
        setOpacityBtnDescrPhp3('0')
        setOpacityBtnDescrPhp5('0')
        setOpacityBtnDescrPhp6('0')

    }

    function downDescr4() {
        setTransformDescrPhp4('scale(0)')
        setOpacityDescrPhp4('0')

        setOpacityBtnDescrPhp1('1')
        setOpacityBtnDescrPhp2('1')
        setOpacityBtnDescrPhp3('1')
        setOpacityBtnDescrPhp5('1')
        setOpacityBtnDescrPhp6('1')
    }

    function showDescr5() {
        setTransformDescrPhp5('scale(1)')
        setDisplayDescrPhp5('block')
        setOpacityDescrPhp5('1')

        setOpacityBtnDescrPhp1('0')
        setOpacityBtnDescrPhp2('0')
        setOpacityBtnDescrPhp3('0')
        setOpacityBtnDescrPhp4('0')
        setOpacityBtnDescrPhp6('0')

    }

    function downDescr5() {
        setTransformDescrPhp5('scale(0)')
        setOpacityDescrPhp5('0')

        setOpacityBtnDescrPhp1('1')
        setOpacityBtnDescrPhp2('1')
        setOpacityBtnDescrPhp3('1')
        setOpacityBtnDescrPhp4('1')
        setOpacityBtnDescrPhp6('1')
    }

    function showDescr6() {
        setTransformDescrPhp6('scale(1)')
        setDisplayDescrPhp6('block')
        setOpacityDescrPhp6('1')

        setOpacityBtnDescrPhp1('0')
        setOpacityBtnDescrPhp2('0')
        setOpacityBtnDescrPhp3('0')
        setOpacityBtnDescrPhp4('0')
        setOpacityBtnDescrPhp5('0')

    }

    function downDescr6() {
        setTransformDescrPhp6('scale(0)')
        setOpacityDescrPhp6('0')

        setOpacityBtnDescrPhp1('1')
        setOpacityBtnDescrPhp2('1')
        setOpacityBtnDescrPhp3('1')
        setOpacityBtnDescrPhp4('1')
        setOpacityBtnDescrPhp5('1')
    }




    const [displayResultCodePhp, setDisplayResultCodePhp] = useState('none')
    const [opacityResultCodePhp, setOpacityResultCodePhp] = useState('0')
    function showResultCodePhp() {
        setTimeout(() => {
            setDisplayResultCodePhp('inline');
        }, 1000);
        setOpacityResultCodePhp('1');
    }

    const [nameOfAgent, setNameOfAgent] = useState('');
    function handleChangeTakeNameOfAgent() {
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            setNameOfAgent('Opera');
        } else if (navigator.userAgent.indexOf("Edg") != -1) {
            setNameOfAgent('Edge');
        } else if (navigator.userAgent.indexOf("Chrome") != -1) {
            setNameOfAgent('Chrome');
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            setNameOfAgent('Firefox');
        } else {
            setNameOfAgent('unknown');
        }
    }

    return (
        <div>
            <div className='php_wrapper'>
                <div className='php_backgr'>
                    <div className='php_text'>
                        <div className='php_headText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} >
                            Знакомьтесь, Знакомьтесь, PHP!
                        </div>
                        <div className='php_mainText'>
                            <span className='php_titleText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}>
                                PHP это язык программирования области web-разработки, поэтому, чтобы раскрыть его потенциал полностью нужно использовать его вместе с HTML и CSS. Но сейчас мы напишем интересную программу без использования HTML и каскадных таблиц.
                            </span>
                            <div className='order_cont_wrapper_text_php'></div>
                            <div className='cont_wrapper_text_php'>

                                <div className='wrapper_text_php'>
                                    <div className='first_part_compilies'>
                                        <span className='php_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 1. Добавим главный тег, в котором будет находиться основной код</span>
                                        {/* <div style={{ opacity: opacityAlertBtnDescrPhp1, transition: 'all .8s' }} className='alert_btn_descr_compilies1'>Нажмите, чтобы зафиксировать текст</div> */}
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPhp1,
                                                transition: 'all .95s',
                                            }}
                                            onMouseOver={function btn_descr_show1() {
                                                showDescr1();
                                                trasparentStyle();
                                            }}
                                            onMouseOut={function btn_descr_down1() {
                                                downDescr1();
                                                trasparentStyleBack();
                                            }}
                                            id='btn_descr_compilies' className='btn_descr_compilies'>?</div>
                                        <div
                                            style={{
                                                transform: transformDescrPhp1,
                                                opacity: opacityDescrPhp1,
                                            }}
                                            className='modal'>
                                            <div className='tringle1_php'>
                                                <div
                                                    style={{
                                                        display: displayDescrPhp1,
                                                    }}
                                                    id='text_descr_compilies1-2'

                                                    className='text_descr_compilies1_php'>Чтобы использовать PHP внутри кода HTML мы должны написать закрывающийся тег <br /> &#60;?php &#60;-- Здесь код PHP --&#62; ?&#62; <br /> Такие теги распространенная практика, в языках веб-разработки они есть на каждый случай жизни.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString1} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить тег ?php</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_php'>
                                <div className='wrapper_text_php_right'>
                                    <div className='first_part_compilies'>
                                        <span className='php_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br />2. Добавим проверку условным оператором if</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPhp2,
                                                transition: 'all .95s',
                                            }}
                                            onMouseOver={function btn_descr_show2() {
                                                showDescr2();
                                                trasparentStyle();
                                            }}
                                            onMouseOut={function btn_descr_down2() {
                                                downDescr2();
                                                trasparentStyleBack();
                                            }}
                                            id='btn_descr_compilies' className='btn_descr_compilies'>?</div>
                                        <div
                                            style={{
                                                transform: transformDescrPhp2,
                                                opacity: opacityDescrPhp2,

                                            }}
                                            className='modal'>
                                            <div className='tringle2_php'>
                                                <div
                                                    style={{
                                                        display: displayDescrPhp2
                                                    }}
                                                    className='text_descr_compilies2_php'>Далее добавим условный оператор if, он будет проверять условие, которое мы ему дадим, на истинность. Если проверяемые данные соответсвуют нашему условию, то функция срабатывает. В противном случае функция не сработает и перейдет к следующей.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString2} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить if</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_php'>
                                <div className='wrapper_text_php'>
                                    <div className='first_part_compilies'>
                                        <span className='php_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 3. Чтобы узнавать имя браузера, используемого пользователем, используем функцию str_contains</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPhp3,
                                                transition: 'all .95s',
                                            }}
                                            onMouseOver={function btn_descr_show3() {
                                                showDescr3();
                                                trasparentStyle();
                                            }}
                                            onMouseOut={function btn_descr_down3() {
                                                downDescr3();
                                                trasparentStyleBack();
                                            }}
                                            id='btn_descr_compilies' className='btn_descr_compilies'>?</div>
                                        <div
                                            style={{
                                                transform: transformDescrPhp3,
                                                opacity: opacityDescrPhp3,
                                            }}
                                            className='modal'>
                                            <div className='tringle3_php'>
                                                <div
                                                    style={{
                                                        display: displayDescrPhp3
                                                    }}
                                                    className='text_descr_compilies3_php'>В PHP есть множество встроенных функций и сейчас мы используем одну из них, а именно str_contains(). Её задача в нашой программе заключается в анализе. str_contains() проверяет наличие слова или фразы в переменной, объекте, массиве или строке.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString3} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить str_contains()</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_php'>
                                <div className='wrapper_text_php_right'>
                                    <div className='first_part_compilies'>
                                        <span className='php_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 4. Используем функцию $_SERVER, чтобы получить информацию о браузере пользователя и вытащим оттуда имя самого браузера</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPhp4,
                                                transition: 'all .95s',
                                            }}
                                            onMouseOver={function btn_descr_show4() {
                                                showDescr4();
                                                trasparentStyle();
                                            }}
                                            onMouseOut={function btn_descr_down4() {
                                                downDescr4();
                                                trasparentStyleBack();
                                            }}
                                            id='btn_descr_compilies' className='btn_descr_compilies'>?</div>
                                        <div
                                            style={{
                                                transform: transformDescrPhp4,
                                                opacity: opacityDescrPhp4,
                                            }}
                                            className='modal'>
                                            <div className='tringle4_php'>
                                                <div
                                                    style={{
                                                        display: displayDescrPhp4
                                                    }}
                                                    className='text_descr_compilies4_php'> Как сказано ранее, str_contains будет проверять некую ячейку памяти. Данной ячейкой мы сделаем $_SERVER, а искомой строкой - 'Firefox'. $_SERVER - специальный объект PHP, он содержит всю информацию полученную от Web-сервера. В нём есть множествоключей и один из них имя браузера, на него нам нужно сослаться. В итоге мы получаем функцию, которая проверяет: есть ли в ключе объекта $_SERVER строка 'Firefox'.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString4} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить строки</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_php'>
                                <div className='wrapper_text_php'>
                                    <div className='first_part_compilies'>
                                        <span className='php_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 5. Добавим echo, чтобы вывести сообщение для пользователя</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPhp5,
                                                transition: 'all .95s',
                                            }}
                                            onMouseOver={function btn_descr_show5() {
                                                showDescr5();
                                                trasparentStyle();
                                            }}
                                            onMouseOut={function btn_descr_down5() {
                                                downDescr5();
                                                trasparentStyleBack();
                                            }}
                                            id='btn_descr_compilies' className='btn_descr_compilies'>?</div>
                                        <div
                                            style={{
                                                transform: transformDescrPhp5,
                                                opacity: opacityDescrPhp5,
                                            }}
                                            className='modal'>
                                            <div className='tringle5_php'>
                                                <div
                                                    style={{
                                                        display: displayDescrPhp5
                                                    }}
                                                    className='text_descr_compilies5_php'>В Python для вывода сообщения пользователя есть оператор print. В C++ таковым является puts. А в JS - alert или console.log. В PHP это другой оператор - echo.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString5} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить echo</span>
                                </div>
                            </div>


                            <div className='cont_wrapper_text_php'>
                                <div className='wrapper_text_php_right'>
                                    <div className='first_part_compilies'>
                                        <span className='php_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 6. Добавим ещё несколько проверок</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPhp6,
                                                transition: 'all .95s',
                                            }}
                                            onMouseOver={function btn_descr_show6() {
                                                showDescr6();
                                                trasparentStyle();
                                            }}
                                            onMouseOut={function btn_descr_down6() {
                                                downDescr6();
                                                trasparentStyleBack();
                                            }}
                                            id='btn_descr_compilies' className='btn_descr_compilies'>?</div>
                                        <div
                                            style={{
                                                transform: transformDescrPhp6,
                                                opacity: opacityDescrPhp6,
                                            }}
                                            className='modal'>
                                            <div className='tringle6_php'>
                                                <div
                                                    style={{
                                                        display: displayDescrPhp6
                                                    }}
                                                    className='text_descr_compilies6_php'> Согласитесь, что программа, отслеживающая только Firefox выглядит странно. Поэтому необходимо повторить тот же алгоритм ещё несколько раз, отслеживая другие популярные браузеры: Firefox, Microsoft Edge, Opera и Chrome.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={function () {
                                        showWin();
                                        showString6();
                                        showResultCodePhp();
                                        handleChangeTakeNameOfAgent();
                                    }} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить ещё несколько браузеров</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='area_code'>
                        <div className='cont_txt_area_code'>
                            <br /><span className='php_string1 php_string' style={{ display: displayString1 }}>&#60;?php</span>
                            <br />
                            <br />
                            <span className='php_string2 php_string' style={{ display: displayString2 }}>if(</span>
                            <span className='php_string3 php_string' style={{ display: displayString3 }}> str_contains (</span>
                            <span className='php_string2 php_string' style={{ display: displayString4 }}>$_SERVER['HTTP_USER_AGENT'], 'Firefox' </span>
                            <span className='php_string3 php_string' style={{ display: displayString3 }}>)</span>
                            <span className='php_string2 php_string' style={{ display: displayString2 }}>) &#123;</span>
                            <br />
                            <span className='php_string3 php_string' style={{ display: displayString5 }}>echo 'Вы используете Firefox'</span>
                            <br />
                            <span className='php_string4 php_string' style={{ display: displayString2 }}>&#125;</span>
                            <br />
                            <span className='php_string5 php_string' style={{ display: displayString6 }}>
                                <br />    elif (str_contains($_SERVER['HTTP_USER_AGENT'], 'Edg')) &#123;
                                <br />    echo 'Вы используете Edge'

                                <br />    &#125;
                                <br />
                                <br />    elif (str_contains($_SERVER['HTTP_USER_AGENT'], 'Opera')) &#123;
                                <br />    echo 'Вы используете Opera'

                                <br />    &#125;
                                <br />
                                <br />    elif (str_contains($_SERVER['HTTP_USER_AGENT'], 'Chrome')) &#123;
                                <br />    echo 'Вы используете Chrome'
                                <br />    &#125;
                            </span>
                            <br />
                            <span className='php_string6 php_string' style={{ display: displayString1 }}>?&#62;</span>
                        </div>
                        <div className='back_container' style={{ display: displayWin, opacity: opacityWin, transition: 'all .6s ease-in-out' }}>
                            <div className='text_back_container'>Молодец! Ты сделал браузер-детектор!</div>
                            <button onClick={hidePhp} className='btn_back_container'>Н А З А Д</button>
                        </div>
                        <div
                            style={{
                                display: displayResultCodePhp,
                                opacity: opacityResultCodePhp,
                                transition: 'all .6s ease-in-out '
                            }} className='result_code'>
                            Вы используете {nameOfAgent}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Php;
