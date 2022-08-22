import React  from "react";
import './index.css';
import imagea from './Image/icona.png'
import imageb from './Image/iconb.png'
import imagec from './Image/iconc.png'

function Foot(){
return(
    
        <div class="wrapa">
            <div className="left-foot">
                <h2>EXPLORE</h2>
                <ul>
                    <li><a href = " # "> Home </a></li>
                    <li><a href = " # "> Questions </a></li>
                    <li><a href = " # "> Articles</a></li>
                    <li><a href = " # "> Tutorials </a></li>
                </ul>

            </div>
            <div className="middle-foot">
            <h2>Support</h2>
                <ul>
                    <li><a href = " # "> FAQs </a></li>
                    <li><a href = " # "> Help </a></li>
                    <li><a href = " # "> Contact Us</a></li>
                </ul>

            </div>
            <div className="right-foot">

                <h2>Stay Connected</h2>
                <a href = " # ">
                <img src={imagea}  alt="icona" width="40" height="40"></img>
                </a>
                <a href = " # ">
                <img src={imageb}  alt="iconb" width="40" height="40"></img>
                </a>
                <a href = " # ">
                <img src={imagec}  alt="iconb" width="40" height="40"></img>
                </a>
                
            </div>
            <div className="last-foot">
                <h2>DEV@DEAKIN 2020</h2>
                <ul>
                    <li><a href = " # "> Privacy Policy </a></li>
                    <li><a href = " # "> Terms </a></li>
                    <li><a href = " # "> Code of Conduct</a></li>
                </ul>



            </div>

        </div> 
)



}

export default Foot;