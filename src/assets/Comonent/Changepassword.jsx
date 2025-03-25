import React, { useState } from 'react';

import style from '../../design/password.module.css';


export const  Changepassword = () => {
    const [password, setPassword] = useState("")

    //Validadciones
    const isLongEnough = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLoweCase = /[a-z]/.test(password);
    const haNumber = /\d/.test(password);

    return (
        <div className={style.change}>
            <h2>Ingrese su nueva contraseña</h2>
            <div className={style.password}>
               <input 
                   placeholder="Enter your password" 
                   type="password" 
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                />
               <input type="submit" id="password-submit" value="Next"/>
            </div>
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