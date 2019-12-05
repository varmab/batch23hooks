import React, {useState, useEffect} from 'react'

const Users=()=>{
    var [users, setUsers]=useState([]);
    var [loading, setLoading]=useState(true);
    var [error, setError]=useState(false);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{
            setUsers(users);
            setLoading(false);
        })
        .catch((err)=>{
            setLoading(false);
            setError(true);
        })
    },[])

    if(loading==true) {
        return (
            <div>
                <h1>Users</h1>
                <p>Loading.. Please wait</p>
            </div>
        )
    }

    if(error==true) {
        return (
            <div>
                <h1>Users</h1>
                <p>Sorry.. Failed to load users. Try again later</p>
            </div>
        )
    }

    return(
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users;