import ActionTypes  from "../actions/ActionTypes";

export const initialState = {
    pending: true,
    success: false,
    blogs: [],
    error: false,
    errorMessage: ""
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.blogActions.GET_BLOG_START:
            return {
                ...state,
                pending: false,
            }
        case ActionTypes.blogActions.GET_BLOG_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: false,
                blogs: action.payload
            }

        case ActionTypes.blogActions.GET_BLOG_FAIL:
            return{
                ...state,
                pending:false,
                success:false,
                error:true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default blogsReducer