
import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import AddPost from './components/addPost';
import Post from './components/Post';
import './Review.css';
import axios from 'axios';

function Review({ inputText }) {

  const [postsReviews, setPostsReviews] = useState([]);
  const [inputValueReview, setInputValueReview] = useState('');

  const handleInputChangeReview = (event) => {
    setInputValueReview(event.target.value);
  };
  const handleSubmitReview = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // console.log(inputValueReview)
      sendDataToServerReview();
      // useEffect(() => {}
      getValueReview()
      setInputValueReview('');
    }
  };
  const sendDataToServerReview = () => {
    fetch('http://localhost:3000/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review: inputValueReview, login: inputText }),

    })
      .then((response) => response.json())

      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };
  function getValueReview() {
      // useEffect(() => {
    axios
      .get('http://localhost:3000/api/review')
      // .then((response) => response.json())
      .then((response) => {
        const reversedMessages = response.data.reverse();
        setPostsReviews(reversedMessages)

        console.log(reversedMessages)

      })
  }
  useEffect(() => {
    getValueReview();
  }, [])

  return (
    <main>
      <div className='review_wrapper'>
        <AddPost
          // addPost={addPost} 
          inputValueReview={inputValueReview}
          handleInputChangeReview={handleInputChangeReview}
          handleSubmitReview={handleSubmitReview}
        />
        <section className="posts-container">
          {/* {postsReviews.map((postsReview) => */}
          <Post
            postsReviews={postsReviews}
          />
        </section>
      </div>
    </main>
  );
};
// это строчка я хз за что отвечает но она мешает и зачем то добовляет блок который все портит
// ReactDOM.createRoot(document.getElementById('root')).render(<Review />);
export default Review;