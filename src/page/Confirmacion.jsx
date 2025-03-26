import React, { useState } from 'react';

import style from '../design/password.module.css'


export const  Confirmacion = () => {

    return (
        <div className={style.change}>
            <h2>Ingrese nuevamente su contraseña</h2>
            <input 
                placeholder="usuario" 
                type="text"
                name=""
                onChange={e=>handlechange(e)}
            />
        </div>
    )
}