import api from '../../Services/Api';


const UPDATE_WIFI_SUCCESS = "UPDATE_WIFI_SUCCESS";
const WIFI_ERROR = 'WIFI_ERROR';

export function getAll(){
    return async function(dispatch){
        try{
            const response = await api.get(`http://localhost:5000/api/auth/allusers`,{
                withCredentials:true
            });
            dispatch({
                type:"GET_ALL_USERS",
                payload:response.data
            })
        }catch(e){
            console.log(e, "Error en el getall")
        }
}
}

export function updatewifi(payload){
    return async function(dispatch){
    try{
            const response = await api.post('http://localhost:5000/api/auth/update', payload)
            // console.log(response.data, "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            return response 
        }
        catch(err){
            console.log('Error al modificar contraseña', err)
            dispatch({type:WIFI_ERROR , error: err?.response?.data?.message})
        }
    }
}

export function login(username, password){
    return async function(dispatch){
        try{
            const res = await api.post('http://localhost:5000/api/auth/login',{username, password},{
                withCredentials:true
            });
            
            localStorage.setItem('token', res.data.token)
            
            dispatch({
                type: "LOGIN_SUCCES",
                payload: res.data
            });
            console.log(res.data,"daraaaa")
            
        }catch(err){
            console.log(err.message, "error en el login")
            dispatch({type:'Login fail'})
        }
    }
}

