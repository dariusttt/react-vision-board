import React, { useEffect, useState } from "react";
import {Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Goals from "./components/Goals";
import Accomplishments from "./components/Accomplishments";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  const [goals, setGoals] = useState([]);
  const [accomplishments, setAccomplishments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:10000/goals`)
      .then(res => res.json())
      .then(setGoals);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:10000/accomplishments`)
      .then(res => res.json())
      .then(setAccomplishments);
  }, []);

  const onUpdateGoal = (updatedGoal) => {
    const updatedGoals = goals.map(originalGoal => {
      if(originalGoal.id === updatedGoal.id){
        return updatedGoal;
      } else{
        return originalGoal;
      }
    });
    console.log(updatedGoals);
  }

  const onFormSubmit = (newData, type) => {
      type === 'goals' ? setGoals(goals => [...goals, newData]) : setAccomplishments(accomplishments => [...accomplishments, newData])
  }

  const onDeleteClick = (id, type) => {
    fetch(`http://localhost:10000/${type}/${id}`, {
      method: 'DELETE'
    })
  
    if(type === 'goals'){
      setGoals(ogGoals => ogGoals.filter(ogGoal => {
        return ogGoal.id === id ? null : ogGoal;
      }))
    } else{
      setAccomplishments(ogAccomplishments => ogAccomplishments.filter(ogAccomplishment => {
        return ogAccomplishment.id === id ? null : ogAccomplishment;
      }))
    }
}

return (
  <div>
    <NavBar />
    <Form onFormSubmit={onFormSubmit}/>
      
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/goals" element={
        <Goals goals={goals} onUpdateGoal={onUpdateGoal}  onDeleteClick={onDeleteClick} />
        } />
        <Route path="/accomplishments" element={
        <Accomplishments accomplishments={accomplishments} onDeleteClick={onDeleteClick} />
        } />
        </Route>
  </div>
);
}

  // Add your API calls here, and update state when data is received.
  // Also, handle form submission and delete functionality.
  // Use React Router to switch between different pages.
  // Use CSS to style your components.
  // Use a library like React-Bootstrap to make your components look nice.
  // Test your application using Jest and React Testing Library.
  // Deploy your application to a hosting platform.
  // Use a library like Redux to manage state.
  // Use a library like React Query to handle API calls.



export default App;