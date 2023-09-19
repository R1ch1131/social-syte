import React from "react";
import q from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let dialogsData = [
  { name: "Andrey" },
  { name: "Sasha" },
  { name: "Nasty" },
  { name: "Stasya" },
  { name: "Cola" },
];

let messageData = [
  { message: "Hi" },
  { message: "How are yo?" },
  { message: "eah" },
  { messages: "Yo" },
  { message: "REEEEEE" },
];

let dialogElements = dialogsData.map(dialog => (<DialogItem name={dialog.name} />));

let messageElements = messageData.map(message => (<Message message={message.message} />));

const Dialogs = () => {
  return (
    <div className={q.dialogs}>
      <div className={q.dialogsItem}>{dialogElements}</div>
      <div className={q.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
