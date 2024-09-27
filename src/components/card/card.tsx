import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArchiveToggle, setDeleteUser, User } from "../../services/reducers/users-slice.ts";
import { NavLink } from "react-router-dom";
import { citySelector } from "../../services/selectors/selectors.ts";
import styles from './card.module.scss'



function Card({user, users}) {

    const [visibleStates, setVisibleStates] = useState<object>({});

    const city = useSelector(citySelector);
    const currentCity = user?.id in city ? city[user?.id] : 'Санкт-Петербург';
    
    const dispatch = useDispatch();

    const handleArchiveUser = useCallback((userId: number) => {
        dispatch(setArchiveToggle({id: userId, toggle:true}));
        toggleVisible(userId);
    }, [dispatch]);

    const handleDeleteUser = useCallback((userId: number) => {
        dispatch(setDeleteUser(userId))
        toggleVisible(userId);
    }, [dispatch]);

    const handleUnArchiveUser = useCallback((userId: number) => {
        dispatch(setArchiveToggle({id: userId, toggle:false}))
        toggleVisible(userId);
    }, [dispatch])

    const toggleVisible = useCallback((userId: number) => {
        setVisibleStates(prevState => ({
            ...prevState,
            [userId]: !prevState[userId]
        }));
    }, []);

    return (
        <section className={styles.card}>
            <div className={styles.avatar}></div>
            <div className={styles.box}>
                            <div className={styles.card_top}>
                                <div className={styles.name_box}>
                                    <span className={styles.name}>{user?.username}</span>
                                    <button onClick={() => toggleVisible(user?.id)} className={styles.dots}></button>
                                    {visibleStates[user?.id] ?  
                                        <ul className={styles.dropdown}>
                                            <NavLink className={styles.link} to={`/edit/${user?.id}/data`}>
                                                <li className={styles.text}>Редактировать</li>
                                            </NavLink>
                                            
                                            {user.isAchived ? 
                                                <li className={styles.text} onClick={() => handleUnArchiveUser(user?.id)}>Разархивировать</li> 
                                                :
                                                <li className={styles.text} onClick={() => handleArchiveUser(user?.id)}>Архивировать</li>
                                            }
                                            <li className={styles.text} onClick={() => handleDeleteUser(user?.id)}>Скрыть</li>
                                         </ul>
                                    : null}
                                </div>
                                <div className={styles.test}>
                                    <span className={styles.company}>{user?.company?.name}</span>
                                </div>
                                
                            </div>
                            <span className={styles.city}>{currentCity}</span>
                        </div>
        </section>
    )
}

export default Card