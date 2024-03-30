import { useState } from 'react'

export default function AddPost({handleInputChangeReview, handleSubmitReview, inputValueReview}) {

    return (
        <form onSubmit={handleSubmitReview} className='cont_review_wrapper'>
            <div className="input-area">
                <input
                    type='text'
                    
                    className='review_input'
                    placeholder='Введите отзыв'
                    value={inputValueReview}
                    onChange={handleInputChangeReview}
                    onKeyDown={handleSubmitReview}
                    >
                </input>
            </div>
        </form>
    )
}