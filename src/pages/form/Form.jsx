import './Form.css';
import iconUser from '../public/logo-user.png';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'


// const reactData = [{ id: 1, name: ' Tom' }, { id: 2, name: ' Sarah' }];
// const url = 'localhost:3001';

// let sendData = () => {
//     axios.post(url, reactData)
//         .then(res => console.log('Data send'))
//         .catch(err => console.log(err.data))
// }

function Form({ hideForm, handleInputChange, inputText, inputValuePassword, inputValueMail, handleSubmit, handleInputChangePassvord, handleInputChangeMail }) {

    // const [inputValueLogin, setInputValueLogin] = useState('');
    // const [inputValuePassword, setInputValuePassword] = useState('');
    // const [inputValuMail, setInputValueMail] = useState('');

    // const handleInputChangePassword = (event) => {
    //     setInputValuePassword(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     sendDataToServer();
    // };

    // const sendDataToServer = () => {
    //     fetch('http://localhost:3000/api/data', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ data: inputValuePassword }),

    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log('Ответ от сервера:', data);
    //         setInputValuePassword('')
    //       })

    //       .catch((error) => {
    //         console.error('Ошибка:', error);
    //       });
    //   };



    return (
        <div className='cnt_form'>
            <div className="wrapperForm fadeInDown" >
                <div id="formContent">
                    <h2 className="active">Sign Up </h2>
                    <div className="fadeIn first">
                        <img className="icon_user" src={iconUser} id="icon" alt="User Icon" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="input_login"
                            className="fadeIn second input_form"
                            name="login"
                            placeholder="Введите логин"
                            value={inputText}
                            // onChange= {function () {handleInputChange(); handleInputChangeLogin()}}
                            onChange={handleInputChange}


                        />


                        <input
                            type="password"
                            id="input_password"
                            className="fadeIn third input_form"
                            name="login"
                            placeholder="Введите пароль"
                            value={inputValuePassword}
                            onChange={handleInputChangePassvord}
                        />


                        <input
                            type="email"
                            id="input_mail"
                            className="fadeIn fith input_form"
                            name="mail"
                            placeholder="Введите адрес электронной почты"
                            value={inputValueMail}
                            onChange={handleInputChangeMail}
                        />
                        {/* <Link
                            to="/MainPage"

                            className='linkMainPage' onClick={function buttonLogin() {
                                hideForm();
                            }}> */}
                                
                            <button type="submit" className="fadeIn fourth" onClick={function buttonLogin() {
                                hideForm();
                                // handleSubmit();
                            }}>Log in</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>



        </div>
    );
}

export default Form;
