import React, { useState, useEffect } from "react";
import styles from './profile-data.module.scss';
import Title from "../../components/title/title.tsx";
import { useDispatch, useSelector } from "react-redux";
import { citySelector, profileSelector } from "../../services/selectors/selectors.ts";
import Input from "../../components/input/input.tsx";
import { setChangeData, setCityData } from "../../services/reducers/users-slice.ts";


function ProfileData() {

    const user = useSelector(profileSelector);
    const cityDefault = useSelector(citySelector);
    const currentCity = user?.id in cityDefault ? cityDefault[user?.id] : 'Санкт-Петербург';

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [city, setCity] = useState(currentCity);
    const [username, setUsername] = useState(user?.username);
    const [phone, setPhone] = useState(user?.phone);
    const [company, setCompany] = useState(user?.company?.name);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setName(user?.name);
            setEmail(user?.email);
            setUsername(user?.username);
            setPhone(user?.phone);
            setCompany(user?.company?.name);
        }
    }, [user]);

    const handleChangeData = () => {
        const updatedUserData = {
            id: user?.id,
            name,
            email,
            username,
            phone,
            company: { name: company },
            isAchived: user?.isAchived
        };
        dispatch(setCityData({id: user?.id, city}))
        dispatch(setChangeData(updatedUserData))
    };

    return(
        <section className={styles.section}>
            <Title word={'Данные профиля'}/>

            <div className={styles.container}>

                <Input value={name} setValue={setName} placeholder={'Имя'} />
                
                <Input value={username} setValue={setUsername} placeholder={'Никнейм'} />
              
                <Input value={email} setValue={setEmail} placeholder={'Почта'} />
                
                <Input value={city} setValue={setCity} placeholder={'Город'} />
               
                <Input value={phone} setValue={setPhone} placeholder={'Телефон'} />
                
                <Input value={company} setValue={setCompany} placeholder={'Компания'} />
                
            </div>

            <button onClick={handleChangeData} className={styles.button}>Сохранить</button>
        </section>
    )
}

export default ProfileData