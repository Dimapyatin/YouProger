import iconAva from '../../../public/4736380.png'

export default function Post({ postsReviews, deletePost}) {
    return (

        <div className="chat-window">
            {postsReviews.map(postsReview => {
                return (
                    <>
                        <div className="cont_mesAndBtn">
                            <img className='img_review' src={iconAva} alt="" width='40px' height='40px' />
                            <div className="contReviewMas">
                                <p className='contInputText'>{postsReview.username}</p>
                                <p className="message">
                                    {postsReview.userreview}
                                </p>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}