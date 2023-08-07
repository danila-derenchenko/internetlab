import React, { useState } from "react";
import './assets/css/FAQ.css'

const FAQ = () => {
    const [isVisible1, setVisible1] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
    const [isVisible3, setVisible3] = useState(false);
    const [isVisible4, setVisible4] = useState(false);
    const [isVisible5, setVisible5] = useState(false);
    const [isVisible6, setVisible6] = useState(false);
    const [isVisible7, setVisible7] = useState(false);

    const changeVisible1 = () => {
        if(isVisible1) {
            setVisible1(false)
        } else {
            setVisible1(true)
        }
    }
    const changeVisible2 = () => {
        if(isVisible2) {
            setVisible2(false)
        } else {
            setVisible2(true)
        }
    }
    const changeVisible3 = () => {
        if(isVisible3) {
            setVisible3(false)
        } else {
            setVisible3(true)
        }
    }
    const changeVisible4 = () => {
        if(isVisible4) {
            setVisible4(false)
        } else {
            setVisible4(true)
        }
    }
    const changeVisible5 = () => {
        if(isVisible5) {
            setVisible5(false)
        } else {
            setVisible5(true)
        }
    }
    const changeVisible6 = () => {
        if(isVisible6) {
            setVisible6(false)
        } else {
            setVisible6(true)
        }
    }
    const changeVisible7 = () => {
        if(isVisible7) {
            setVisible7(false)
        } else {
            setVisible7(true)
        }
    }

    return (
        <section className="faq container1213">
            <p className="text faq_intro">Вопросы и ответы</p>
            <div className="faq_box">
                <hr className="faq_hr" />
                <div onClick={changeVisible1} className="faq_questionBox">
                    <p className={`text faq_question ${isVisible1 ? 'faq_questionActive' : ''}`}>Подтверждено: сознание наших соотечественников не замутнено пропагандой?</p>
                    <svg className={`faq_button ${isVisible1 ? 'faq_activeButton' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill={`${isVisible1 ? '#2A6CEA' : '#191C1F'}`}/>
                        <circle cx="12" cy="12" r="11" stroke={`${isVisible1 ? '#2A6CEA' : '#191C1F'}`} stroke-width="2"/>
                    </svg>
                </div>
                <p className={`text faq_answer ${isVisible1 ? 'visibleText' : 'hiddenText'}`}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p>
                <hr className="faq_hr" />
                <div onClick={changeVisible2} className="faq_questionBox">
                    <p className={`text faq_question ${isVisible2 ? 'faq_questionActive' : ''}`}>Прототип нового сервиса - это как трубный призыв?</p>
                    <svg className={`faq_button ${isVisible2 ? 'faq_activeButton' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill={`${isVisible2 ? '#2A6CEA' : '#191C1F'}`}/>
                        <circle cx="12" cy="12" r="11" stroke={`${isVisible2 ? '#2A6CEA' : '#191C1F'}`} stroke-width="2"/>
                    </svg>
                </div>
                <p className={`text faq_answer ${isVisible2 ? 'visibleText' : 'hiddenText'}`}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p>
                <hr className="faq_hr" />
                <div onClick={changeVisible3} className="faq_questionBox">
                    <p className={`text faq_question ${isVisible3 ? 'faq_questionActive' : ''}`}>Частокол на границе продолжает удивлять?</p>
                    <svg className={`faq_button ${isVisible3 ? 'faq_activeButton' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill={`${isVisible3 ? '#2A6CEA' : '#191C1F'}`}/>
                        <circle cx="12" cy="12" r="11" stroke={`${isVisible3 ? '#2A6CEA' : '#191C1F'}`} stroke-width="2"/>
                    </svg>
                </div>
                <p className={`text faq_answer ${isVisible3 ? 'visibleText' : 'hiddenText'}`}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p>
                <hr className="faq_hr" />
                <div onClick={changeVisible4} className="faq_questionBox">
                    <p className={`text faq_question ${isVisible4 ? 'faq_questionActive' : ''}`}>Очевидцы сообщают, что слышали грохот грома градущих изменений?</p>
                    <svg className={`faq_button ${isVisible4 ? 'faq_activeButton' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill={`${isVisible4 ? '#2A6CEA' : '#191C1F'}`}/>
                        <circle cx="12" cy="12" r="11" stroke={`${isVisible4 ? '#2A6CEA' : '#191C1F'}`} stroke-width="2"/>
                    </svg>
                </div>
                <p className={`text faq_answer ${isVisible4 ? 'visibleText' : 'hiddenText'}`}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p>
                <hr className="faq_hr" />
                <div onClick={changeVisible5} className="faq_questionBox">
                    <p className={`text faq_question ${isVisible5 ? 'faq_questionActive' : ''}`}>И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?</p>
                    <svg className={`faq_button ${isVisible5 ? 'faq_activeButton' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill={`${isVisible5 ? '#2A6CEA' : '#191C1F'}`}/>
                        <circle cx="12" cy="12" r="11" stroke={`${isVisible5 ? '#2A6CEA' : '#191C1F'}`} stroke-width="2"/>
                    </svg>
                </div>
                <p className={`text faq_answer ${isVisible5 ? 'visibleText' : 'hiddenText'}`}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p>
                <hr className="faq_hr" />
                <div onClick={changeVisible6} className="faq_questionBox">
                    <p className={`text faq_question ${isVisible6 ? 'faq_questionActive' : ''}`}>Нынче никто не может себе позволить инициировать треск разлетающихся скреп?</p>
                    <svg className={`faq_button ${isVisible6 ? 'faq_activeButton' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill={`${isVisible6 ? '#2A6CEA' : '#191C1F'}`}/>
                        <circle cx="12" cy="12" r="11" stroke={`${isVisible6 ? '#2A6CEA' : '#191C1F'}`} stroke-width="2"/>
                    </svg>
                </div>
                <p className={`text faq_answer ${isVisible6 ? 'visibleText' : 'hiddenText'}`}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p>
                <hr className="faq_hr" />
                <div onClick={changeVisible7} className="faq_questionBox">
                    <p className={`text faq_question ${isVisible7 ? 'faq_questionActive' : ''}`}>Высококачественный прототип будущего проекта обнадёживает?</p>
                    <svg className={`faq_button ${isVisible7 ? 'faq_activeButton' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill={`${isVisible7 ? '#2A6CEA' : '#191C1F'}`}/>
                        <circle cx="12" cy="12" r="11" stroke={`${isVisible7 ? '#2A6CEA' : '#191C1F'}`} stroke-width="2"/>
                    </svg>
                </div>
                <p className={`text faq_answer ${isVisible7 ? 'visibleText' : 'hiddenText'}`}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p>
            </div>
        </section>
    )
}

export default FAQ;