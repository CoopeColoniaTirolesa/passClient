import React, { useState } from 'react';

import coope from '../../../public/image/logofooter.png';
import logofibra from '../../../public/image/LogoCoope.png'


import style from '../../design/head.module.css'
import { Sello } from './sello';


export const  Head = () => {

    return (
        <div>
        <div className={style.head}>
             <div className={style.coopeGeneral}>
                 <img src= {coope} />
                <img style={{width:'38%'}} src={logofibra}/>
             </div>
           <div className= {style.info}>
            <ul>
                <li style={{lineHeight:'1.2'}}>Dirección:<br/> Av. Pte. Arturo Illia Sur 2465</li>
                <br/>
                <li style={{lineHeight:'1.2'}}>Días y horarios de atención:<br /> De Lunes a Viernes de 7:00 hs a 12:30 hs</li>
            </ul>
            <ul>
                <li ><h3 >Adminsitracion General</h3></li>
                <li style={{lineHeight:'0'}}  >
                    <div>
                        <img style={{width:'20px', borderRadius:'50%',padding:'3px' ,border:'1px solid white'}} src='/PhoneIcon.svg'/>
                    </div>
                    <p><a href='351 552 5605    ' style={{cursor:'pointer', textDecoration:'none', color:'white'}}>351 552 5605</a></p>
                </li>
                <li >
                    <h3>Internet Consultas</h3>
                </li>
                <li style={{lineHeight:'0'}} >
                    <div>
                      <img style={{width:'20px', borderRadius:'50%',padding:'3px' ,border:'1px solid white'}} src='/PhoneIcon.svg'/>
                    </div>
                   <p><a href='351 555 1796' style={{cursor:'pointer', textDecoration:'none', color:'white'}}>351 555 1796</a></p>
                   </li>
                <li ><h3 >Internet Soporte tecnico</h3></li>
                <li style={{lineHeight:'0'}} >
                    <div>
                       <img style={{width:'20px', borderRadius:'50%',padding:'3px' ,border:'1px solid white'}} src='/PhoneIcon.svg'/> 
                    </div>
                    <p><a href='351 201 7904' style={{cursor:'pointer', textDecoration:'none', color:'white'}}>351 201 7904</a></p>
                    </li>
            </ul>
           </div>
        </div>
           <Sello/>
        </div>
    )
}