import React from "react";
import './assets/css/headerDesktop.css'

const HeaderDesktop = () => {
    return (
        <section className="HeaderDesktop">
            <section className="wrapper__image">
                <img src={require('./assets/img/header.png')} alt="fullscreen" className="fullscreen__image" />
            </section>
            <section className="wrapper">
                <div className="fullscreen">
                    <div className="container_header container1213">
                        <header className="header">
                            <div className="logo"><img src={require('./assets/img/logo.png')} alt="logo1" className="logo_el" /></div>
                            <nav className="nav">
                                <a href="#" className="nav_el">Как это работает</a>
                                <a href="#" className="nav_el">3-й блок</a>
                                <a href="#" className="nav_el">Вопросы и ответы</a>
                                <a href="#" className="nav_el">Форма</a>
                            </nav>
                        </header>
                        <div className="content">
                                <p className="heading text">Говорят, никогда не поздно сменить профессию</p>
                                <p className="subtitle text">Сделай круто тестовое задание, и у тебя получится</p>
                                <button className="contentButton text">Проще простого!</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HeaderDesktop;