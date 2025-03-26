import React, { useState } from 'react';
import logocope from '../../../public/image/LogoCoope.png'

import style from '../../design/head.module.css'


export const  Head = () => {

    return (
        <div className={style.head}>
            <img src={logocope} />
           <ul>
              <li></li>
           </ul>
        </div>
    )
}