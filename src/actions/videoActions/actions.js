import actionCreators from './actionCreators';
//import axios from 'axios';

export const fetchVideo = () => dispatch => {
  dispatch(actionCreators.videoFetchRequested);
  try {
    /* replace this by our api link */
    // const users = await axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then(response => {
    //     let list = response.data.splice(0, 3);
    //     return list;
    //   });
    const url = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
    return dispatch(actionCreators.videoFetchFulfilled(url));
  } catch (error) {
    dispatch(actionCreators.videoFetchRejected(error));
  }
};

export default {
  fetchVideo,
};
