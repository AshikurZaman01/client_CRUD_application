import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
const User = ({ user }) => {

    const { _id, name, email, age, category, like, dislike } = user || {};

    const handleDelete = (id) => {
        console.log(id);

        const ss = confirm("Are you sure you want to delete this user?");

        if (ss) {
            fetch(`http://localhost:5000/api/v1/users/deleteUser/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("User Deleted Successfully");
                    } else {
                        alert("Something went wrong!")
                    }
                })
        }

    }


    return (
        <tr>
            <td className="border px-4 py-2">{name}</td>
            <td className="border px-4 py-2">{email}</td>
            <td className="border px-4 py-2">{category}</td>
            <td className="border px-4 py-2">{age}</td>
            <td className="border px-4 py-2">{like}</td>
            <td className="border px-4 py-2">{dislike}</td>


            <td>
                <tr className="flex gap-2 border-r">
                    <button className="btn btn-sm btn-success text-2xl text-white"><GrUpdate className="text-xl" /></button>

                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error text-2xl text-white"><MdDeleteForever /></button>
                </tr>
            </td>
        </tr>
    );
};

export default User;