import React from "react";
import './assets/css/reviews.css'

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container1213">
                <p className="introReviews text">Отзывы</p>
                <div className="reviewsBox">
                    <div className="review">
                        <div className="review_head">
                            <img src={require('./assets/img/review1.png')} alt="avatar" className="review_avatar" />
                            <div className="review_dataBox">
                                <p className="text name">Константинов Михаил Павлович</p>
                                <p className="text from">Санкт-Петербург</p>
                            </div>
                        </div>
                        <div className="review_textBox">
                            <p className="text review_text">Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;