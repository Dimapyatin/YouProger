import { useState } from 'react'

export default function AddPost({handleInputChangeReview, handleSubmitReview, inputValueReview}) {
    // const [login, setLogin] = useState('');
    // const [review, setReview] = useState('');
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.addPost(login, review);
    //     setLogin('');
    //     setReview('');
        
    // };



//   const handleSubmitReview = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       // console.log(inputValueReview)
//       sendDataToServerReview();

//     }

//   };
//   const sendDataToServerReview = () => {
//     fetch('http://localhost:3000/api/review', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ review: inputValueReview, login: inputText }),

//     })
//       .then((response) => response.json())
//       .then((review, login) => {
//         console.log('Ответ от сервера:', review, login);
//         setInputValueReview('')
//       })

//       .catch((error) => {
//         console.error('Ошибка:', error);
//       });
//   };


    return (
        <form onSubmit={handleSubmitReview} className='cont_review_wrapper'>
            <div className="input-area">
                <input
                    type='text'
                    
                    className='review_input'
                    placeholder='Введите отзыв'
                    // name="body"
                    value={inputValueReview}
                    onChange={handleInputChangeReview}
                    onKeyDown={handleSubmitReview}
                    >
                </input>
            </div>
            {/* <button type="submit" className="btn_review_inside">Написать отзыв</button> */}

        </form>
    )
}