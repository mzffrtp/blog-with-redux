import ActionTypes from "../actions/ActionTypes";

const initialState = {
    pending: false,
    success: false,
    error: false,
    errorMessage:"",
    user: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.loginActions.LOGIN_START :
            return{
                ...state,
                pending:true
            }
            
        case ActionTypes.loginActions.LOGIN_SUCCESS:
            return{
                ...state,
                pending:false,
                success: true,
                error: false,
                user: action.payload
            }
        case ActionTypes.loginActions.LOGIN_FAIL:
            return{
                ...state,
                pending: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }
        
            case ActionTypes.loginActions.LOGOUT:
                return initialState
        default:
            return state
    }

}

export default loginReducer