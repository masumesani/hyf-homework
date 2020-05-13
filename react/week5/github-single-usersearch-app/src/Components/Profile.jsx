import React from 'react';

const Profile = ({ user }) => {
    console.log(user)
    return (
        <div style={{ marginTop: '6em' }}>
            <img src={user.avatar_url} />
            <p>{user.bio}</p>
            <div>
                <a href={user.blog}>Blog</a>
            </div>
            <a href={user.html_url}>{user.name}</a>
            <p>{user.location}</p>
        </div>
    );
}

export default Profile;