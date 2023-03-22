import React from 'react';
import './UserContainer.css';

interface UserContainerProps {
    avatar: string;
    username: string;
    shopName: string;
}

function UserContainer({ avatar, username, shopName }: UserContainerProps) {
  
  return (
    <div className="user-container">
      <img className="avatar" src={avatar} alt={username} />
      <div className="user-data">
        <div>{username}</div>
        <div className='shop'>{shopName}</div>
      </div>
    </div>
  );
}

export default UserContainer;