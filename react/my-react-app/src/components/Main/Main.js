import React from "react";
import "./Main.css";
import UserList from "../UserList/UserList";
import SpinnerEx from "../common/spinner/spinner";
import SingleUserView from "../singleUserView/singleUserView";

class Main extends React.Component {
    allUserData =[]
    constructor() {
        super();
        this.state = {data:[],isLoading:true,searchValue:"", singleView:null};
    }

    
    resetData(){
        this.setState({data:[],isLoading:true,searchValue:"", singleView:null}) 
    }
    updateData(){
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
    //lifeCyclemethods
    componentDidMount(){
      this.updateData()
    }

    onFieldValueChange(e){
        let value = e.target.value;
        let newData= this.allUserData.filter(ele=>{
           return ele.firstName.toLowerCase().startsWith(value.toLowerCase())
        })
        this.setState({searchValue:value, data:newData});
    }

    onUserClick(id){
       this.setState({singleView:id});
    }

    onBackButtonClick(){
       this.resetData();
       this.updateData();
    }

    render() {
        return (
            <div className="div-main-class">
                {
                (!this.state.singleView)?(<>
                 <h1>Applied Candidates</h1>
               <div>
               <input onChange={(e)=>this.onFieldValueChange(e)} type='text' ></input>
               </div>
                {
                    (this.state.isLoading) ? <SpinnerEx className="spinnerClass"/> :
                    <> 
                    <UserList userProps={{data:this.state.data, onClick:(id)=>this.onUserClick(id)}} />
                    </> 
                }
                </> ):
                 <>
                <SingleUserView onBackClick={this.onBackButtonClick.bind(this)} id={this.state.singleView}/>
                </>
            }
              
            </div>
        )
    }
}


export default Main;