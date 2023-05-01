import React from "react";
import "./Main.css";
import UserList from "../UserList/UserList";
import SpinnerEx from "../common/spinner/spinner";
import NavExample from "../NavBar/NavBar";
import FooterExample from "../Footer/Footer";

class Main extends React.Component {
    allUserData =[]
    constructor() {
        super();
        this.state = {data:[],isLoading:true,searchValue:""};
    }

    //lifeCyclemethods
    componentDidMount(){
        fetch("https://dummyapi.io/data/v1/user",{
            headers:{
                "app-id":"6449085076d8181d5c97924c"
            }
        }).then(data=>data.json())
        .then(userData=>{
            this.allUserData = userData.data;
            this.setState({data:userData.data,isLoading:false});
        });
    }

    onFieldValueChange(e){
        let value = e.target.value;
        let newData= this.allUserData.filter(ele=>{
           return ele.firstName.toLowerCase().startsWith(value.toLowerCase())
        })
        this.setState({searchValue:value, data:newData});
    }

    render() {
        return (
            <div className="div-main-class">
               <h1>Applied Candidates</h1>
               <div>
               <input onChange={(e)=>this.onFieldValueChange(e)} type='text' ></input>
               </div>
                {
                    (this.state.isLoading) ? <SpinnerEx className="spinnerClass"/> :
                    <> 
                    <UserList user={this.state.data} />
                    </> 
                }
            </div>
        )
    }
}


export default Main;