import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { usersSelector } from "../services/selectors/selectors.ts"

function EditPage() {

    const {id} = useParams<string>();
    console.log(useParams())
    const users = useSelector(usersSelector);
    const userId = parseInt(id, 10);
    const user = users.find(user => user?.id === userId);
    console.log(user)

    return (
        <section>
            страница: {user?.username}
            
        </section>
    )
}

export default EditPage