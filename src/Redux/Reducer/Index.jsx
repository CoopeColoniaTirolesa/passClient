const initialState= {
    update:[],
    users:[]
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
            default:
                return state
    }
}