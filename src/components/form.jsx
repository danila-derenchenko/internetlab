import React, { useState } from "react";
import './assets/css/form.css'

const Form = () => {
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [inputValueName, setInputValueName] = useState('');

    const handleFocusName = () => {
        setIsFocusedName(true);
    };

    const handleBlurName = () => {
        if (!inputValueName) {
        setIsFocusedName(false);
        }
    };

    const handleInputChangeName = (e) => {
        setInputValueName(e.target.value);
      };

    const [isFocusedPhone, setIsFocusedPhone] = useState(false);
    const [inputValuePhone, setInputValuePhone] = useState('');

    const handleFocusPhone = () => {
        setIsFocusedPhone(true);
    };

    const handleBlurPhone = () => {
        if (!inputValuePhone) {
        setIsFocusedPhone(false);
        }
    };

  const handleInputChangePhone = (e) => {
    setInputValuePhone(e.target.value);
  };
    return (
        <section>
            <section className="container1213">
                <p className="form_head">Отправь форму</p>
                <form action="#" className="form">
                    <div className="inputBox input_left">
                        <div className={`input-container ${isFocusedName || inputValueName ? 'input-active' : ''}`}>
                            <input
                            type="text"
                            className="custom-input"
                            required
                            value={inputValueName}
                            onFocus={handleFocusName}
                            onBlur={handleBlurName}
                            onChange={handleInputChangeName}
                            />
                            <label className="input-label">Имя</label>
                        </div>
                    </div>
                    <div className="inputBox input_right">
                        <div className={`input-container ${isFocusedPhone || inputValuePhone ? 'input-active' : ''}`}>
                            <input
                            type="tel"
                            className="custom-input"
                            required
                            value={inputValuePhone}
                            onFocus={handleFocusPhone}
                            onBlur={handleBlurPhone}
                            onChange={handleInputChangePhone}
                            />
                            <label className="input-label">Телефон</label>
                        </div>
                    </div>
                    <div className="form_checkbox input_left">
                        <input id="checkbox" type="checkbox" className="input_checkbox" />
                        <label htmlFor="checkbox" className="input_label">Согласен, отказываюсь</label>
                    </div>
                    <div className="button_box input_right">
                        <button type="submit" className="form_button"><p className="form_button_text">Отправить</p></button>
                    </div>
                </form>
            </section>
            <hr className="footer_hr" />
            <footer className="footer">
            <p className="footer_text">&copy; 2023 Лаборатория Интернет</p>
            </footer>
        </section>
    )
}

export default Form;