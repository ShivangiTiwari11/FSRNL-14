
import User from '../User/User';
import './UserList.css'


function renderAllUsers(users){
  return  users.map(user=>{
   return <User key ={user.id} userData={user}/>
   })
}

function UserList(props){
    let users = props.user;
    return (
        <div className='user-list-div'>{
            renderAllUsers(users)
        }
        </div>
    )
}

export default UserList;