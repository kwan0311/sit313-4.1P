import React  from "react";
import './index.css';
import Card from "./Card"

import stafflist from "./Bookslist";

const CardComponent = (staff) =>{

    return(
        <Card 
            avatar = {staff.avatar}
            bookname = {staff.book}
            name = {staff.name}
            description= {staff.description}
        />
    )

}


const Tutorials =() => {
    return(
        
        <div class="wrap">
            <h1>Featured Tutorials</h1>
            <div className="Article">
                {stafflist.map(CardComponent)}
            </div>
            <button class="see">See All Articles</button>
    
        </div>

    )
    
    }
    
    export default Tutorials;