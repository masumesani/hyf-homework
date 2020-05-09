import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Profile from './Profile';

const ProfileContainer = () => {
    const [user, setUser] = useState({})
    let { name } = useParams();
    useEffect(() => {
        fetch(`https://api.github.com/users/${name}`)
            .then(response => response.json())
            .then(user => {
                setUser(user)
            }
            )
            .catch(error => console.log(error))//TODO write error hanlding e.g try and catch
    }, [])
    return (<Profile
        key={user.id}
        user={user} />);
}

export default ProfileContainer;