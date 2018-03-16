import * as actionTypes from './actionTypes';
import axios from '../../axios-elearning';

export const fetchCoursesStart = () => {
    return {
        type: actionTypes.FETCH_COURSES_START
    }
}

export const fetchCoursesSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_COURSES_SUCCESS,
        courses: courses
    }
}

export const fetchCoursesFail = (error) => {
    return {
        type: actionTypes.FETCH_COURSES_FAIL,
        error: error
    }
}

export const fetchCourses = () => {
    return dispatch => {
        dispatch(fetchCoursesStart());
        axios.get('/courses')
            .then(response => {
                dispatch(fetchCoursesSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchCoursesFail(error));
            })
    }
}
