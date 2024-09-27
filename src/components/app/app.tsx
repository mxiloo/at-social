import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Header from "../app-header/header.tsx"
import { Route, Routes } from "react-router-dom"
import Main from "../app-main/main.tsx"
import EditPage from "../../pages/edit-page/edit-page.tsx"
import { getUsers } from "../../utils/api.ts";
import { setIsLoading } from "../../services/reducers/preloader-slice.ts";
import { setUsers } from "../../services/reducers/users-slice.ts";
import ProfileData from "../../pages/profile-data-page/profile-data.tsx";
import { modalSelector } from "../../services/selectors/selectors.ts";
import Modal from "../modal/modal.tsx";

function App() {

    const isModalOpen = useSelector(modalSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchUsers() {
            try {
                dispatch(setIsLoading(true));
                const fetchedUsers = await getUsers();
                dispatch(setUsers(fetchedUsers));
                dispatch(setIsLoading(false));
            } catch (error) {
                console.error(error);
                dispatch(setIsLoading(false));
            }
        }
        fetchUsers();
    }, [dispatch]);


    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/edit/:id' element={<EditPage/>}>
                    <Route path='/edit/:id/data' element={<ProfileData/>}/>
                    <Route path='/edit/:id/workspace'/>
                    <Route path='/edit/:id/privacy'/>
                    <Route path='/edit/:id/security'/>
                </Route>
            </Routes>

            {isModalOpen && (
                <Modal />
            )}
        </div>
    )
}

export default App