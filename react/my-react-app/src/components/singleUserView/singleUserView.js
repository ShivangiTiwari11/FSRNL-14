import React from "react";
import SpinnerEx from "../common/spinner/spinner";
import './singleUserView.css'


class SingleUserView extends React.Component{
  constructor(){
    super();
    this.state=({userDetails:null})
    }


  componentDidMount(){
    fetch(`https://dummyapi.io/data/v1/user/${this.props.id}`,{
            headers:{
                "app-id":"6449085076d8181d5c97924c"
            }
        }).then(data=>data.json())
        .then(userData=>{
            this.setState({userDetails:userData});
        });
  }
  
  render() {
      return (
        <div className="single-user-parent">
          <button className="btnClass" onClick={this.props.onBackClick}>Go Back</button>
          {
             (!this.state.userDetails)? 
             <SpinnerEx/>:(
             <div className="single-user-div">
              <div className="single-user-div-img">
                <img src ={this.state.userDetails.picture}/>
              </div>
              <div className="single-user-div-details">
                <div className="single-user-div-details-inner">
                  <h3>{`${this.state.userDetails.title.toUpperCase()}  ${this.state.userDetails.firstName}  ${this.state.userDetails.lastName}`}</h3>
                  <h3>{`Gender : ${this.state.userDetails.gender.toUpperCase()} `}</h3>
                  <h3>{`Email : ${this.state.userDetails.email.toUpperCase()} `}</h3>
                  <h3>{`DOB : ${this.state.userDetails.dateOfBirth.toUpperCase()} `}</h3>
                  <h3>{`Phone : ${this.state.userDetails.phone.toUpperCase()} `}</h3>
                </div>
              </div>
             </div>
             )
          }
        </div>
       
      );
    }

  }
  
  export default SingleUserView;