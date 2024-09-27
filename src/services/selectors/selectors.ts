import { store } from "../store";


export const usersSelector = (store) => store.users.users;

export const citySelector = (store) => store.users.city;

export const archivedSelector = (store) => store.users.archivedUsers;

export const isLoadingSelector = (store) => store.isLoading.isLoading;

export const profileSelector = (store) => store.profile.profile;

export const modalSelector = (store) => store.modal.isOpen;

