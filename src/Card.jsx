import React from "react";
import './index.css';
import star from './Image/Star.png'



const Card = (props) =>{
    return(
        <div  class="card">
            <img src={props.avatar} alt="Avatar" width="150px" height="190px"/>
            <h3>{props.bookname}</h3>
            <p>{props.description}</p>
            <div id="star">
                <img src={star} alt="star" width="15" height="15"/>
                <a href = " # ">{props.name} </a>
            </div>
           
        </div>
    )
}

export default Card;