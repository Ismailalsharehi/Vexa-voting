"use client";
import {useState, useEffect} from "react";
type User= {

  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;

};

export default function UsersClient(){
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading]= useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          const data = await response.json();
          setUsers(data);
          
        }
        
      } catch (err) {
        setError("Failed to fetch users ");
        if (err instanceof Error) {
          setError(`Failed to fetch users : ${err.message}`);
          
        }
        
      } finally {
        setLoading(false);
      }
      
    }
    fetchUsers();
  },[]);
  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))};
        </ul>
    
    </div>
  );
}