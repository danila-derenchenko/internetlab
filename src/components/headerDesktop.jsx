import React from "react";
import './assets/css/headerDesktop.css'

const HeaderDesktop = () => {
    const getVisible = () => {
        if (window.innerWidth < 780) {
          return false
        } else {
            return true
        }
      };

    return (
        <section className="HeaderDesktop">
            <section className="wrapper__image">
                <img src={require(`./assets/img/${getVisible() ? 'header.png' : 'headersmall.png'}`)} alt="fullscreen" className="fullscreen__image" />
            </section>
            <section className="wrapper">
                <div className="fullscreen">
                    <div className="container_header container1213">
                        <header className="header">
                            <a href="#main"><div className="logo"><img src={require('./assets/img/logo.png')} alt="logo1" className="logo_el" /></div></a>
                            <nav className="nav">
                                <a href="#content" className="nav_el">Как это работает</a>
                                <a href="#3block" className="nav_el">3-й блок</a>
                                <a href="#faq" className="nav_el">Вопросы и ответы</a>
                                <a href="#form" className="nav_el">Форма</a>
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