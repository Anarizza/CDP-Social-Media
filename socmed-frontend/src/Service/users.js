import http from "./http";

export function getUsers() {
  return http.get("/users");
}

export function getUsersById(id) {
  return http.get(`/users/id/${id}`);
}
