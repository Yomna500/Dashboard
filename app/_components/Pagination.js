const Pagination = ({ users, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(users / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li
            key={page}
            className={`inline-block px-4 py-2 cursor-pointer ${
              currentPage === page ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
