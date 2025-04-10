import React, { useState } from 'react';

import coope from '../../../public/image/logocoopfooter.png';
import logocope from '../../../public/image/LogoCoope.png'

import style from '../../design/head.module.css'


export const  Head = () => {

    return (
        <div className={style.head}>
            <img src={logocope} />
           {/* <ul>
              <li></li>
           </ul> */}
           <div className={style.coopeGeneral}>
             <img src= {coope} />
           </div>
        </div>
    )
}