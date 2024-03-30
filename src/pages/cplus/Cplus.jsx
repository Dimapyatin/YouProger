import './Cplus.css';
import { useState } from 'react';

function Cplus({ hideCplus }) {

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
            setDisplayString2('block')
        }, 50);
    }
    function showString3() {
        setTimeout(() => {
            setDisplayString3('block')
        }, 50);
    }
    function showString4() {
        setTimeout(() => {
            setDisplayString4('block')
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

    const [opacityAlertBtnDescrCplus1, setOpacityAlertBtnDescrCplus1] = useState('0')


    const [displayDescrCplus1, setDisplayDescrCplus1] = useState('none')
    const [transformDescrCplus1, setTransformDescrCplus1] = useState('scale(0)')
    const [opacityDescrCplus1, setOpacityDescrCplus1] = useState('0')
    const [opacityBtnDescrCplus1, setOpacityBtnDescrCplus1] = useState('1')

    const [displayDescrCplus2, setDisplayDescrCplus2] = useState('none')
    const [transformDescrCplus2, setTransformDescrCplus2] = useState('scale(0)')
    const [opacityDescrCplus2, setOpacityDescrCplus2] = useState('0')
    const [opacityBtnDescrCplus2, setOpacityBtnDescrCplus2] = useState('1')

    const [displayDescrCplus3, setDisplayDescrCplus3] = useState('none')
    const [transformDescrCplus3, setTransformDescrCplus3] = useState('scale(0)')
    const [opacityDescrCplus3, setOpacityDescrCplus3] = useState('0')
    const [opacityBtnDescrCplus3, setOpacityBtnDescrCplus3] = useState('1')

    const [displayDescrCplus4, setDisplayDescrCplus4] = useState('none')
    const [transformDescrCplus4, setTransformDescrCplus4] = useState('scale(0)')
    const [opacityDescrCplus4, setOpacityDescrCplus4] = useState('0')
    const [opacityBtnDescrCplus4, setOpacityBtnDescrCplus4] = useState('1')

    const [displayDescrCplus5, setDisplayDescrCplus5] = useState('none')
    const [transformDescrCplus5, setTransformDescrCplus5] = useState('scale(0)')
    const [opacityDescrCplus5, setOpacityDescrCplus5] = useState('0')
    const [opacityBtnDescrCplus5, setOpacityBtnDescrCplus5] = useState('1')

    const [displayDescrCplus6, setDisplayDescrCplus6] = useState('none')
    const [transformDescrCplus6, setTransformDescrCplus6] = useState('scale(0)')
    const [opacityDescrCplus6, setOpacityDescrCplus6] = useState('0')
    const [opacityBtnDescrCplus6, setOpacityBtnDescrCplus6] = useState('1')


    function showDescr1() {
        setTransformDescrCplus1('scale(1)')
        setDisplayDescrCplus1('block')
        setOpacityDescrCplus1('1')

        setOpacityAlertBtnDescrCplus1('1')
        setTimeout(() => {
            setOpacityAlertBtnDescrCplus1('0')
        }, 10000);

        setOpacityBtnDescrCplus2('0')
        setOpacityBtnDescrCplus3('0')
        setOpacityBtnDescrCplus4('0')
        setOpacityBtnDescrCplus5('0')
        setOpacityBtnDescrCplus6('0')

    }

    function downDescr1(event) {
        setTransformDescrCplus1('scale(0)')
        setOpacityDescrCplus1('0')

        setOpacityAlertBtnDescrCplus1('0')

        setOpacityBtnDescrCplus2('1')
        setOpacityBtnDescrCplus3('1')
        setOpacityBtnDescrCplus4('1')
        setOpacityBtnDescrCplus5('1')
        setOpacityBtnDescrCplus6('1')

    }

    function showDescr2() {
        setTransformDescrCplus2('scale(1)')
        setDisplayDescrCplus2('block')
        setOpacityDescrCplus2('1')

        setOpacityBtnDescrCplus1('0')
        setOpacityBtnDescrCplus3('0')
        setOpacityBtnDescrCplus4('0')
        setOpacityBtnDescrCplus5('0')
        setOpacityBtnDescrCplus6('0')

    }

    function downDescr2() {
        setTransformDescrCplus2('scale(0)')
        setOpacityDescrCplus2('0')

        setOpacityBtnDescrCplus1('1')
        setOpacityBtnDescrCplus3('1')
        setOpacityBtnDescrCplus4('1')
        setOpacityBtnDescrCplus5('1')
        setOpacityBtnDescrCplus6('1')
    }

    function showDescr3() {
        setTransformDescrCplus3('scale(1)')
        setDisplayDescrCplus3('block')
        setOpacityDescrCplus3('1')

        setOpacityBtnDescrCplus1('0')
        setOpacityBtnDescrCplus2('0')
        setOpacityBtnDescrCplus4('0')
        setOpacityBtnDescrCplus5('0')
        setOpacityBtnDescrCplus6('0')

    }

    function downDescr3() {
        setTransformDescrCplus3('scale(0)')
        setOpacityDescrCplus3('0')

        setOpacityBtnDescrCplus1('1')
        setOpacityBtnDescrCplus2('1')
        setOpacityBtnDescrCplus4('1')
        setOpacityBtnDescrCplus5('1')
        setOpacityBtnDescrCplus6('1')
    }

    function showDescr4() {
        setTransformDescrCplus4('scale(1)')
        setDisplayDescrCplus4('block')
        setOpacityDescrCplus4('1')

        setOpacityBtnDescrCplus1('0')
        setOpacityBtnDescrCplus2('0')
        setOpacityBtnDescrCplus3('0')
        setOpacityBtnDescrCplus5('0')
        setOpacityBtnDescrCplus6('0')

    }

    function downDescr4() {
        setTransformDescrCplus4('scale(0)')
        setOpacityDescrCplus4('0')

        setOpacityBtnDescrCplus1('1')
        setOpacityBtnDescrCplus2('1')
        setOpacityBtnDescrCplus3('1')
        setOpacityBtnDescrCplus5('1')
        setOpacityBtnDescrCplus6('1')
    }

    function showDescr5() {
        setTransformDescrCplus5('scale(1)')
        setDisplayDescrCplus5('block')
        setOpacityDescrCplus5('1')

        setOpacityBtnDescrCplus1('0')
        setOpacityBtnDescrCplus2('0')
        setOpacityBtnDescrCplus3('0')
        setOpacityBtnDescrCplus4('0')
        setOpacityBtnDescrCplus6('0')

    }

    function downDescr5() {
        setTransformDescrCplus5('scale(0)')
        setOpacityDescrCplus5('0')

        setOpacityBtnDescrCplus1('1')
        setOpacityBtnDescrCplus2('1')
        setOpacityBtnDescrCplus3('1')
        setOpacityBtnDescrCplus4('1')
        setOpacityBtnDescrCplus6('1')
    }

    function showDescr6() {
        setTransformDescrCplus6('scale(1)')
        setDisplayDescrCplus6('block')
        setOpacityDescrCplus6('1')

        setOpacityBtnDescrCplus1('0')
        setOpacityBtnDescrCplus2('0')
        setOpacityBtnDescrCplus3('0')
        setOpacityBtnDescrCplus4('0')
        setOpacityBtnDescrCplus5('0')

    }

    function downDescr6() {
        setTransformDescrCplus6('scale(0)')
        setOpacityDescrCplus6('0')

        setOpacityBtnDescrCplus1('1')
        setOpacityBtnDescrCplus2('1')
        setOpacityBtnDescrCplus3('1')
        setOpacityBtnDescrCplus4('1')
        setOpacityBtnDescrCplus5('1')
    }


    const [inputValueCplus1, setInputValueCplus1] = useState('');
    const handleChangeTakeValue1 = (event) => {
        setInputValueCplus1(event.target.value);
    };

    const [inputValueCplus2, setInputValueCplus2] = useState('');
    const handleChangeTakeValue2 = (event) => {
        setInputValueCplus2(event.target.value);
    };

    const [displayResultCodeCplus, setDisplayResultCodeCplus] = useState('none')
    const [opacityResultCodeCplus, setOpacityResultCodeCplus] = useState('0')
    function showResultCodeCplus() {
        setTimeout(() => {
            setDisplayResultCodeCplus('inline');
        }, 1000);
        setOpacityResultCodeCplus('1');
    }

    const [displayResultCodeStringCplus1, setDisplayResultCodeStringCplus1] = useState('none')

    const handleChangeVisibleResultCplus1 = (event) => {
        if (event.key === 'Enter') {
            console.log("Сработал enter");
            setDisplayResultCodeStringCplus1('block');
            calculateResultInputCplus();
        }
    }

    const [resultInputValuesCplus, setResultInputValuesCplus] = useState('');
    const calculateResultInputCplus = (event) => {

        const number1 = parseInt(inputValueCplus1);
        const number2 = parseInt(inputValueCplus2);
        if (isNaN(number1) || isNaN(number2)) {
            setResultInputValuesCplus("Ошибка: введите числа в первых двух полях!");
            return;
        }
        switch (inputValueCplus2) {
            default:
                setResultInputValuesCplus(-number2 / number1);
            }
    }

    return (
        <div>
            <div className='cplus_wrapper'>

                <div className='cplus_backgr'>

                    <div className='cplus_text'>
                        <div className='cplus_headText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}>
                            Знакомьтесь, C++!
                        </div>
                        <div className='cplus_mainText'>

                            <span className='cplus_titleText' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}>
                                В C++ строгие правила и синтаксис, поэтому сейчас мы научимся самым базовым вещам на нём. Рассмотрим пример решателя линейных уравнений.
                            </span>
                            <div className='order_cont_wrapper_text_cplus'></div>
                            <div className='cont_wrapper_text_cplus'>

                                <div className='wrapper_text_cplus'>
                                    <div className='first_part_compilies'>
                                        <span className='cplus_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 1. Обьявим функцию main, в которой будет выполняться программа</span>
                                        {/* <div style={{ opacity: opacityAlertBtnDescrcplus1, transition: 'all .8s' }} className='alert_btn_descr_compilies1'>Нажмите, чтобы зафиксировать текст</div> */}
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrCplus1,
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
                                                transform: transformDescrCplus1,
                                                opacity: opacityDescrCplus1,
                                            }}
                                            className='modal'>
                                            <div className='tringle1_cplus '>
                                                <div
                                                    style={{
                                                        display: displayDescrCplus1,
                                                    }}
                                                    id='text_descr_compilies1-2'
                                                    className='text_descr_compilies1_cplus'>Каждый проект на C++ начинается с объявления функции. В большинстве случаев программа состоит из множества функций и в итоге они соединяются, давая желаемый результат. Но наша программа будет состоять всего из одной функции.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString1} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Обьявить функцию</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_cplus'>
                                <div className='wrapper_text_cplus_right'>
                                    <div className='first_part_compilies'>
                                        <span className='cplus_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br />2. Добавим функцию puts, чтобы вывести строку в консоль</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrCplus2,
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
                                                transform: transformDescrCplus2,
                                                opacity: opacityDescrCplus2,

                                            }}
                                            className='modal'>
                                            <div className='tringle2_cplus'>
                                                <div
                                                    style={{
                                                        display: displayDescrCplus2
                                                    }}
                                                    className='text_descr_compilies2_cplus'>Далее введем в программу функцию std::puts. Она позволит нам вывести в консоль сообщение в виде текста с типом данных string. В C++ есть и другие функции для вывода данных, но для вывода краткого тезиса или вопроса puts подходит лучше всего, так как она самая ёмкая и простая.
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString2} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Вывести текст </span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_cplus'>
                                <div className='wrapper_text_cplus'>
                                    <div className='first_part_compilies'>
                                        <span className='cplus_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 3. Обьявим две переменные, они будут выполнять роль входных данных</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrCplus3,
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
                                                transform: transformDescrCplus3,
                                                opacity: opacityDescrCplus3,
                                            }}
                                            className='modal'>
                                            <div className='tringle3_cplus'>
                                                <div
                                                    style={{
                                                        display: displayDescrCplus3
                                                    }}
                                                    className='text_descr_compilies3_cplus'>Переменные. Переменная умными словами это ячейка памяти с хранящимися в ней данными. Проще говоря коробка с какими-то значениями, которые вы сами можете туда положить. С переменными есть множество действий, но для начала давайте просто создадим парочку и назовём их a и b - первое число и второе число. Помните, что после обьявления переменной обязательно должна стоять ';'.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString3} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Добавить переменные</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_cplus'>
                                <div className='wrapper_text_cplus_right'>
                                    <div className='first_part_compilies'>
                                        <span className='cplus_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 4. Добавим scanf, чтобы считывать введенные пользователем числа</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrCplus4,
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
                                                transform: transformDescrCplus4,
                                                opacity: opacityDescrCplus4,
                                            }}
                                            className='modal'>
                                            <div className='tringle4_cplus'>
                                                <div
                                                    style={{
                                                        display: displayDescrCplus4
                                                    }}
                                                    className='text_descr_compilies4_cplus'>Функция std::scanf используется для чтения данных, прдеставленных в круглых скобках. Прочитанные данные хранятся в соответствующих переменных. Первый параметр этой функции в "" и называется форматной строкой. Она указывает, как читать входные данные. Далее через запятую идут входные данные. Примечания: в форматной строке всегда перед спецификатором должен стоять символ %.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString4} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Используем scanf</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_cplus'>
                                <div className='wrapper_text_cplus'>
                                    <div className='first_part_compilies'>
                                        <span className='cplus_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 5. Обьявим третью переменную, определяющую результат вычислений</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrCplus5,
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
                                                transform: transformDescrCplus5,
                                                opacity: opacityDescrCplus5,
                                            }}
                                            className='modal'>
                                            <div className='tringle5_cplus'>
                                                <div
                                                    style={{
                                                        display: displayDescrCplus5
                                                    }}
                                                    className='text_descr_compilies5_cplus'>Итак, мы получили числа от пользователя и записали их в переменные, благодаря std::scanf. Теперь используем эти данные. Объявим новую переменную, которую определим результатом вычислений для получения верного корня в уравнении.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={showString5} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Вывести результат</span>
                                </div>
                            </div>

                            <div className='cont_wrapper_text_cplus'>
                                <div className='wrapper_text_cplus_right'>
                                    <div className='first_part_compilies'>
                                        <span className='cplus_short_descr' style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }}><br /> 6. Выведем данные, добавив функцию printf</span>
                                        <div
                                            style={{
                                                opacity: opacityBtnDescrCplus6,
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
                                                transform: transformDescrCplus6,
                                                opacity: opacityDescrCplus6,
                                            }}
                                            className='modal'>
                                            <div className='tringle6_cplus'>
                                                <div
                                                    style={{
                                                        display: displayDescrCplus6
                                                    }}
                                                    className='text_descr_compilies6_cplus'>Последний шаг - это функция std::printf. Первым аргументом, называемым форматной строкой, она принимает указатель на строку, которая говорит этой функции, что и как нужно вывести на экран. Далее функция принимает сколько угодно дополнительных параметров. Они используются, если эти параметры упоминаются в форматной строке. Тут мы будем передавать числа, строки и переменные, которые могут понадобиться для вывода на экран.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={function () {
                                        showWin();
                                        showString6();
                                        showResultCodeCplus();
                                    }} style={{ color: color, textShadow: shadow, transition: 'all .3s ease-in-out' }} className='btn_text_compilies'> Выести в коректной форме</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='area_code'>
                        <div>
                            <div className='cont_txt_area_code'>
                                
                                <br />
                                <br />
                                <span className='cplus_string2 cplus_string' style={{ display: displayString1 }}>int main()</span>
                                <span className='cplus_string3 cplus_string' style={{ display: displayString1 }}> &#123;</span>
                                <br />
                                <span className='cplus_string2 cplus_string' style={{ display: displayString2 }}>std::puts("Введите коэффиценты a и b для уравнения вида 'ax + b = 0': "); </span>
                                <span className='cplus_string3 cplus_string' style={{ display: displayString3 }}>int a = 0;</span>
                                <span className='cplus_string4 cplus_string' style={{ display: displayString3 }}>int b = 0;</span>
                                <br />
                                <span className='cplus_string2 cplus_string' style={{ display: displayString4 }}>std::scanf("%d %d" , &a, &b);</span>
                                <span className='cplus_string3 cplus_string' style={{ display: displayString5 }}>int x = -b / a;</span>
                                <br />
                                <span className='cplus_string4 cplus_string' style={{ display: displayString6 }}>std::printf("Результат: %d\n", x);</span>
                                <span className='cplus_string5 cplus_string' style={{ display: displayString1 }}> &#125;</span>

                            </div>
                        </div>
                        <div className='back_container' style={{ display: displayWin, opacity: opacityWin, transition: 'all .6s ease-in-out' }}>
                            <div className='text_back_container'>Молодец! Ты сделал решатель линейных уровнений!</div>
                            <button onClick={hideCplus} className='btn_back_container'>Н А З А Д</button>
                        </div>

                        <div
                            style={{
                                display: displayResultCodeCplus,
                                opacity: opacityResultCodeCplus,
                                transition: 'all .6s ease-in-out '
                            }} className='result_code'>
                            <div>Введите коэффиценты a и b для уравнения вида 'ax + b = 0':
                                <br /><input className='input_result_cplus1' type="number"
                                    maxLength={9}
                                    onChange={handleChangeTakeValue1}
                                />
                                <br />
                                <input className='input_result_cplus2' type="number"
                                    maxLength={9}
                                    onKeyDown={handleChangeVisibleResultCplus1}
                                    onChange={handleChangeTakeValue2}
                                />
                            </div>
                            <div style={{
                                display: displayResultCodeStringCplus1
                            }}>Результат: {resultInputValuesCplus}</div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )

}

export default Cplus;
