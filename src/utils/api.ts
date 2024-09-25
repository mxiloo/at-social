import { setUsers } from "../services/reducers/users-slice.ts";
import { store } from "../services/store.ts";

const URL = "https://jsonplaceholder.typicode.com/USERS";

export async function getUsers() {
    try {
        const response = await fetch(URL);
        if (!response.ok) throw Error(`Запрос не удался`);
        return response.json();
    } catch (error) {
        console.error(error)
    }
}