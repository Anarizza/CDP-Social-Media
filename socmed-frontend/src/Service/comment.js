import http from "./http";

export function getCommentByPostPostId(postId) {
    return http.get(`/comment/${postId}`);
}

export function deleteCommentByCommentId(commentId) {
    return http.delete(`/comment/deletecomment/${commentId}`);
}
