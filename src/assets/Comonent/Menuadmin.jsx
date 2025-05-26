import { useDispatch, useSelector } from "react-redux"
import {login} from '../../Redux/Action/Action';
import { getAll } from "../../Redux/Action/Action"

import style from '../../design/admin.module.css'
import { useEffect, useState } from "react"

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
                              <button onClick={""}>Buscar</button>
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
                  <div className={style.solicitar}>
                        <p>
                          Si no sos administrador y por error terminaste en este panel de administrador,
                         te recomienda amablemente que te retires o acciones legales podrian recaer sobre
                          tu persona al manipular los datos que se encuentran en este panel,
                          ya que tenemos tus datos de acceso desde tu direccion ip
                        </p>
                    <h2>Solicitar usuarios</h2>
                    <form onSubmit={handleUsers}>
                      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Usuario"/>
                      <input value= {password} onChange={e=>setPassword(e.target.value)} placeholder="Contraseña"/>
                      <button type="submit">Solicitar</button>
                    </form>
                  </div>
                )
                    
              }
                  </div>
    )
    }
    