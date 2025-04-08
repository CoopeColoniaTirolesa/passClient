import React, { useState } from 'react';

import style from '../design/password.module.css'
import { Link, useLocation } from 'react-router-dom';


export const  Confirmacion = () => {
    const location = useLocation();
    const passwordAnterior = location.state?.password || ""

    const [input, setInput] = useState({ password : ""})
    const [show, setShow] = useState(false)
    const [errors, setErrors] = useState("")


    const togglePasswordVisibility = () => {
        setShow(!show)

    }

    function handlesubmit(e){
        e.preventDefault()
        if(input.password.trim() !== passwordAnterior.trim()){
            alert("La contraseña no coincide")
            setErrors("La contraseña no coinciden") 
        }else{
            alert("Contraseña confirmada correctamente")
            console.log("Contraseña confirmada")
        }
        //Buscar validacion para que la contraseña coincida con la contraseña de la pagina anterior
    }
    // console.log("fd",passwordAnterior)

    function handlechange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={style.password}>
            <form onSubmit={(e)=>handlesubmit(e)} >
            <h2>Ingrese nuevamente su contraseña</h2>
            <input 
                placeholder="Contraseña" 
                type={show ? 'text' : 'password'}
                value={input.password}
                name="password"
                onChange={e=>handlechange(e)}
                className={style.inputpass}
                style={{margin:'0', padding:'0'}}
            />
            <span  className={style.passwordicon}
                onClick={togglePasswordVisibility}
                style={{position:'relative', bottom:'35px', left:'42%'}}
            >
                {show ? '🙈' : '👁️'}
            </span>
            <input type="submit"  style={{cursor:'pointer', width:'100%'}} id="password-submit" value="Confirmar"/>
            </form>
        </div>
    )
}