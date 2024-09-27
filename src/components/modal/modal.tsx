import React, { useCallback, useEffect } from "react"
import ReactDOM from "react-dom" 
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setIsModalOpen } from "../../services/reducers/modal-slice.ts"
import styles from './modal.module.scss'
import close from '../../images/clear.png'
import logo from '../../images/modal-logo.png';
import Overlay from "../modal-overlay/overlay.tsx"
import { modalSelector } from "../../services/selectors/selectors.ts"

function Modal() {

    const dispatch = useDispatch();
    const modalRoot = document.getElementById('react-modals');

    const onClose = () => {
        dispatch(setIsModalOpen(false))
    };

    useEffect(() => {
        setTimeout(onClose, 4000)
        function closeEsc(e) {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', closeEsc)
        return () => document.removeEventListener('keydown', closeEsc)
    }, []);

    return ReactDOM.createPortal(
        (
            <>
                <div className={styles.modal}>
                    <img src={close} alt="close" className={styles.close} onClick={onClose}/>
                    <div className={styles.container}>
                        <img src={logo} alt="close" className={styles.logo} onClick={onClose}/>
                        <span className={styles.text}>Изменения сохранены!</span>
                    </div>

                </div>
                <Overlay onClose={onClose} />
            </>
        ), modalRoot
    )
}

export default Modal