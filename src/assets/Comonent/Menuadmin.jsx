import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../../Redux/Action/Action"

import style from '../../design/admin.module.css'
import { useState } from "react"

export const  Menuadmin = () => {
    const users = useSelector(state=>state.users)    
    const dispatch = useDispatch()

    const [search, setSearch] = useState("")

    const handleUsers = (e) => {
        // console.log(getAll(),"ddddddddddddddddddddddddddddddddddddddddddddd")
        e.preventDefault();
        dispatch(getAll())
    }

    const filterUser = users.filter(u=>
        `${u.nombreCuenta} ${u.ssid} ${u.password}`.toLowerCase()
          .includes(search.toLowerCase())
    )
    console.log(filterUser, " search")
    return (
        <div className={style.admin}>
          <div className={style.search}>
              <input 
              type="text"
              placeholder="buscar contraseña"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              />
              <button onClick={handleUsers}>Buscar</button>
          </div>
                {
                    filterUser.length>0?(
                    <ul className={style.cuadro}> 
                       <li className={style.info}>
                        {
                          filterUser.map((user, index) => (
                            <div key={index} className={style.titular}>
                                <p className={style.change} style={{textAlign:'center', padding:'10px'}}>Cuenta:<br/> <span>{user.nombreCuenta}</span> <br/>  
                                SSID: <br/><span>{user.ssid}</span><br/>
                                Contraseña: <br/><span>{user.password}</span>
                                <br/>
                                </p>
                                
                            </div>
                          ))
                        }
                       </li>
              </ul>
                ):(
                  <div className={style.solicitar}>
                    <h2>Solicitar usuarios</h2>
                    <button onClick={e=>handleUsers(e)}>Solicitar</button>
                  </div>
                )
                    
              }
                  </div>
    )
    }
    