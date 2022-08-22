import React  from "react";
import './index.css';
import image1 from './Image/logo.png'

function Bar(){
return(
    <div class = "nav">
        <div class="wrap">
            <div class="logo">
                <a href = " # ">
                    <img src={image1} alt="Deakin Logo"></img>
                </a>
            </div>
            <div className="search"> 
            <input type="text" />
            <button type="button" class="iconfont">&#xe82e;</button>
            
            </div>
            <div className="nav-bar">
                <ul>
                    <li><a href = " # "> POST </a></li>
                    <li><a href = " # "> LOGIN </a></li>
                </ul>

            </div>
               
        </div>

        
    </div>
)

}

export default Bar;