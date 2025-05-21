import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../../Redux/Action/Action"

import style from '../../design/admin.module.css'

export const  Menuadmin = () => {
    const users = useSelector(state=>state.users)    
    console.log(users, "getlsssssadascasfefac")
    const dispatch = useDispatch()

    const handleUsers = (e) => {
        // console.log(getAll(),"ddddddddddddddddddddddddddddddddddddddddddddd")
        e.preventDefault();
        dispatch(getAll())
    }


    return (
        <div className={style.admin}>
                {
                users.length>0?(
            <ul className={style.cuadro}> 
                     <li className={style.contenido}>
                      <p>Titular</p>
                      {
                        users.map((user, index) => (
                          <div key={index} className={style.titular}>
                            {user.nombreCuenta}
                          </div>
                          
                        ))
                      }
                     </li>
                      <li className={style.contenido}>
                        <p>SSID</p>
                      {
                          users.map((SSID, INDEX)=>(
                            <div key={INDEX}  className={style.titular}>
                              {SSID.ssid}
                            </div>

                          ))
                      }
                      </li>
                      <li className={style.contenido}>
                        <p>Password</p>
                        {
                          users.map((SSID, INDEX)=>(
                            <div key={INDEX}  className={style.titular}>
                              {SSID.password}
                            </div>

                          ))
                        }
                      </li>
                      <li className={style.contenido}>
                        <p>Solicitado</p>
                        {
                          users.map((SSID, INDEX)=>(
                            <div key={INDEX}  className={style.titular}>
                              {SSID.updateAt}
                            </div>

                          ))
                        }
                      </li>

                <li></li>
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