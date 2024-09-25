import React, { useCallback, useEffect } from "react";
import Card from "../card/card.tsx";
import styles from './main.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../utils/api.ts";
import { archivedSelector, usersSelector } from "../services/selectors/selectors.ts";
import { setUsers } from "../services/reducers/users-slice.ts";
import { isLoadingSelector } from "../services/selectors/selectors.ts";
import { setIsLoading } from "../services/reducers/preloader-slice.ts";

function Main() {

    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const archived = useSelector(archivedSelector);
    console.log(archived)
    const isLoading = useSelector(isLoadingSelector);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const fetchedUsers = await getUsers();
                dispatch(setUsers(fetchedUsers));
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchUsers();
    }, [dispatch]);


    return (
        <main className={styles.section}>
            <h2 className={styles.title}>Активные</h2>
            <Card users={users} />
            <div>
                <h2 className={styles.title}>Архив</h2>
                <Card users={archived} />
            </div>
        </main>
    )
}

export default Main