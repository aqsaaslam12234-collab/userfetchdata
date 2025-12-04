import type { UserType } from "../Types/UserTypes";
interface UserComponentsProps{
    userdata : UserType;
}


const UserComponents = ({userdata}: UserComponentsProps) => {
  return (
    <div>
      <h1>Firstname: {userdata.firstname} </h1>
      <h1>LastName: {userdata.lastname}</h1>
      <p>Email: {userdata.email}</p>
      <p>Phone: {userdata.phone}</p>
      <p>City: {userdata.city}</p>
    </div>
  )
}

export default UserComponents
