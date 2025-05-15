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
                <button onClick={e=>handleUsers(e)}>Contraseña</button>
            <ul className={style.cuadro}> 
              <li className={style.contenido}>
                <p>Titular</p>
                      {users && users.length > 0 ? (
                        users.map((user, index) => (
                          <div key={index} className={style.titular}>
                            {user.nombreCuenta}
                          </div>
                          
                        ))
                      ) : (
                        <li>No hay usuarios cargados</li>
                      )}
              </li>
                      <li className={style.contenido}>
                        <p>SSID</p>
                      {
                        users && users.length > 0 ? (
                          users.map((SSID, INDEX)=>(
                            <div key={INDEX}>
                              {SSID.ssid}
                            </div>

                          ))
                        ):
                          <li>No hay ssid</li>
                      }
                      </li>
                      <li className={style.contenido}>
                        <p>Password</p>
                        {
                        users && users.length > 0 ? (
                          users.map((SSID, INDEX)=>(
                            <div key={INDEX}>
                              {SSID.ssid}
                            </div>

                          ))
                        ):
                          <li>No hay ssid</li>
                        }
                      </li>
                                            <li className={style.contenido}>
                        <p>Solicitado</p>
                        {
                        users && users.length > 0 ? (
                          users.map((SSID, INDEX)=>(
                            <div key={INDEX}>
                              {SSID.updateAt}
                            </div>

                          ))
                        ):
                          <li>No hay ssid</li>
                        }
                      </li>

                <li></li>
            </ul>
        </div>
    )
}