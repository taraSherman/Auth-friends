import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FriendForm } from './FriendForm';

export const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('/api/friends')
    .then(response => {
      setFriends(response.data);
    })
    .catch(error =>
      console.log(
        error.data,
        'FriendList.js, line 16, error fetching FriendList'
      ))
  }, []);

  return(
    <div className="Friends">
      {friends.map(friend => (
        <div id={friend.id} key={friend.id}>
          <span>
            <h3>Name: {friend.name}</h3>
            <p><strong>Age: {friend.age}</strong></p>
            <strong>Email: {friend.email}</strong>
          </span>
        </div>
      ))}
      <FriendForm />
    </div>
  )
};

export default FriendList;