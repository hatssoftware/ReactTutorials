import "./Swiper.css";
import data from "../data/data"
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"; 

const Swiper = () => {  
    const [index, setIndex] = useState(0);
    const {id, image, title, description} = data[index];

    return (
        <div className="swiper">
            <div className="swiper__movie" key={id}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="swiper__controls">
                <FaAngleLeft className="button" role="button" onClick={() => { 
                    if (index == 0) {
                        setIndex(data.length - 1)
                    } else {
                        setIndex(index - 1)
                    } }}/>
                <FaAngleRight className="button" role="button" onClick={() => { 
                    if (index == data.length - 1) {
                        setIndex(0)
                    } else {
                        setIndex(index + 1)
                    } }}/>
            </div>
        </div>
    )
}

export default Swiper;