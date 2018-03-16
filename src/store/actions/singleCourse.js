import * as actionTypes from './actionTypes';
import axios from '../../axios-elearning';

export const fetchCourseStart = () => {
    return {
        type: actionTypes.FETCH_COURSE_START
    }
}

export const fetchCourseSuccess = (courseDetail, courseName, description, imageUrl) => {
    return {
        type: actionTypes.FETCH_COURSE_SUCCESS,
        payload: {
            courseDetail: courseDetail,
            courseName: courseName,
            description: description,
            imageUrl: imageUrl
        }
    }
}

export const fetchCourseFail = (error) => {
    return {
        type: actionTypes.FETCH_COURSE_FAIL,
        error: error
    }
}

export const fetchCourse = (courseId) => {
    return dispatch => {
        dispatch(fetchCourseStart());
        axios.get('/course?id=' + courseId)
            .then(response => {
                dispatch(fetchCourseSuccess(response.data.sectionList, response.data.course_name, response.data.description, response.data.image_url));
            })
            .catch(error => {
                dispatch(fetchCourseFail(error));
            })
    }
}
