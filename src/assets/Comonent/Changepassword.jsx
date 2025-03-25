import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


import style from '../../design/password.module.css';


export const  Changepassword = () => {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    //Validadciones
    const isLongEnough = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLoweCase = /[a-z]/.test(password);
    const haNumber = /\d/.test(password);


    const handlesubmit = (e) => {
        e.preventDefault()
     password.trim() !=  "" ?navigate("/next-page"):alert("Por favor ingrese una contraseña")
    }

    return (
        <div className={style.change}>
            <form onSubmit={handlesubmit}>
                <h2>Ingrese su nombre de usuario</h2>
                   <div className={style.password}>
                     <input 
                         placeholder="usuario" 
                         type="user" 
                         value={user}
                         onChange={(e)=>setUser(e.target.value)}
                      />
                    <input type="submit" id="password-submit" value="Next"/>
                  </div>
                <h2>Ingrese su nueva contraseña</h2>
                <div className={style.password}>
                   <input 
                       placeholder="Contraseña" 
                       type="password" 
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                    />
                   <input type="submit" id="password-submit" value="Next"/>
                </div>
            </form>
            <form >
                <ul className={style.requirements}>
                    <li
                     className={`${style.requirement} ${isLongEnough ? style.valid : style.invalid}`}
                    >
                           {isLongEnough ? "✅" : "❌"}
                           <p>Al menos 8 caracteres</p>
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