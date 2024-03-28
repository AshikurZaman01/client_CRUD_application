import { useState } from "react";
import { useEffect } from "react";

import User from "./user";
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

            <div className="w-[90%] mx-auto">

                <table className="table-auto w-full custom-table">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Age</th>
                            <th>Like</th>
                            <th>Dislike</th>
                            <th>Features</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border ">

                        {
                            users.map((user) => <User key={user._id} user={user}></User>)
                        }



                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Users;