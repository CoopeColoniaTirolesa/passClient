import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


import style from '../../design/password.module.css';


export const  Changepassword = () => {
    
    const[input, setInput] = useState({
        user:"",
        password:"",
        show:""
    })
    const [errors, setErrors] = useState(true)
    const [show, setShow] = useState("")
    const navigate = useNavigate();


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
            input.user.length <= 0 || !isLongEnough || !hasUpperCase || !hasLoweCase || !haNumber
        ){
            alert("Completar datos solicitados")
            console.log("la contraseña es menor a 8")
        }else{
            navigate("/next-page")
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
        <div className={style.change}>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <h2>Ingrese su nombre de usuario</h2>
                   <div className={style.password}>
                     <input 
                         placeholder="usuario" 
                         type="text"
                         name="user"
                         value={input.user} 
                         onChange={e=>handlechange(e)}
                      />
                  </div>
                <h2>Ingrese su nueva contraseña</h2>
                <div className={style.password}>
                   <input 
                       placeholder="Contraseña" 
                    //    type={input.show ? 'text' : 'password'}
                    type='text'
                       value={input.password}
                       name="password"
                       onChange={e=>handlechange(e)}
                       className={style.inputpass}
                    />

                      <span  className={style.passwordicon}
                         onClick={togglePasswordVisibility}
                     >
                            {input.show ? '🙈' : '👁️'}
                      </span>

                   <input type="submit" style={{cursor:'pointer'}} id="password-submit" value="Next"/>
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
    )
}