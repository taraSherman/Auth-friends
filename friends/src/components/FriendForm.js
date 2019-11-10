import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export function FriendForm(props) {
  const [addFriend, setAddFriend] = useState({
    name: '',
    age: '',
    email: ''
  }, []);

  const handleChange = event => {
    setAddFriend({
      ...addFriend,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    axiosWithAuth()
    .post('/friends', addFriend)
    .then((response => {
      console.log(response,
        'FriendForm.js, line 21, response to POST request to add friend')
    }))
    .catch(error => {
      console.log(error, 'FriendForm.js, line 24, error adding friend')
    })
  };

  return(
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <input
        className="input"
        value={addFriend.name}
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
      />
    <input
        className="input"
        value={addFriend.age}
        name="age"
        type="text"
        placeholder="Age"
        onChange={handleChange}
      />
      <input
        className="input"
        value={addFriend.email}
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
      />
      <button type="submit">
        Add new Friend
      </button>
    </form>
  );
};

export default FriendForm;