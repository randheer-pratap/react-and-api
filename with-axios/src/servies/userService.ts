import { api } from "../lib/api";
import { type User } from "../types/user";

export async function fetchUsers(): Promise<User[]> {
  const response = await api.get<User[]>("/users");
  return response.data;
}
