import React, { useCallback, useState } from "react";
import styles from './cards.module.scss';
import Card from "../card/card.tsx";

function Cards({users}) {

    return (
        <section>
            <ul className={styles.section}>
                {users?.map(user => (
                    <li key={user?.id}>
                        <Card user={user} users={users}/>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Cards;