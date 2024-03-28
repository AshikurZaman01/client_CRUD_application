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

                <table className="table-auto w-full border-collapse table ">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-4 py-2 border border-gray-400">Name</th>
                            <th className="px-4 py-2 border border-gray-400">Email</th>
                            <th className="px-4 py-2 border border-gray-400">Category</th>
                            <th className="px-4 py-2 border border-gray-400">Age</th>
                            <th className="px-4 py-2 border border-gray-400">Like</th>
                            <th className="px-4 py-2 border border-gray-400">Dislike</th>
                            <th className="px-4 py-2 border border-gray-400">Features</th>
                            <th className="px-4 py-2 border border-gray-400">Action</th>
                        </tr>
                    </thead>

                    <tbody>
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