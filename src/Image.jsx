import React  from "react";
import './index.css';
import image2 from './Image/campus.png'
import image3 from './Image/image3.jpg'


function Image(){
return(
    
    <div class="wrap">

        <div class="Image-part">
            <a href = " # ">
               <img src={image2 }  alt="Deakin Campus" width="550" height="300"></img>
            </a>
            
       

        
            <a href = " # ">
               <img src={image3} alt="Deakin Campus2"width="550" height="300"></img>
            </a>
        </div>

    </div>
)

}

export default Image;