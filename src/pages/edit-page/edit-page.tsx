import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import { usersSelector } from "../../services/selectors/selectors.ts"
import styles from './edit-page.module.scss'
import { setProfile } from "../../services/reducers/profile-slice.ts"

function EditPage() {

    const {id} = useParams<string>();
    // console.log(useParams())
    const users = useSelector(usersSelector);
    const userId = parseInt(id, 10);
    const user = users.find(user => user?.id === userId);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(setProfile(user));
        }
    }, [dispatch, user]);
    // console.log(user)

    const switchClassName = ({isActive}) => (isActive ? `${styles.link_active}` : `${styles.link}`);

    return (
        <section className={styles.full}>
            <NavLink to={'/'} className={styles.back_link}>
                <div className={styles.arrow}></div>
                <span className={styles.text_link}>Назад</span>
            </NavLink>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.avatar}></div>
                    <ul className={styles.text_box}>
                        <NavLink className={switchClassName} to={`/edit/${user?.id}/data`}>
                            <li className={styles.text}>
                                Данные профиля
                            </li>
                        </NavLink>
                        <NavLink className={switchClassName} to={`/edit/${user?.id}/workspace`}>
                            <li className={styles.text}>
                                Рабочее пространство
                            </li>
                        </NavLink>
                        <NavLink className={switchClassName} to={`/edit/${user?.id}/privacy`}>
                            <li className={styles.text}>
                                Приватность
                            </li>
                        </NavLink>
                        <NavLink className={switchClassName} to={`/edit/${user?.id}/security`}>
                            <li className={styles.text}>
                                Безопасность
                            </li>
                        </NavLink>
                    </ul>
                </div>
                
                <Outlet />
            </div>
        </section>
    )
}

export default EditPage