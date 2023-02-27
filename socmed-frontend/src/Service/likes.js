import http from "./http";

export function getLikes(postId) {
    return http.get(`/likes/post/${postId}`);
}

export function addLikes(userId, postId, likes) {
    const likeClone = { ...likes };
    Object.keys(likeClone).forEach((key) => {
        if (
        likeClone[key] === "" ||
        likeClone[key] === null ||
        likeClone[key] === undefined
        ) {
        delete likeClone[key];
        }
    });
    return http.post(`/likes/new/${userId}/like/${postId}`, likeClone);
}


  

  