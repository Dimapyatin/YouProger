import React from 'react';
import './Js.css';
import { useState } from 'react';

const Js = ({ hideJs }) => {
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
            setDisplayString1('block')
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
    function showWin() {
        setDisplayWin('inline')
        setTimeout(() => {
            setOpacityWin('1');
        }, 3000);
    }

    const [opacityAlertBtnDescrJs1, setOpacityAlertBtnDescrJs1] = useState('0')


    const [displayDescrJs1, setDisplayDescrJs1] = useState('none')
    const [transformDescrJs1, setTransformDescrJs1] = useState('scale(0)')
    const [opacityDescrJs1, setOpacityDescrJs1] = useState('0')
    const [opacityBtnDescrJs1, setOpacityBtnDescrJs1] = useState('1')

    const [displayDescrJs2, setDisplayDescrJs2] = useState('none')
    const [transformDescrJs2, setTransformDescrJs2] = useState('scale(0)')
    const [opacityDescrJs2, setOpacityDescrJs2] = useState('0')
    const [opacityBtnDescrJs2, setOpacityBtnDescrJs2] = useState('1')

    const [displayDescrJs3, setDisplayDescrJs3] = useState('none')
    const [transformDescrJs3, setTransformDescrJs3] = useState('scale(0)')
    const [opacityDescrJs3, setOpacityDescrJs3] = useState('0')
    const [opacityBtnDescrJs3, setOpacityBtnDescrJs3] = useState('1')

    const [displayDescrJs4, setDisplayDescrJs4] = useState('none')
    const [transformDescrJs4, setTransformDescrJs4] = useState('scale(0)')
    const [opacityDescrJs4, setOpacityDescrJs4] = useState('0')
    const [opacityBtnDescrJs4, setOpacityBtnDescrJs4] = useState('1')

    const [displayDescrJs5, setDisplayDescrJs5] = useState('none')
    const [transformDescrJs5, setTransformDescrJs5] = useState('scale(0)')
    const [opacityDescrJs5, setOpacityDescrJs5] = useState('0')
    const [opacityBtnDescrJs5, setOpacityBtnDescrJs5] = useState('1')

    const [displayDescrJs6, setDisplayDescrJs6] = useState('none')
    const [transformDescrJs6, setTransformDescrJs6] = useState('scale(0)')
    const [opacityDescrJs6, setOpacityDescrJs6] = useState('0')
    const [opacityBtnDescrJs6, setOpacityBtnDescrJs6] = useState('1')


    function showDescr1() {
        setTransformDescrJs1('scale(1)')
        setDisplayDescrJs1('block')
        setOpacityDescrJs1('1')

        setOpacityAlertBtnDescrJs1('1')
        setTimeout(() => {
            setOpacityAlertBtnDescrJs1('0')
        }, 10000);

        setOpacityBtnDescrJs2('0')
        setOpacityBtnDescrJs3('0')
        setOpacityBtnDescrJs4('0')
        setOpacityBtnDescrJs5('0')
        setOpacityBtnDescrJs6('0')

    }

    function downDescr1(event) {
        setTransformDescrJs1('scale(0)')
        setOpacityDescrJs1('0')

        setOpacityAlertBtnDescrJs1('0')

        setOpacityBtnDescrJs2('1')
        setOpacityBtnDescrJs3('1')
        setOpacityBtnDescrJs4('1')
        setOpacityBtnDescrJs5('1')
        setOpacityBtnDescrJs6('1')

    }

    function showDescr2() {
        setTransformDescrJs2('scale(1)')
        setDisplayDescrJs2('block')
        setOpacityDescrJs2('1')

        setOpacityBtnDescrJs1('0')
        setOpacityBtnDescrJs3('0')
        setOpacityBtnDescrJs4('0')
        setOpacityBtnDescrJs5('0')
        setOpacityBtnDescrJs6('0')

    }

    function downDescr2() {
        setTransformDescrJs2('scale(0)')
        setOpacityDescrJs2('0')

        setOpacityBtnDescrJs1('1')
        setOpacityBtnDescrJs3('1')
        setOpacityBtnDescrJs4('1')
        setOpacityBtnDescrJs5('1')
        setOpacityBtnDescrJs6('1')
    }

    function showDescr3() {
        setTransformDescrJs3('scale(1)')
        setDisplayDescrJs3('block')
        setOpacityDescrJs3('1')

        setOpacityBtnDescrJs1('0')
        setOpacityBtnDescrJs2('0')
        setOpacityBtnDescrJs4('0')
        setOpacityBtnDescrJs5('0')
        setOpacityBtnDescrJs6('0')

    }

    function downDescr3() {
        setTransformDescrJs3('scale(0)')
        setOpacityDescrJs3('0')

        setOpacityBtnDescrJs1('1')
        setOpacityBtnDescrJs2('1')
        setOpacityBtnDescrJs4('1')
        setOpacityBtnDescrJs5('1')
        setOpacityBtnDescrJs6('1')
    }

    function showDescr4() {
        setTransformDescrJs4('scale(1)')
        setDisplayDescrJs4('block')
        setOpacityDescrJs4('1')

        setOpacityBtnDescrJs1('0')
        setOpacityBtnDescrJs2('0')
        setOpacityBtnDescrJs3('0')
        setOpacityBtnDescrJs5('0')
        setOpacityBtnDescrJs6('0')

    }

    function downDescr4() {
        setTransformDescrJs4('scale(0)')
        setOpacityDescrJs4('0')

        setOpacityBtnDescrJs1('1')
        setOpacityBtnDescrJs2('1')
        setOpacityBtnDescrJs3('1')
        setOpacityBtnDescrJs5('1')
        setOpacityBtnDescrJs6('1')
    }

    function showDescr5() {
        setTransformDescrJs5('scale(1)')
        setDisplayDescrJs5('block')
        setOpacityDescrJs5('1')

        setOpacityBtnDescrJs1('0')
        setOpacityBtnDescrJs2('0')
        setOpacityBtnDescrJs3('0')
        setOpacityBtnDescrJs4('0')
        setOpacityBtnDescrJs6('0')

    }

    function downDescr5() {
        setTransformDescrJs5('scale(0)')
        setOpacityDescrJs5('0')

        setOpacityBtnDescrJs1('1')
        setOpacityBtnDescrJs2('1')
        setOpacityBtnDescrJs3('1')
        setOpacityBtnDescrJs4('1')
        setOpacityBtnDescrJs6('1')
    }

    function showDescr6() {
        setTransformDescrJs6('scale(1)')
        setDisplayDescrJs6('block')
        setOpacityDescrJs6('1')

        setOpacityBtnDescrJs1('0')
        setOpacityBtnDescrJs2('0')
        setOpacityBtnDescrJs3('0')
        setOpacityBtnDescrJs4('0')
        setOpacityBtnDescrJs5('0')

    }

    function downDescr6() {
        setTransformDescrJs6('scale(0)')
        setOpacityDescrJs6('0')

        setOpacityBtnDescrJs1('1')
        setOpacityBtnDescrJs2('1')
        setOpacityBtnDescrJs3('1')
        setOpacityBtnDescrJs4('1')
        setOpacityBtnDescrJs5('1')
    }

    const [displayResultCodeJs, setDisplayResultCodeJs] = useState('none')
    const [opacityResultCodeJs, setOpacityResultCodeJs] = useState('0')
    function showResultCodeJs() {
        setTimeout(() => {
            setDisplayResultCodeJs('inline');
        }, 1000);
        setOpacityResultCodeJs('1');
    }

    const [randomNumState, setRandomNumState] = useState(0)
    const randomNumberFunction = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    function calculateResultJs() {
        const randomNum = randomNumberFunction(0, 1);
        setRandomNumState(randomNum);
    }

    return (
        <div>
            <div className='Js_wrapper'>
                <div className='Js_backgr'>
                    <div className='Js_text'>
                        <div className='Js_headText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} >
                            Знакомьтесь, JavaScript!
                        </div>
                        <div className='Js_mainText'>
                            <span className='Js_titleText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}>
                                У Js довольно простой синтаксис и он не такой требовательный к каждому знаку в коде, поэтому он считается одним из лучших для начинающих программистов. Сейчас мы с вами напишем на чистом Js функцию, которая будет генерировать случайное число от 0 до 1.
                            </span>
                            <div className='order_cont_wrapper_text_Js'></div>
                            <div className='cont_wrapper_text_Js'>

                                <div className='wrapper_text_Js'>
                                    <div className='first_part_compilies'>
                                        <span className='Js_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 1. Объявим функцию randomNumber, в которой будет выполняться программа</span>
                                        {/* <div style={{ opacity: opacityAlertBtnDescrJs1, transition: 'all .8s' }} className='alert_btn_descr_compilies1'>Нажмите, чтобы зафиксировать текст</div> */}
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrJs1,
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
                                                transform: transformDescrJs1,
                                                opacity: opacityDescrJs1,
                                            }}
                                            className='modal'>
                                            <div className='tringle1_Js'>
                                                <div
                                                    style={{
                                                        display: displayDescrJs1,
                                                    }}
                                                    id='text_descr_compilies1-2'
                                                    className='text_descr_compilies1_Js'>Сначала нам нужно объявить саму функцию и дать ей имя. Это делается при помощи ключевого слова function, а после названия функции нужно написать круглые скобки для действий, которые должны будут ею выполняться.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString1} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Объявить функцию</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_Js'>
                                <div className='wrapper_text_Js_right'>
                                    <div className='first_part_compilies'>
                                        <span className='Js_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br />2. Добавим return, чтобы получать значения</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrJs2,
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
                                                transform: transformDescrJs2,
                                                opacity: opacityDescrJs2,

                                            }}
                                            className='modal'>
                                            <div className='tringle2_Js'>
                                                <div
                                                    style={{
                                                        display: displayDescrJs2
                                                    }}
                                                    className='text_descr_compilies2_Js'>В Js есть ключевое слово return. С помощью него мы можем получить непосредственно окончательный результат функции. Оно не всегда используется, в основном в случаях, когда необходимо произвести математические операции с нахождением точного результата.
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString2} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить return</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_Js'>
                                <div className='wrapper_text_Js'>
                                    <div className='first_part_compilies'>
                                        <span className='Js_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 3. Используем Math.random и Math.floor для нахождения случайного числа</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrJs3,
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
                                                transform: transformDescrJs3,
                                                opacity: opacityDescrJs3,
                                            }}
                                            className='modal'>
                                            <div className='tringle3_Js'>
                                                <div
                                                    style={{
                                                        display: displayDescrJs3
                                                    }}
                                                    className='text_descr_compilies3_Js'>Далее нам нужно использовать встроенный в Js метод Math.random, но он возвращает нам числа с плавающей запятой от 0(включительно) до 1(исключая), поэтому присвоим ему ещё один метод Math.floor, который будет выполнять округление до целого. Ну и умножим метод Math.random на 2, так как нам нужно число от 0(включительно) до 1(включительно).
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString3} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить Math.random</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_Js'>
                                <div className='wrapper_text_Js_right'>
                                    <div className='first_part_compilies'>
                                        <span className='Js_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 4. Выведем результат функции через console.log()</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrJs4,
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
                                                transform: transformDescrJs4,
                                                opacity: opacityDescrJs4,
                                            }}
                                            className='modal'>
                                            <div className='tringle4_Js'>
                                                <div
                                                    style={{
                                                        display: displayDescrJs4
                                                    }}
                                                    className='text_descr_compilies4_Js'>И последнее, что нам необходимо это куда-то вывести результат кода. Так как мы работаем без подключения HTML, выведем в консоль. Внутри команды console.log(); пишем название функции вместе с её круглыми скобками. Если написать функцию без скобок, то Js примет её за переменную.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={function () {
                                        showWin();
                                        showString4();
                                        showResultCodeJs();
                                    }} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить console.log()</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='area_code'>
                        <div className='cont_txt_area_code'>

                            <br /><span className='Js_string1 Js_string' style={{ display: displayString1 }}>function randomNumber() &#123;</span>
                            <span className='Js_string2 Js_string' style={{ display: displayString2 }}>return</span>
                            <span className='Js_string3 Js_string' style={{ display: displayString3 }}> Math.foor(Math.random() * 2);</span>
                            <br />
                            <span className='Js_string2 Js_string' style={{ display: displayString1 }}>&#125;</span>
                            <span className='Js_string3 Js_string' style={{ display: displayString4 }}>console.log(randomNumber());</span>

                        </div>

                        <div className='back_container' style={{ display: displayWin, opacity: opacityWin, transition: 'all .6s ease-in-out' }}>
                            <div className='text_back_container'>Молодец! Ты сделал рандомайзер!</div>
                            <button onClick={hideJs} className='btn_back_container'>Н А З А Д</button>
                        </div>

                        <div
                            style={{
                                display: displayResultCodeJs,
                                opacity: opacityResultCodeJs,
                                transition: 'all .6s ease-in-out '
                            }} className='result_code'>
                            <button
                                className='btn_result_Js'
                                onClick={calculateResultJs}>Случайное число</button>
                            <div>{randomNumState}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Js;
