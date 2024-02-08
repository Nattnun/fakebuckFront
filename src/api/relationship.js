import axios from "../config/axios";

export const requestFriend = (targetUserId) =>
  axios.post(`/relationships/users/${targetUserId}`);

export const confirmRequest = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/confirm`);

export const rejectFriend = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/reject`);

export const cancelRequest = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/cancel`);

export const unfriend = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/unfriend`);
