import { useState } from "react";
import { useEffect } from "react";

import User from "./user";
import Pagination from "../Pagination/Pagination";
const Users = () => {

    const [users, setUsers] = useState([]);

    {/* Pagination */ }
    const [currentPage, setCurrentPage] = useState(1);
    const userPerPage = 7;

    const totalPages = Math.ceil(users.length / userPerPage);

    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


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
                            currentUsers.map((user) => <User key={user._id} user={user}></User>)
                        }
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center mt-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                    ></Pagination>
                </div>
                {/* Pagination */}
            </div>

        </div>
    );
};

export default Users;