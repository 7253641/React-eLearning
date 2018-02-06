import actionTypes from './actionTypes';

export const videoFetchRequested = () => ({
  type: actionTypes.VIDEO_FETCH_REQUESTED,
});

export const videoFetchFulfilled = videoURL => ({
  type: actionTypes.VIDEO_FETCH_FULFILLED,
  payload: videoURL,
});

export const videoFetchRejected = error => ({
  type: actionTypes.VIDEO_FETCH_REJECTED,
  payload: error,
  error: true,
});

export default {
  videoFetchRequested,
  videoFetchFulfilled,
  videoFetchRejected,
};
