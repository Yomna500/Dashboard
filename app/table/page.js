"use client";

import { useEffect, useMemo, useState } from "react";
import { usersTable } from "../_utils/users";
import toast from "react-hot-toast";
import UsersInTable from "../_components/UsersInTable";
import Pagination from "../_components/Pagination";
import Filter from "../_components/Filter";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    usersTable()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to fetch users");
        setError("Failed to fetch users");
        console.error(err);
        setLoading(false);
      });
  }, []);

  const data = useMemo(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedUsers = [...filtered].sort((a, b) => {
      const valueA = a[sort];
      const valueB = b[sort];

      if (sort === "id") {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }

      const strA = valueA?.toString().toLowerCase();
      const strB = valueB?.toString().toLowerCase();

      if (strA < strB) return sortOrder === "asc" ? -1 : 1;
      if (strA > strB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    const usersPagination = sortedUsers.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    return usersPagination;
  }, [users, filter, sort, sortOrder, currentPage, pageSize]);

  const handleSort = (key) => {
    if (key === sort) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSort(key);
      setSortOrder("asc");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Users Table</h1>

      <Filter
        filter={filter}
        setFilter={setFilter}
        setCurrentPage={setCurrentPage}
      />

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <UsersInTable
          data={data}
          sort={sort}
          sortOrder={sortOrder}
          handleSort={handleSort}
        />
      )}

      <div className="mt-6 flex justify-center">
        <Pagination
          users={users.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
