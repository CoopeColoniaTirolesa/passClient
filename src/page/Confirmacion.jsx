import React, { useState } from 'react';

import style from '../design/password.module.css'


export const  Confirmacion = () => {

    const [input, setInput] = useState({
        password:""
    })
    const [show, setShow] = useState("")
    const [errors, setErrors] = useState(false)


    const togglePasswordVisibility = () => {
        setShow(!show)

    }

    function handlesubmit(){
        e.preventDefault()
        input.password

        //Buscar validacion para que la contraseña coincida con la contraseña de la pagina anterior
    }

    function handlechange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={style.password}>
            <form   onSubmit={(e)=>handlesubmit(e)}>
            <h2>Ingrese nuevamente su contraseña</h2>
            <input 
                placeholder="Contraseña" 
                type={show ? 'text' : 'password'}
                value={input.password}
                name="password"
                onChange={e=>handlechange(e)}
                className={style.inputpass}
                style={{margin:'0'}}
            />
            <span  className={style.passwordicon}
                onClick={togglePasswordVisibility}
                style={{top:'55%',left:'52 %'}}
            >
                {show ? '🙈' : '👁️'}
            </span>
            </form>
        </div>
    )
}