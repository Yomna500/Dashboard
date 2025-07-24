"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/lib/_store/slices/userSlice";

export default function LoginForm() {
  const [name, setName] = useState("Cedric Parisian V");
  const [password, setPassword] = useState("gv4ZQmH__yahEqX");

  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ name, password })).then((res) => {
      if (res.payload) {
        setName("");
        setPassword("tt");
        router.push("/table");
      }
    });
  };

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full p-2 "
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}
