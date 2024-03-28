import { useState } from "react";
import { useEffect } from "react";
const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    console.log(users)

    return (
        <div>
            <div>
                <h1 className="text-center p-6 text-4xl font-semibold bg-blue-300">All Users</h1>
            </div>

            <div></div>

        </div>
    );
};

export default Users;