import type { UserType } from "../Types/UserTypes"
import UserComponents from "./UserComponents"

interface UserListProps{
datalist: UserType[];
}

const UserList = ({datalist}: UserListProps) => {
  return (
    <div>

      {
        datalist.map((list) => (

            <UserComponents key={list.id} userdata={list}/>
        ))
      }
    </div>
  )
}

export default UserList
