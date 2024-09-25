import { store } from "../store";


export const usersSelector = (store) => store.users.users;

export const archivedSelector = (store) => store.users.archivedUsers;

export const isLoadingSelector = (store) => store.isLoading.isLoading;

