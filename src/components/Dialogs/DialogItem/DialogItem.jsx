import React from "react";
import q from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={q.dialog + " " + q.active}>
      <NavLink to={"/dialogs/" + props.name}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
