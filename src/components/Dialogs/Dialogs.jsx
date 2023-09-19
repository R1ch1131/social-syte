import React from "react";
import q from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItemGl = (props) => {
  return (<div className={q.dialog + ' ' + q.active}>
  <NavLink to={"/dialogs/"+ props.name}>{props.name}</NavLink> 
  </div>
  )
}

const Message =(props) => {
  return (
    <div className={q.massage}>{props.message}</div>
  )
}
let dialogsData = [
      {name : 'Andrey'}, 
      {name :'Sasha'},
      {name : 'Nasty'}, 
      {name :'Stasya'},
      {name : 'Cola'},]

let dialogElements = [
        <DialogItemGl name={dialogsData[0].name} />,
        <DialogItemGl name={dialogsData[1].name} />,
        <DialogItemGl name={dialogsData[2].name} />,
        <DialogItemGl name={dialogsData[3].name} />,
        <DialogItemGl name={dialogsData[4].name} />
]

let messageData = [
      {message : 'Hi'}, 
      {message :'How are yo?'},
      {message : 'eah'}, 
      {messages :'Yo'},
      {message : 'REEEEEE'},]

const Dialogs = () => {
  return (
    <div className={q.dialogs}>
      <div className={q.dialogsItem}>
        {dialogElements}
      </div>
      <div className={q.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message}/>
        <Message message={messageData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
