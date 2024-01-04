import { ADD_ITEM, DELETE_ITEM, LIKE_VIDEO, UNLIKE_VIDEO, DISLIKE_VIDEO, UNDISLIKE_VIDEO, } from "./ActionType";


export const addListItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteListItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});

export const likeVideo = (videoId) => ({
  type: LIKE_VIDEO,
  payload: videoId,
});

export const unlikeVideo = (videoId) => ({
  type: UNLIKE_VIDEO,
  payload: videoId,
});


export const dislikeVideo = (videoId) => ({
  type: DISLIKE_VIDEO,
  payload: videoId,
});

export const undislikeVideo = (videoId) => ({
  type: UNDISLIKE_VIDEO,
  payload: videoId,
});