import React from "react";
import './Card.css'

const Card = ({id,name,profession}) => {
    return(
        <div className="card">
        <img src={`https://robohash.org/${id}?200x200`} alt="Avatar" />
        <div class="container">
            <h4><b>{name}</b></h4>
            <p>{profession}</p>
        </div>
        </div>
    )
}

export default Card;