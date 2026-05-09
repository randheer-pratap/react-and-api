import axios from "axios";
import { type User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
}
