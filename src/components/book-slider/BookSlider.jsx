import { useState } from "react";
import "./book-slider.css"
import Rating from "./Rating";
const BookSlider = ({data}) => {
    const [slideIndex , setSlideIndex] = useState(0);
    const handelClick = direction =>{
       if(direction === "left"){
        setSlideIndex(slideIndex - 1);
       }
       else{
        setSlideIndex(slideIndex + 1)
       }
    }
    return(
        <div className="book-slider-container">
            {slideIndex >=0 && <i onClick={() =>handelClick("left")} className="bi bi-chevron-left book-slider-arrow-left"></i>}
            <div className="book-slider-wrapper" style={{transform: `translateX(${slideIndex * -340}px)`}}>
               {data.map(item => <div className="book-slider-item">
                <img src={`/books/${item.image}`} alt = {item.title} className="book-slider-item-img"/>
                <h2 className="book-slider-item-title">{item.title}</h2>
                <Rating rating = {item.rating} reviews = {item.reviews}/>
                <div className="book-slider-item-price">${item.price}</div>
                <div className="book-slider-icons-wrapper">
                    <i className="bi bi-eye-fill"></i>
                    <i className="bi bi-cart-plus"></i>
                </div>
               </div>)} 
            </div>
            {slideIndex <= data.length -1 && <i onClick={() =>handelClick("right")} className="bi bi-chevron-right book-slider-arrow-right"></i> }    
        </div>
        
    );
}
export default BookSlider;