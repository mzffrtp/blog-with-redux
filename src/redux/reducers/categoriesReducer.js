import ActionTypes from "../actions/ActionTypes";

const initialState = {
    pending: true,
    success: false,
    categories: [],
    error: false,
    errorMessage: ""
}

const categoriesReducer = (state= initialState, action)=>{
    switch (action.type) {
        case ActionTypes.categoryActions.GET_CATEGORY_START:
        return {
            ...state,
            pending:false
        }

        case ActionTypes.categoryActions.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                pending:false,
                success: true,
                error:false,
                categories: action.payload
            }
        
        case ActionTypes.categoryActions.GET_CATEGORY_FAIL:
            return {
                ...state,
                pending: false,
                success: false,
                error:true,
                errorMessage: action.payload
            }
        
    
        default:
            return state
    }
}

export default categoriesReducer