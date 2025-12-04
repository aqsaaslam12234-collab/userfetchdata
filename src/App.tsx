import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import type { UserType } from './Types/UserTypes'

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    };
    fetchData();
  }, []);

  return (
    <>
      <UserList Userdata={users} />
    </>
  );
}

export default App;
