
const AddUser = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value || "";
        const email = e.target.email.value || "";
        const age = parseInt(e.target.age.value) || 0;
        const category = e.target.category.value || "";
        const like = parseInt(e.target.like.value) || 0;
        const disLike = parseInt(e.target.disLike.value) || 0;

        const user = {
            name, email, age, category, like, disLike
        }

        console.log(user);

        fetch('http://localhost:5000/api/v1/users/createUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                } else {
                    alert('Something went wrong');
                }
            });

    }

    return (
        <div className='flex justify-center'>

            <div>
                <button className="btn btn-sm" onClick={() => document.getElementById('my_modal_1').showModal()}>Add User</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-8/12 max-w-5xl">

                        <div>
                            <h3 className="font-bold text-lg text-center py-5">Hello!</h3>
                        </div>

                        <form onSubmit={handleSubmit} className='w-[80%] mx-auto py-5  px-5 rounded-md shadow-md '>
                            <div className='flex justify-center items-center gap-5 mb-5'>
                                <div className='flex-1'>
                                    <label className="label text-blue-500">Name</label>
                                    <input type="text" name="name" id="" placeholder='Enter Your Name' className='shadow-md shadow-gray-400 px-2 py-2 rounded-md w-full outline-none' />
                                </div>
                                <div className='flex-1'>
                                    <label className="label text-blue-500">Email</label>
                                    <input type="text" name="email" id="" placeholder='Enter Your Email' className='shadow-md shadow-gray-400 px-2 py-2 rounded-md w-full outline-none' />
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-5 mb-5'>
                                <div className='flex-1'>
                                    <label className="label text-blue-500">Age</label>
                                    <input type="number" name="age" id="" placeholder='Enter Your Age' className='shadow-md shadow-gray-400 px-2 py-2 rounded-md w-full outline-none' />
                                </div>
                                <div className='flex-1'>
                                    <label className="label text-blue-500">Category</label>
                                    <input type="text" name="category" id="" placeholder='Enter Your Category' className='shadow-md shadow-gray-400 px-2 py-2 rounded-md w-full outline-none' />
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-5 mb-5'>
                                <div className='flex-1'>
                                    <label className="label text-blue-500">Like</label>
                                    <input type="number" name="like" id="" placeholder='Enter Your Like' className='shadow-md shadow-gray-400 px-2 py-2 rounded-md w-full outline-none' />
                                </div>

                                <div className='flex-1'>
                                    <label className="label text-blue-500">Dislike</label>
                                    <input type="number" name="disLike" id="" placeholder='Enter Your Dislike' className='shadow-md shadow-gray-400 px-2 py-2 rounded-md w-full outline-none' />
                                </div>
                            </div>

                            <div className=''>
                                <button type="submit" className='btn  btn-sm w-full btn-success'>submit</button>
                            </div>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default AddUser;