import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
const User = ({ user }) => {

    const { _id, name, email, age, category, like, dislike} = user || {};


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
                    <button className="btn btn-sm btn-error text-2xl text-white"><MdDeleteForever /></button>
                </tr>
            </td>
        </tr>
    );
};

export default User;