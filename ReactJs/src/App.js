import React from 'react';
import contacts from './props/contacts'

function Card(props) {
  return (
    <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img
            className = "circle-img"
            src={props.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
  )
}
const arr = []
    for (let i in contacts){
      arr.push(<Card 
          name={contacts[i].name} 
          img={contacts[i].imgURL} 
          phone={contacts[i].phone}
          email={contacts[i].email}></Card>)
    }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {arr}
    </div>
  );
}

export default App;