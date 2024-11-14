import React from "react"

function AccomplishmentItem({accomplishment, onDeleteClick});
  const{id, name, complited} = accomplishment;

  const handleDelete = () =>{
    let type ="accomplishments"
    onDeleteClick(id, type)
  }

  return(
    <div className="card">
        <button onClick={handleDelete} classname="delete-button">X</button>
        <p>{name}</p>
        <p><className ="label">Completed: {completed}</b></p>
        </div>
        
  )