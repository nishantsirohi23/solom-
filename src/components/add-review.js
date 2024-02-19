import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddReview = ({props}) => {
  let { id } = useParams();
  useEffect(() => {
    console.log(`${id}`);
},[]);
  let initialReviewState = "";
  const [review, setReview] = useState("");
  const getName = localStorage.getItem("name");
  const getUser_id = localStorage.getItem("email");

  const handlereviewChange = eventreview => {
    setReview(eventreview.target.value);
  };
  
  const checkifUserExists = () => {
    
    if(getName != null && getUser_id != null && review !== ""){
      const name = getName;
      const user_id = getUser_id;
      saveReview(name,user_id);
    }
    else{
      alert("Please Login to add a review");
    }
  };
 

    const saveReview = (name,user) => {
        var data = {
          text: review,
          name: name,
          user_id: user,
          restaurant_id: id
        };
    
        
          RestaurantDataService.createReview(data)
            .then(response => {
              console.log(response.data);
              if(response.data.status === "success"){
                alert("Review Added Successfully");
                
                var x = prompt("do you want to add another review");
                if(x === "yes"){
                  window.location.reload();
                }
                else{
                  window.location.href = "/restaurants/"+id;
                }

              }
            })
            .catch(e => {
              console.log(e);
            });
        
    
      };

      return(
        <div>
          
          <input
                type="text"
                className="form-control"
                id="review"
                required
                value={review}
                onChange={handlereviewChange}
                name="review"
              />
            
            <button onClick={checkifUserExists}>Add Review</button>
        </div>
      );
    
};

export default AddReview;