import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import arrow from '../../../public/image/right-arrow.png'

import style from '../../design/password.module.css';
import { usePassword } from './PasswordContext';
import { Head } from './Head';
import { useDispatch } from 'react-redux';
import { updatewifi } from '../../Redux/Action/Action';



export const  Changepassword = () => {
    const dispatch = useDispatch()
    
    const [show, setShow] = useState(false)
    const[input, setInput] = useState({
        nombreCuenta:"",
        ssid:"",
        password:""
    })

    const {password, setPassword} = usePassword()
    const [errors, setErrors] = useState(true)

    const navigate = useNavigate();

    // useEffect(()=>{
    //     updatewifi()
    // })


    //Validaciones
    const isLongEnough = input.password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(input.password);
    const hasLoweCase = /[a-z]/.test(input.password);
    const haNumber = /\d/.test(input.password);
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


    function handlesubmit (e) {
        e.preventDefault()
        if(
            input.nombreCuenta.length <= 0 || !isLongEnough || !hasUpperCase || !hasLoweCase || !haNumber
        ){
            alert("Completar datos solicitados")
            console.log("la contraseña es menor a 8")
        }else{
            // dispatch(updatewifi(input))
            navigate("/next-page", {state:{input}})
        }
    }

    function validacion(input){
        //Validadciones

           let errors = {};

           if(!input.user){
            errors.user = "Ingrese su nombre de usuario"
           }

    }

    const togglePasswordVisibility = () => {
        setShow(!show)

    }
    return (
        <div>
            {/* <Head /> */}
        <div className={style.change}>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <h2>Nombre de usuario</h2>
                   <div className={style.password}>
                     <input 
                         placeholder="usuario" 
                         type="text"
                         name="nombreCuenta"
                         value={input.nombreCuenta} 
                         onChange={e=>handlechange(e)}
                         style={{margin:"0"}}
                      />
                  </div>
                <h2>Nuevo nombre de wifi</h2>
                   <div className={style.password}>
                     <input 
                         placeholder="usuario" 
                         type="text"
                         name="ssid"
                         value={input.ssid} 
                         onChange={e=>handlechange(e)}
                         style={{margin:"0"}}
                      />
                </div>
                <h2>Nueva contraseña</h2>
                <div className={style.password}>
                   <input 
                       placeholder="Contraseña" 
                       type={show ? 'text' : 'password'}
                       value={input.password}
                       name="password"
                       onChange={e=>handlechange(e)}
                       className={style.inputpass}
                       style={{margin:"0"}}
                    />

                      <span  className={style.passwordicon}
                         onClick={togglePasswordVisibility}
                     >
                            {show ? '🙈' : '👁️'}
                      </span>

                   <input type="submit" style={{cursor:'pointer'}} id="password-submit" />
                </div>
                
            </form>
            <form >
                <ul className={style.requirements}>
                    <li
                     className={`${style.requirement} ${isLongEnough ? style.valid : style.invalid}`}
                    >
                           {isLongEnough ? "✅" : "❌"}
                           <p>Entre 8 y 16 caracteres</p>
                    </li>
                    <li
                    className={`${style.requirement} ${hasUpperCase ? style.valid : style.invalid}`}
                    >
                            {hasUpperCase? "✅" : "❌"}
                            <p>Contiene letras mayusculas</p>
                    </li>
                    <li
                     className={`${style.requirement} ${hasLoweCase ? style.valid:style.invalid}`}
                    >
                         { hasLoweCase? "✅" : "❌"}
                         <p>Contiene letras minusculas</p>
                    </li>
                    <li
                     className={`${style.requirement} ${haNumber ? style.valid:style.invalid}`}
                    >
                        {haNumber ? "✅" : "❌"}
                        <p>Contiene numeros</p>
                    </li>
                </ul>
            </form>
        </div>

        </div>
    )
}