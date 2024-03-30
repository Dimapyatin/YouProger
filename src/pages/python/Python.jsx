import './Python.css';
import React, { useEffect, useState } from 'react';



function Python({ hidePython }) {

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
            setDisplayString5('inline')
        }, 50);
    }
    function showString6() {
        setTimeout(() => {
            setDisplayString6('inline')
        }, 50);
    }
    function showWin() {
        setDisplayWin('inline')
        setTimeout(() => {
            setOpacityWin('1');
        }, 3000);
    }

    const [opacityAlertBtnDescrPython1, setOpacityAlertBtnDescrPython1] = useState('0')

    const [displayDescrPython1, setDisplayDescrPython1] = useState('none')
    const [transformDescrPython1, setTransformDescrPython1] = useState('scale(0)')
    const [opacityDescrPython1, setOpacityDescrPython1] = useState('0')
    const [opacityBtnDescrPython1, setOpacityBtnDescrPython1] = useState('1')

    const [displayDescrPython2, setDisplayDescrPython2] = useState('none')
    const [transformDescrPython2, setTransformDescrPython2] = useState('scale(0)')
    const [opacityDescrPython2, setOpacityDescrPython2] = useState('0')
    const [opacityBtnDescrPython2, setOpacityBtnDescrPython2] = useState('1')

    const [displayDescrPython3, setDisplayDescrPython3] = useState('none')
    const [transformDescrPython3, setTransformDescrPython3] = useState('scale(0)')
    const [opacityDescrPython3, setOpacityDescrPython3] = useState('0')
    const [opacityBtnDescrPython3, setOpacityBtnDescrPython3] = useState('1')

    const [displayDescrPython4, setDisplayDescrPython4] = useState('none')
    const [transformDescrPython4, setTransformDescrPython4] = useState('scale(0)')
    const [opacityDescrPython4, setOpacityDescrPython4] = useState('0')
    const [opacityBtnDescrPython4, setOpacityBtnDescrPython4] = useState('1')

    const [displayDescrPython5, setDisplayDescrPython5] = useState('none')
    const [transformDescrPython5, setTransformDescrPython5] = useState('scale(0)')
    const [opacityDescrPython5, setOpacityDescrPython5] = useState('0')
    const [opacityBtnDescrPython5, setOpacityBtnDescrPython5] = useState('1')

    const [displayDescrPython6, setDisplayDescrPython6] = useState('none')
    const [transformDescrPython6, setTransformDescrPython6] = useState('scale(0)')
    const [opacityDescrPython6, setOpacityDescrPython6] = useState('0')
    const [opacityBtnDescrPython6, setOpacityBtnDescrPython6] = useState('1')


    function showDescr1() {
        setTransformDescrPython1('scale(1)')
        setDisplayDescrPython1('block')
        setOpacityDescrPython1('1')

        setOpacityAlertBtnDescrPython1('1')
        setTimeout(() => {
            setOpacityAlertBtnDescrPython1('0')
        }, 10000);

        setOpacityBtnDescrPython2('0')
        setOpacityBtnDescrPython3('0')
        setOpacityBtnDescrPython4('0')
        setOpacityBtnDescrPython5('0')
        setOpacityBtnDescrPython6('0')

    }

    function downDescr1(event) {
        setTransformDescrPython1('scale(0)')
        setOpacityDescrPython1('0')

        setOpacityAlertBtnDescrPython1('0')

        setOpacityBtnDescrPython2('1')
        setOpacityBtnDescrPython3('1')
        setOpacityBtnDescrPython4('1')
        setOpacityBtnDescrPython5('1')
        setOpacityBtnDescrPython6('1')

    }

    function showDescr2() {
        setTransformDescrPython2('scale(1)')
        setDisplayDescrPython2('block')
        setOpacityDescrPython2('1')

        setOpacityBtnDescrPython1('0')
        setOpacityBtnDescrPython3('0')
        setOpacityBtnDescrPython4('0')
        setOpacityBtnDescrPython5('0')
        setOpacityBtnDescrPython6('0')

    }

    function downDescr2() {
        setTransformDescrPython2('scale(0)')
        setOpacityDescrPython2('0')

        setOpacityBtnDescrPython1('1')
        setOpacityBtnDescrPython3('1')
        setOpacityBtnDescrPython4('1')
        setOpacityBtnDescrPython5('1')
        setOpacityBtnDescrPython6('1')
    }

    function showDescr3() {
        setTransformDescrPython3('scale(1)')
        setDisplayDescrPython3('block')
        setOpacityDescrPython3('1')

        setOpacityBtnDescrPython1('0')
        setOpacityBtnDescrPython2('0')
        setOpacityBtnDescrPython4('0')
        setOpacityBtnDescrPython5('0')
        setOpacityBtnDescrPython6('0')

    }

    function downDescr3() {
        setTransformDescrPython3('scale(0)')
        setOpacityDescrPython3('0')

        setOpacityBtnDescrPython1('1')
        setOpacityBtnDescrPython2('1')
        setOpacityBtnDescrPython4('1')
        setOpacityBtnDescrPython5('1')
        setOpacityBtnDescrPython6('1')
    }

    function showDescr4() {
        setTransformDescrPython4('scale(1)')
        setDisplayDescrPython4('block')
        setOpacityDescrPython4('1')

        setOpacityBtnDescrPython1('0')
        setOpacityBtnDescrPython2('0')
        setOpacityBtnDescrPython3('0')
        setOpacityBtnDescrPython5('0')
        setOpacityBtnDescrPython6('0')

    }

    function downDescr4() {
        setTransformDescrPython4('scale(0)')
        setOpacityDescrPython4('0')

        setOpacityBtnDescrPython1('1')
        setOpacityBtnDescrPython2('1')
        setOpacityBtnDescrPython3('1')
        setOpacityBtnDescrPython5('1')
        setOpacityBtnDescrPython6('1')
    }

    function showDescr5() {
        setTransformDescrPython5('scale(1)')
        setDisplayDescrPython5('block')
        setOpacityDescrPython5('1')

        setOpacityBtnDescrPython1('0')
        setOpacityBtnDescrPython2('0')
        setOpacityBtnDescrPython3('0')
        setOpacityBtnDescrPython4('0')
        setOpacityBtnDescrPython6('0')

    }

    function downDescr5() {
        setTransformDescrPython5('scale(0)')
        setOpacityDescrPython5('0')

        setOpacityBtnDescrPython1('1')
        setOpacityBtnDescrPython2('1')
        setOpacityBtnDescrPython3('1')
        setOpacityBtnDescrPython4('1')
        setOpacityBtnDescrPython6('1')
    }

    function showDescr6() {
        setTransformDescrPython6('scale(1)')
        setDisplayDescrPython6('block')
        setOpacityDescrPython6('1')

        setOpacityBtnDescrPython1('0')
        setOpacityBtnDescrPython2('0')
        setOpacityBtnDescrPython3('0')
        setOpacityBtnDescrPython4('0')
        setOpacityBtnDescrPython5('0')

    }

    function downDescr6() {
        setTransformDescrPython6('scale(0)')
        setOpacityDescrPython6('0')

        setOpacityBtnDescrPython1('1')
        setOpacityBtnDescrPython2('1')
        setOpacityBtnDescrPython3('1')
        setOpacityBtnDescrPython4('1')
        setOpacityBtnDescrPython5('1')
    }

    const [inputValuePython1, setInputValuePython1] = useState('');
    const handleChangeTakeValue1 = (event) => {
        setInputValuePython1(event.target.value);
    };

    const [inputValuePython2, setInputValuePython2] = useState('');
    const handleChangeTakeValue2 = (event) => {
        setInputValuePython2(event.target.value);
    };

    const [displayResultCodePython, setDisplayResultCodePython] = useState('none')
    const [opacityResultCodePython, setOpacityResultCodePython] = useState('0')
    function showResultCodePython() {
        setTimeout(() => {
            setDisplayResultCodePython('inline');
        }, 1000);
        setOpacityResultCodePython('1');
    }

    const [displayResultCodeStringPython2, setDisplayResultCodeStringPython2] = useState('none')
    const [displayResultCodeStringPython1, setDisplayResultCodeStringPython1] = useState('none')

    const handleChangeVisibleResultPython1 = (event) => {
        if (event.key === 'Enter') {
            console.log("Сработал enter");
            setDisplayResultCodeStringPython1('inline');
        }
    }

    const handleChangeVisibleResultPython2 = (event) => {
        if (event.key === 'Enter') {
            console.log("Сработал enter");
            setDisplayResultCodeStringPython2('block');
            calculateResultInputPython();
        }
    }

    const handleOperatorChange = (e) => {
        setInputValuePython3(e.target.value);
    };

    const [inputValuePython3, setInputValuePython3] = useState('');
    const [resultInputValuesPython, setResultInputValuesPython] = useState('');
    const calculateResultInputPython = (event) => {

        const number1 = parseInt(inputValuePython1);
        const number2 = parseInt(inputValuePython2);
        if (isNaN(number1) || isNaN(number2)) {
            setResultInputValuesPython("Ошибка: введите числа в первых двух полях!");
            return;
        }
        switch (inputValuePython3) {
            case "+":
                setResultInputValuesPython(number1 + number2);
                break;
            case "-":
                setResultInputValuesPython(number1 - number2);
                break;
            default:
                setResultInputValuesPython("Ошибка: неверный оператор!");
        }
    }

    return (
        <div>
            <div className='python_wrapper'>
                <div className='python_backgr'>
                    <div className='python_text'>
                        <div className='python_headText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} >
                            Знакомьтесь, Python!
                        </div>
                        <div className='python_mainText'>
                            <span className='python_titleText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}>
                                В Python строгие правила и синтаксис, поэтому сейчас мы научимся самым базовым вещам на нём.
                            </span>
                            <div className='order_cont_wrapper_text_python'></div>
                            <div className='cont_wrapper_text_python'>

                                <div className='wrapper_text_python'>
                                    <div className='first_part_compilies'>
                                        <span className='python_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 1. Напишем команду print, чтобы иметь возможность выводить данные в программу</span>
                                        {/* <div style={{ opacity: opacityAlertBtnDescrPython1, transition: 'all .8s' }} className='alert_btn_descr_compilies1'>Нажмите, чтобы зафиксировать текст</div> */}
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPython1,
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
                                                transform: transformDescrPython1,
                                                opacity: opacityDescrPython1,
                                            }}
                                            className='modal'>
                                            <div className='tringle1'>
                                                <div
                                                    style={{
                                                        display: displayDescrPython1,
                                                    }}
                                                    id='text_descr_compilies1-2'
                                                    className='text_descr_compilies1'>Самое первое, что вы встретите в python это оператор print(""). С его помощью осуществляется вывод сообщения пользователю в программе. Внутри круглых скобок стоят двойные кавычки, ими выделяется тип данных string - строка. Вписав в них что-нибудь, это будет отображаться при запуске программы как простой текст. Давайте посмотрим, как он выглядит в коде.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString1} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить print</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_python'>
                                <div className='wrapper_text_python_right'>
                                    <div className='first_part_compilies'>
                                        <span className='python_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br />2. Введём в программу перменные для облегчения работы с кодом</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPython2,
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
                                                transform: transformDescrPython2,
                                                opacity: opacityDescrPython2,

                                            }}
                                            className='modal'>
                                            <div className='tringle2'>
                                                <div
                                                    style={{
                                                        display: displayDescrPython2
                                                    }}
                                                    className='text_descr_compilies2'>Переменные. Переменная умными словами это ячейка памяти с хранящимися в ней данными. Проще говоря коробка с какими-то значениями, которые вы сами можете туда положить. С переменными есть множество действий, но для начала давайте просто создадим парочку и назовём их num1 и num2 - первое число и второе число. Помните, что после обьявления переменной обязательно должна стоять ';'.
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString2} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить переменные</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_python'>
                                <div className='wrapper_text_python'>
                                    <div className='first_part_compilies'>
                                        <span className='python_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 3. Добавим input, чтобы пользователь мог взаимодействовать с программой</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPython3,
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
                                                transform: transformDescrPython3,
                                                opacity: opacityDescrPython3,
                                            }}
                                            className='modal'>
                                            <div className='tringle3'>
                                                <div
                                                    style={{
                                                        display: displayDescrPython3
                                                    }}
                                                    className='text_descr_compilies3'>Чтобы будущий пользователь нашей будущей программы мог ею пользоваться нужно добавить аспект взаимодействия. Почти во всех современных языках программаирования есть ключевое слово(тег) для ввода пользователем каких-то символов - input(). Также, как и с print() в скобках в кавычках вы можете написать подсказку для пользователя. Давайте добавим в код input.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString3} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить input</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_python'>
                                <div className='wrapper_text_python_right'>
                                    <div className='first_part_compilies'>
                                        <span className='python_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 4. Внесём условные операторы для проверки условий и упрощения кода</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPython4,
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
                                                transform: transformDescrPython4,
                                                opacity: opacityDescrPython4,
                                            }}
                                            className='modal'>
                                            <div className='tringle4'>
                                                <div
                                                    style={{
                                                        display: displayDescrPython4
                                                    }}
                                                    className='text_descr_compilies4'>Операторы. Они выполняют очень важную работу - проверяют код по заданным условиям. Разработчик вводит условный оператор, вносит в него аргумент и задаёт условие. После выполнения проверки условный оператор выдаёт значение true или false в зависмости от того, какой результат дала проверка. Давайте добавим операторы if, elif и else в нашу программу и посмотрим, как это пишется в деле.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString4} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить if, elif и else</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_python'>
                                <div className='wrapper_text_python'>
                                    <div className='first_part_compilies'>
                                        <span className='python_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 5. Дадим условным операторам условия и данные, которые нужно проверять</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPython5,
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
                                                transform: transformDescrPython5,
                                                opacity: opacityDescrPython5,
                                            }}
                                            className='modal'>
                                            <div className='tringle5'>
                                                <div
                                                    style={{
                                                        display: displayDescrPython5
                                                    }}
                                                    className='text_descr_compilies5'>Так как операторы if, elif и else являются условными операторами, мы должны дать им какие-то условия. Для if создадим условие, при котором пользователь должен ввести в input переменной <span>ch</span> знак +, а для elif соответсвенно значение <span>ch</span> равное -. Помните, что после условия обязательно должно стоять ':'.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString5} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить условия</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_python'>
                                <div className='wrapper_text_python_right'>
                                    <div className='first_part_compilies'>
                                        <span className='python_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 6. Добавим функцию считывания и опробуем код в работе</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrPython6,
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
                                                transform: transformDescrPython6,
                                                opacity: opacityDescrPython6,
                                            }}
                                            className='modal'>
                                            <div className='tringle6'>
                                                <div
                                                    style={{
                                                        display: displayDescrPython6
                                                    }}
                                                    className='text_descr_compilies6'>И последняя деталь вашего небольшого проекта заключается в том, чтобы вывести итоговые данные, которые мы до этого готовили. Result это функция, которая используется для решения математических задач. Далее определяем тип данных переменных num1 и num2. Зачем? Чтобы не получилось ошибки! Мы намерены складывать и вычитать эти две переменные, поэтому они должны быть числами. Для этого присваиваем им тип данных int - целое число.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={function () {
                                        showWin();
                                        showString6();
                                        showResultCodePython();
                                    }} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить result и тип данных</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='area_code'>
                        <div className='cont_txt_area_code'>

                            <br /><span className='python_string1 python_string' style={{ display: displayString1 }}>print("Напишите два целых числа: ");</span>
                            <br />
                            <br />
                            <span className='python_string2 python_string' style={{ display: displayString2 }}>num1 =</span>
                            <span className='python_string3 python_string' style={{ display: displayString3 }}> input();</span>
                            <br />
                            <span className='python_string2 python_string' style={{ display: displayString2 }}>num2 = </span>
                            <span className='python_string3 python_string' style={{ display: displayString3 }}>input();</span>
                            <br />
                            <br />
                            <span className='python_string2 python_string' style={{ display: displayString2 }}>ch = </span>
                            <span className='python_string3 python_string' style={{ display: displayString3 }}>input("Выберите действие (+ или -): ");</span>
                            <br />
                            <span className='python_string4 python_string' style={{ display: displayString4 }}>if</span>
                            <span className='python_string5 python_string' style={{ display: displayString5 }}> ch == '+':</span>
                            <br />
                            <span className='python_string6 python_string' style={{ display: displayString6 }}>result = int ( num1 ) + int (num2 );
                                <br />print( num1, "+", num2, "=", result );
                            </span>
                            <br />
                            <br />
                            <span className='python_string4 python_string' style={{ display: displayString4 }}>elif</span>
                            <span className='python_string5 python_string' style={{ display: displayString5 }}> ch == '-':</span>
                            <br />
                            <span className='python_string6 python_string' style={{ display: displayString6 }}>result = int ( num1 ) - int ( num2 );
                                <br />print( num1, "-", num2, "=", result );
                            </span>

                        </div>
                        <div className='back_container' style={{ display: displayWin, opacity: opacityWin, transition: 'all .6s ease-in-out' }}>
                            <button onClick={hidePython} className='btn_back_container'>Н А З А Д</button>
                        </div>

                        <div
                            style={{
                                display: displayResultCodePython,
                                opacity: opacityResultCodePython,
                                transition: 'all .6s ease-in-out '
                            }} className='result_code'>
                            <div>Напишите два целых числа:
                                <br /><input className='input_result_python1' type="number"
                                    maxLength={9}
                                    onChange={handleChangeTakeValue1}
                                />
                                <br />
                                <input className='input_result_python2' type="number"
                                    maxLength={9}
                                    onKeyDown={handleChangeVisibleResultPython1}
                                    onChange={handleChangeTakeValue2}
                                />
                            </div>

                            <div style={{
                                display: displayResultCodeStringPython1
                            }}>Выберите действие (+ | -):
                                <br /><input className='input_result_python3' type="text"
                                    maxLength={1}
                                    value={inputValuePython3}
                                    onKeyDown={handleChangeVisibleResultPython2}
                                    onChange={handleOperatorChange}
                                />
                            </div>
                            <div style={{
                                display: displayResultCodeStringPython2
                            }}>{resultInputValuesPython}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Python;
