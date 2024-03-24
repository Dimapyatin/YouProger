
import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import AddPost from './components/addPost';
import Post from './components/Post';
import './Review.css';
import axios from 'axios';


function Review({ inputText }) {

  // const [messages, setMessages] = useState([]); 
  // const [inputText, setInputText] = useState(''); 

  // const handleKeyPress = (event) => { 
  //   if (event.key === 'Enter') { 
  //     sendMessage(); 
  //   } 
  // }; 
  // const sendMessage = () => { 
  //   if (inputText !== '') { 
  //     setMessages([...messages, inputText]); 
  //     setInputText(''); 
  //   } 
  // }; 



  // const [posts, setPosts] = useState([]);

  // const fetchPosts = () => {
  //   fetch("http://localhost:3000/api/review")
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data.data))
  // }

  // useEffect(() => {
  //   fetchPosts()
  // }, []);

  // const addPost = (login, review) => {
  //   fetch('http://localhost:3000/api/review', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: login,
  //       userreview: review
  //       // userId: Math.random().toString(36).slice(2),
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())

  // };

  // const deletePost = (id) => {
  //   fetch(`http://localhost:3000/api/review/${id}`, {
  //     method: 'DELETE'
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setPosts(
  //           postsReviews.filter((postsReview) => {
  //             return postsReview.id !== id;
  //           })
  //         )
  //       }
  //     })
  // };


  const [postsReviews, setPostsReviews] = useState([]);
  // const handleAddReview = (review) => {
  //   setPostsReviews((prevReviews) => [review, ...prevReviews])
  // }

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/api/review')
  //     // .then((response) => response.json())
  //     .then(data => {
  //       setPostsReviews(data.data);
  //       console.log(data.data)
  //     })
  // }, [])


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
      // .then((review) => {
      //   setPostsReviews((prevPosts) => [review, ...prevPosts])
      // })
      // .then((data) => {
      //   setPostsReviews((prevPosts)=> [data.data, ...prevPosts]);
      // })
      

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
        // setPostsReviews(reversedMessages)
        // setPostsReviews((prevPosts)=> [(data.data), ...prevPosts]);
        // setPostsReviews(data.data);
        // const ptr = data.data
                  // setPostsReviews((prevPosts) => [ptr, ...prevPosts])

        // const handleAddReview = (inputValueRev) => {
        //   setPostsReviews((prevPosts) => [inputValueRev, ...prevPosts])
        // }
        // handleAddReview()
        // 
        console.log(reversedMessages)

      })
  // }, [])
  }
  useEffect(() => {
    getValueReview();
    // handleAddReview()
    // console.log(postsReviews)

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

            // inputText={inputText}
            // key={postsReview.id}
            // id={postsReviews.id}
            //   title={post.title}
            //   body={post.body}
            // deletePost={deletePost}
          />
          {/* )} */}
        </section>
      </div>








      {/*<div className='cont_review_wrapper'> 
        <div className="review_wrapper"> 
          <div className="input-area"> 
            <input className='review_input' type="text" value={inputText} onChange={(event) => setInputText(event.target.value)} onKeyPress={handleKeyPress} placeholder='Оставить отзыв' /> 
            <button className='btn_review' onClick={sendMessage}>Отправить</button> 
          </div> 
          <div className="chat-window"> 
            {messages.map((message, index) => ( 
 
              <div key={index} className="message"> 
                <p className='review_text'>{message} </p> 
              </div> 
            ))} 
          </div> 
 
            </div>  
 
      </div>  */}
    </main>
  );
};
// это строчка я хз за что отвечает но она мешает и зачем то добовляет блок который все портит
// ReactDOM.createRoot(document.getElementById('root')).render(<Review />);
export default Review;