import React, { useEffect, useState } from 'react';

import style from '../design/password.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatewifi } from '../Redux/Action/Action';

import swal from 'sweetalert';


export const  Confirmacion = () => {
    const location = useLocation();
    const passwordAnterior = location.state?.input|| {}
    const navigate = useNavigate()
    const disptach = useDispatch()

    const [input, setInput] = useState({password:""})
    const [show, setShow] = useState(false)
    const [errors, setErrors] = useState("")


    const togglePasswordVisibility = () => {
        setShow(!show)

    }


    function handlesubmit(e){
        e.preventDefault()
        if(input.password.trim() !== passwordAnterior.password.trim()){
            alert("La contraseña no coincide")
            setErrors("La contraseña no coinciden") 
        }else{
            disptach(updatewifi(passwordAnterior))
            swal("Contraseña actualizada", "Estamos aplicando el cambio. El proceso puede demorar algunas horas.",{
                icon: "success",
            })
            console.log("Contraseña confirmada")
            navigate("/", {state:{password: input.password}})
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
        <div className={style.confirmacionpPassword}>
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
                style={{position:'relative', bottom:'35px', left:'46%'}}
            >
                {show ? '🙈' : '👁️'}
            </span>
            <input type="submit" style={{cursor:'pointer', width:'100%'}} id="password-submit" value="Confirmar"/>
            </form>
        </div>
    )
}