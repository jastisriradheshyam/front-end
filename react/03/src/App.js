import React from 'react';
import { useState } from 'react';
import './App.css';

function Form(props) {
  const [username, setUsername] = useState('');
  var onChangeHandle = (event) => {
    setUsername(event.target.value)
  }
  var handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((userProfile) => {
        props.onSubmit(userProfile);
        setUsername('')
        console.log(userProfile)
      }).catch(err => {
        console.log(err);
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={onChangeHandle}
        placeholder="Github username"
        required
      />
      <button>Add Card</button>
    </form>
  )
}

function CardList(props) {
  return (
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  )
}

function Card(profile) {
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt="profile_image" />
      <div className="info">
        <div className="accountId">{profile.login}</div>
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
        <div>{profile.type}</div>
      </div>
    </div>
  )
}

function App(props) {
  const [profiles, setProfiles] = useState([])
  var addNewProfile = (profileData) => {
    setProfiles(() => [...profiles, profileData]);
  }
  return (
    <div>
      <div className="Header">
        {props.title}
      </div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
