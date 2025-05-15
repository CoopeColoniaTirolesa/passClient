import api from '../../Services/Api';

import axios from 'axios'

const UPDATE_WIFI_SUCCESS = "UPDATE_WIFI_SUCCESS";
const WIFI_ERROR = 'WIFI_ERROR';

export function getAll(){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:5000/api/auth/allusers`)
            dispatch({type:"GET_ALL_USERS", payload:response.data})
            // console.log(response.data)
        }catch(e){
            console.log(e)
        }
}
}

export function updatewifi(payload){
    return async function(dispatch){
    try{
            const response = await axios.post('http://localhost:5000/api/auth/update', payload)
            console.log(response.data, "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            return response 
        }
        catch(err){
            console.log('Error al modificar contraseña', err)
            dispatch({type:WIFI_ERROR , error: err?.response?.data?.message})
        }
    }
}
