import http from "./http";

export function getUsers() {
  return http.get("/users");
}

export function getUsersById(id) {
  return http.get(`/users/id/${id}`);
}

export function registerUser(user) {
  const postClone = { ...user };
  Object.keys(postClone).forEach((key) => {
    if (
      postClone[key] === "" ||
      postClone[key] === null ||
      postClone[key] === undefined
    ) {
      delete postClone[key];
    }
  });
  return http.post(`/auth/register`, postClone);
}
