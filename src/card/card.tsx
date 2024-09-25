import React, { useCallback } from "react";
import styles from './card.module.scss';
import { useDispatch } from "react-redux";
import { setArchivedUsers } from "../services/reducers/users-slice.ts";

function Card({users}) {

    const dispatch = useDispatch();

    const handleArchiveUser = useCallback((userId: number) => {
        dispatch(setArchivedUsers(userId));
    }, [dispatch]);
    
    return (
        <section>
            <ul className={styles.section}>
                {users?.map(user => (
                    <li key={user?.id} className={styles.card}>
                        <div className={styles.avatar}></div>
                        <div className={styles.box}>
                            <div className={styles.card_top}>
                                <div className={styles.name_box}>
                                    <span className={styles.name}>{user?.name}</span>
                                    <div onClick={() => handleArchiveUser(user?.id)} className={styles.dots}></div>
                                </div>
                                <span className={styles.company}>{user?.company.name}</span>
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