import ActionTypes from "../actions/ActionTypes";   

const initialState = {
    pending: true,
    success: false,
    users: [],
    error:false,
    errorMessage: ""
}

const usersReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ActionTypes.userActions.GET_USER_START:
            return{
                ...state
            }
        
        case ActionTypes.userActions.GET_USER_SUCCESS:
            return{
                ...state,
                pending:false,
                success: true,
                error: false,
                users: action.payload,
            }
        
        case ActionTypes.userActions.GET_USER_FAIL:
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

export default usersReducer