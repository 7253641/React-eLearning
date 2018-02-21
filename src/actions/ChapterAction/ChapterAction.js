// import * as types from '../../constants/sectionConstants';
// import axios from 'axios';

// export const getDataSection = () => {
//   return {
//     type: types.FETCHING_DATA_SECTION,
//   };
// };

// export const getDataSuccessSection = chapters => {
//   return {
//     type: types.FETCHING_DATA_SUCCESS_SECTION,
//     chapters,
//   };
// };

// export const getDataFailureSection = () => {
//   return {
//     type: types.FETCHING_DATA_FAILURE_SECTION,
//   };
// };

// export const fetchDataSection = () => {
//   return dispatch => {
//     dispatch(getDataSection());
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         dispatch(getDataSuccessSection(response.data));
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   };
// };
