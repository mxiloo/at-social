import React, { useCallback, useState } from "react";
import styles from './card.module.scss';
import { useDispatch } from "react-redux";
import { setArchivedUsers, setDeleteUser, setUnArchivedUsers, User } from "../../services/reducers/users-slice.ts";
import { NavLink } from "react-router-dom";

function Card({users, archived}) {

    const [visibleStates, setVisibleStates] = useState<object>({});
    
    const dispatch = useDispatch();

    const handleArchiveUser = useCallback((userId: number) => {
        dispatch(setArchivedUsers(userId));
        toggleVisible(userId);
    }, [dispatch]);

    const handleDeleteUser = useCallback((userId: number) => {
        dispatch(setDeleteUser(userId))
        toggleVisible(userId);
    }, [dispatch]);

    const handleUnArchiveUser = useCallback((userId: number) => {
        dispatch(setUnArchivedUsers(userId))
        toggleVisible(userId);
    }, [dispatch])

    const toggleVisible = useCallback((userId: number) => {
        setVisibleStates(prevState => ({
            ...prevState,
            [userId]: !prevState[userId]
        }));
    }, []);

    return (
        <section>
            <ul className={styles.section}>
                {users?.map(user => (
                    <li key={user?.id} className={styles.card}>
                        <div className={styles.avatar}></div>
                        <div className={styles.box}>
                            <div className={styles.card_top}>
                                <div className={styles.name_box}>
                                    <span className={styles.name}>{user?.username}</span>
                                    <button onClick={() => toggleVisible(user?.id)} className={styles.dots}></button>
                                    {visibleStates[user?.id] ?  
                                        <ul className={styles.dropdown}>
                                            <NavLink to={`/edit/${user?.id}`}>
                                                <li className={styles.text}>Редактировать</li>
                                            </NavLink>
                                            
                                            {users === archived ? 
                                                <li className={styles.text} onClick={() => handleUnArchiveUser(user?.id)}>Разархивировать</li> 
                                                :
                                                <li className={styles.text} onClick={() => handleArchiveUser(user?.id)}>Архивировать</li>
                                            }
                                            <li className={styles.text} onClick={() => handleDeleteUser(user?.id)}>Скрыть</li>
                                         </ul>
                                    : null}
                                </div>
                                <span className={styles.company}>{user?.company?.name}</span>
                            </div>
                            <span className={styles.city}>Санкт-Петербург</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Card;