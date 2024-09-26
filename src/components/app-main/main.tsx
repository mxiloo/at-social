import React from "react";
import Cards from "../cards/cards.tsx";
import styles from './main.module.scss';
import { useSelector } from "react-redux";
import { archivedSelector, usersSelector } from "../../services/selectors/selectors.ts";
import { isLoadingSelector } from "../../services/selectors/selectors.ts";
import Preloader from "../preloader/preloader.tsx";
import Title from "../title/title.tsx";
import { User } from "../../services/reducers/users-slice.ts";

function Main() {
    
    const users: User[] = useSelector(usersSelector);
    const isLoading = useSelector(isLoadingSelector);

    const usersUnArchived = users.filter(user => !user.isAchived)
    const usersArchived = users.filter(user => user.isAchived)

    return (
        <main className={styles.section}>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <Title word={'Активыне'}/>
                    <Cards users={usersUnArchived} />
                    
                    {usersArchived.length > 0 && (
                        <div className={styles.archived_card}>
                            <Title word={'Архив'}/>
                            <Cards users={usersArchived} />
                        </div>
                    )}
                </>
            )}
        </main>
    );
}

export default Main;