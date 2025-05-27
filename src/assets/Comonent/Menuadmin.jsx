import { useDispatch, useSelector } from "react-redux"
import {login} from '../../Redux/Action/Action';
import { getAll } from "../../Redux/Action/Action"

import style from '../../design/admin.module.css'
import '../../design/design.css'
import { useEffect, useState } from "react"

import user from '../../../public/user.svg'
import security from '../../../public/security.svg'

export const  Menuadmin = () => {
    const dispatch = useDispatch()

    const currentAdmin = useSelector(state=>state.currentAdmin)    
    const users = useSelector(state=>state.users)
    console.log(currentAdmin?.role,"skajsdk")

    const [search, setSearch] = useState("")
    const[loading, setLoading] = useState(true)
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[loggedIn, setLoggedIn] = useState(false)

    const handleUsers = (e) => {
      e.preventDefault();
        if(!username || !password){
          alert("Por favor, completar con los datos solicitados")
          return;
        }
       dispatch(login(username, password))
        console.log("Acceso aceptado")
    }

    useEffect(()=>{
      if(currentAdmin?.user?.role === "admin"){
        dispatch(getAll())
      }
    },[currentAdmin])


    const filterUser = users.filter(u=>
        `${u.nombreCuenta} ${u.ssid} ${u.password}`.toLowerCase()
          .includes(search.toLowerCase())
    )
    console.log(filterUser, " search")
    return (
        <div className={style.admin}>
                {
                    filterUser.length>0?(
                    <ul className={style.cuadro}> 
                          <div className={style.search}>
                              <input 
                              type="text"
                              placeholder="buscar usuario"
                              value={search}
                              onChange={(e)=>setSearch(e.target.value)}
                              />
                          </div>
                       <li className={style.info}>
                        <div className={style.titulos}>
                            <h3>Cuenta</h3>
                            <h3>SSID</h3>
                            <h3>Contraseña</h3>
                        </div>
                        {
                          filterUser.map((user, index) => (
                            <div key={index} className={style.titular}>
                                <p className={style.change} style={{width:'20%', textAlign:'center'}}> <span>{user.nombreCuenta}</span></p>
                                <p className={style.change} style={{width:'20%', textAlign:'center'}}> <span>{user.ssid}</span></p>
                                <p className={style.change} style={{width:'20%', textAlign:'center'}}><span>{user.password}</span></p>
                                
                                
                            </div>
                          ))
                        }
                       </li>
                        </ul>
                          ):(
                          <div class="container">
                          	<div class="screen">
                          		<div class="screen__content">
                          			<form class="login" onSubmit={handleUsers}>
                          				<div class="login__field">
                          					<i class="login__icon fas fa-user"><img src= {user} width={20}/></i>
                          					<input type="text" class="login__input" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Usuario"/>
                          				</div>
                          				<div class="login__field">
                          					<i class="login__icon fas fa-lock"><img src= {security} width={20} /></i>
                          					<input type="password" class="login__input" onChange={e=>setPassword(e.target.value)} placeholder="Contraseña"/>
                          				</div>
                          				<button type="submit" class="button login__submit">
                          					<span class="button__text">LogIn Now</span>
                          					<i class="button__icon fas fa-chevron-right"></i>
                          				</button>				
                          			</form>
                          		</div>
                          		<div class="screen__background">
                          			<span class="screen__background__shape screen__background__shape4"></span>
                          			<span class="screen__background__shape screen__background__shape3"></span>		
                          			<span class="screen__background__shape screen__background__shape2"></span>
                          			<span class="screen__background__shape screen__background__shape1"></span>
                          		</div>		
                          	</div>
                          </div>
                )
                    
              }
                  </div>
    )
    }
    