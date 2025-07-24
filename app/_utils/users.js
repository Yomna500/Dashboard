import axios from "axios";

export async function usersTable() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  return response.data;
}
