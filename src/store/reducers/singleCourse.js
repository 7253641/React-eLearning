import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courseName: '',
    imageUrl: '',
    student: 1092,
    level: 'Medium',
    duration: 32,
    price: 100,
    category: 'Web Service',
    author: 'Spectre',
    avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    directories: ['Home', 'Courses'],
    cartAmount: '1',
    description: '',
    courseDetail: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COURSE_START:
            return {
                ...state,
                // loading: true
            };
        case actionTypes.FETCH_COURSE_SUCCESS:
            return {
                ...state,
                // loading: false,
                courseName: action.payload.courseName,
                courseDetail: action.payload.courseDetail,
                directories: [
                    ...state.directories,
                    action.payload.courseName
                ],
                description: action.payload.description,
                imageUrl: action.payload.imageUrl
            };
        case actionTypes.FETCH_COURSE_FAIL:
            return {
                ...state,
                // loading: true
            };
        default:
            return state;
    }
}

export default reducer
