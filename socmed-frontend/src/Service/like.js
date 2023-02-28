import http from "./http";

export function getLikesByUsersUserId(userId) {
  return http.getLikesByUsersUserId(`/likes/post/${userId}`);
}
