import React from "react";
import './assets/css/form.css'

const Form = () => {
    return (
        <section className="form container1213">
            <p className="form_head">Отправь форму</p>
            <form action="#" className="form_box">
                <div className="form_item form_left">
                    <input type="text" className="form_input" />
                    <label htmlFor="" className="form_label">Имя</label>
                </div>
                <div className="form_item form_right">
                    <input type="tel" className="form_input" />
                    <label htmlFor="" className="form_label">Фамилия</label>
                </div>
                <div className="form_item form_left form_right">
                    <input type="checkbox" className="form_input_check" />
                </div>
                <button className="form_button form_right"></button>
            </form>
        </section>
    )
}

export default Form;