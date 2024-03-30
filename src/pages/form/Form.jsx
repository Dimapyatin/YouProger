import './Form.css';
import iconUser from '../public/logo-user.png';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'

function Form({ hideForm, handleInputChange, inputText, inputValuePassword, inputValueMail, handleSubmit, handleInputChangePassvord, handleInputChangeMail }) {

    return (
        <div className='cnt_form'>
            <div className="wrapperForm fadeInDown" >
                <div id="formContent">
                    <h2 className="active">ЗАРЕГИСТРИРУЙТЕСЬ! </h2>
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
                        <button type="submit" className="fadeIn fourth" onClick={function buttonLogin() {
                            hideForm();
                        }}>ВОЙТИ</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
