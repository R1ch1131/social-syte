import React from "react";
import q from "./../Dialogs.module.css";


const Message = (props) => {
  return <div className={q.massage}>{props.message}</div>;
};


export default Message;
