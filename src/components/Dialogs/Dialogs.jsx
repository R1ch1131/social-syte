import React from "react";
import q from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
let dialogElements = props.state.name.map(dialog => (<DialogItem name={dialog.name} />));
let messageElements = props.state.message.map(message => (<Message message={message.message} />));
  return (
    <div className={q.dialogs}>
      <div className={q.dialogsItem}>{dialogElements}</div>
      <div className={q.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
