import React from "react";
import { request } from "../config/request";

export const Card = ({ title, description, id, refetch }) => {
  const deleteItem = () => {
    request.delete(`/todos/${id}`).then((res) => {
      if (res.status === 200) {
        refetch();
      }
    });
  };

  const editCards = () => {
    const newTitle = prompt("Enter new title:", title);
    const newDescription = prompt("Enter new description:", description);
    request
      .put(`/todos/${id}`, { title: newTitle, description: newDescription })
      .then((res) => {
        if (res.status === 200) {
          refetch();
        }
      });
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={deleteItem}>Delete</button>
      <button onClick={editCards}>Edit</button>
    </div>
  );
};
