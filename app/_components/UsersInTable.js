export default function UsersInTable({ data, sort, sortOrder, handleSort }) {
  return (
    <div className="relative ">
      <table className="w-full text-sm text-left">
        <thead className="text-blue-600 uppercase bg-gray-100">
          <tr>
            {["id", "name", "city", "country"].map((key) => (
              <th
                key={key}
                className="sm:px-6 py-3 cursor-pointer px-2"
                onClick={() => handleSort(key)}
              >
                {key.toUpperCase()}
                {sort === key && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-2 sm:px-6 py-4 font-bold">{user.id}</td>
              <td className="px-2 sm:px-6 py-4">{user.name}</td>
              <td className="px-2 sm:px-6 py-4">{user.city}</td>
              <td className="px-2 sm:px-6 py-4">{user.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
