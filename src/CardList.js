import React from "react";
import Card from "./Card";

const CardList = ({data})=>{
    const cardAray=data.map((user,i)=>{
        return (< Card key={i} 
                id={data[i].id} 
                name={data[i].name} 
                profession={data[i].profession}/>)
    });
    return(
        <div>{cardAray}</div>
       )
    
}

export default CardList;