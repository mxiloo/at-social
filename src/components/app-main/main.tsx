import React, { useCallback, useEffect } from "react";
import Card from "../card/card.tsx";
import styles from './main.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../utils/api.ts";
import { archivedSelector, usersSelector } from "../../services/selectors/selectors.ts";
import { setUsers } from "../../services/reducers/users-slice.ts";
import { isLoadingSelector } from "../../services/selectors/selectors.ts";
import { setIsLoading } from "../../services/reducers/preloader-slice.ts";
import Preloader from "../preloader/preloader.tsx";

function Main() {
    
    const users = useSelector(usersSelector);
    const archived = useSelector(archivedSelector);
    const isLoading = useSelector(isLoadingSelector);

    return (
        <main className={styles.section}>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <h2 className={styles.title}>Активные</h2>
                    <Card users={users} archived={[]}/>
                    
                    {archived.length > 0 && (
                        <div className={styles.archived_card}>
                            <h2 className={styles.title}>Архив</h2>
                            <Card users={archived} archived={archived}/>
                        </div>
                    )}
                </>
            )}
        </main>
    );
}

export default Main;