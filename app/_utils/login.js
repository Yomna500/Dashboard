import axios from "axios";

export async function adminLogin({ name, password }) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/admin`,
    { name, password }
  );
  return response.data;
}
