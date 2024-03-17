import React , {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import reviews from '../data/review';


const HomeMainSection = () =>{
    const navigate = useNavigate();
    const [reviewList, setReviews] = useState([]);
    function shopNowButtonClicked (){
        navigate('/Productpage');
    }
    
    
    
    useEffect(()=>{
        var index1 = Math.floor(Math.random() * reviews.length);
        const index2 = Math.floor(Math.random() * reviews.length );
        while (index1=== index2){
            index1 = Math.floor(Math.random() * reviews.length);
        }
        setReviews([reviews[index1], reviews[index2]]);

    }, []);
       
    function getStars(number){
        if (number === 0){
            return <p>Rating: No stars</p>;
        }
        else if (number === 1){
            return <p>Rating: ⭐</p>;
        }
        else if (number === 2){
            return <p>Rating: ⭐⭐</p>;
        }
        else if (number === 3){
            return <p>Rating: ⭐⭐⭐</p>;              
        }
        else if (number === 4){
            return <p>Rating: ⭐⭐⭐⭐</p>;
        }
        else if (number === 5){
            return <p>Rating: ⭐⭐⭐⭐⭐</p>;
        }

    }
    return(
        <div>
        <div id = "about-us">
            <h2> About Us</h2>
            <p>Welcome to our online store! We are passionate about providing
                high-quality products and exceptional customer service. Learn more
                about our store and commitment to your satisfaction.
            </p>
        </div>

       <button onClick = {shopNowButtonClicked}>Shop Now</button>
       
        <div id = "customer-reviews">
        <h2>Customer Reviews</h2>
           
                {reviewList.map((review) =>
                <div>
                    <p>{review.customerName}</p>
                    <p>{review.reviewContent}</p>
                    {getStars(review.stars)}
                
                </div>
                    )}
         




        </div>

       



        </div>
    );
}


export default HomeMainSection;