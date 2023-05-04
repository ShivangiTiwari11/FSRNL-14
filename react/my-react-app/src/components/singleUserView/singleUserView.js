import React, { useEffect } from "react";
import SpinnerEx from "../common/spinner/spinner";
import './singleUserView.css'
import { useParams } from "react-router-dom";
import { useState } from "react";

function SingleUserView(){
  let params = useParams();
  let [userDetails,changeUserDetails]=useState(null);
  useEffect(()=>{
    fetch(`https://dummyapi.io/data/v1/user/${params.id}`,{
            headers:{
                "app-id":"6449085076d8181d5c97924c"
            }
        }).then(data=>data.json())
        .then(userData=>{
            changeUserDetails(userData);
        })
  },[]);
  return (
    <div className="single-user-parent">
      {
         (!userDetails)? 
         <SpinnerEx/>:(
         <div className="single-user-div">
          <div className="single-user-div-img">
            <img src ={userDetails.picture}/>
          </div>
          <div className="single-user-div-details">
            <div className="single-user-div-details-inner">
              <h3>{`${userDetails.title.toUpperCase()}  ${userDetails.firstName}  ${userDetails.lastName}`}</h3>
              <h3>{`Gender : ${userDetails.gender.toUpperCase()} `}</h3>
              <h3>{`Email : ${userDetails.email.toUpperCase()} `}</h3>
              <h3>{`DOB : ${userDetails.dateOfBirth.toUpperCase()} `}</h3>
              <h3>{`Phone : ${userDetails.phone.toUpperCase()} `}</h3>
            </div>
          </div>
         </div>
         )
      }
    </div>
   
  );
}
// class SingleUserView extends React.Component{
//   constructor(){
//     super();
//     this.state=({userDetails:null})
//     }


//   componentDidMount(){
//     ;
//   }
  
//   render() {
     
//     }

//   }
  
  export default SingleUserView;