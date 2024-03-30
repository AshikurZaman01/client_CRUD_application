
const Pagination = ({ currentPage, totalPages, handlePageChange }) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-4">
            <ul className="flex justify-center">
                {
                    pageNumbers.map((page) => (

                        <li key={page} className={`mx-1 px-3 py-2 border border-gray-300 rounded-full ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}>
                            <button onClick={() => handlePageChange(page)}>{page}</button>
                        </li>
                    ))
                }
            </ul>
        </nav >
    );
};

export default Pagination;