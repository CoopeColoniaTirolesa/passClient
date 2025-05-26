
const initialState= {
    update:[],
    users:[],
    isAuthenticated:false,
    use:null,
    currentAdmin:null
}

export default function rootReducer(state = initialState, action){
    // console.log(action.paylaod)
    switch(action.type){
        case "GET_ALL_USERS":
            return{
                ...state,
                users: action.payload
            }
        case "UPDATE_WIFI":
            return{
                ...state
            }
        case "LOGIN_SUCCES":
            return{
                ...state,
                // isAuthenticated:true,
                currentAdmin:action.payload
            } 
            default:
                return state
    }
}