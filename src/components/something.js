import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Something = ({props}) => {

    let { id } = useParams(); 
    
    useEffect(() => {
        console.log(`${id}`);
    },[]);
    return (
        <div>
            <h1>View Reviews</h1>
        </div>
    );

   

}

export default Something;