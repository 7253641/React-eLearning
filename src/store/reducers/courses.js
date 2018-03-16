import * as actionTypes from '../actions/actionTypes';

const initialState = {
    coursesPage: {
        title: 'Courses',
        imageUrl: 'https://i.imgur.com/DCP0DZJ.png',
        directories: ['Home', 'Courses']
    },
    cartAmount: '1',
    courses: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COURSES_START:
            return {
                ...state,
                // loading: true
            };
        case actionTypes.FETCH_COURSES_SUCCESS:
            return {
                ...state,
                // loading: false,
                courses: action.courses
            };
        case actionTypes.FETCH_COURSES_FAIL:
            return {
                ...state,
                // loading: true
            };
        default:
            return state;
    }
}

export default reducer
