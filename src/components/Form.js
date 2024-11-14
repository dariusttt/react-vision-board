import React, {useState} from "react";

function Form({onFormSubmit}){

  const [FormType, setFormType] = useState(true);
  const [goalData, setGoalData] = useState({
   name: '',
    progress:""
  })
   
    const[accomplishmentData, setAcomplishmentData] = useState({
        name: '',
        completed: "",
      }
    )
    
    const handleFormTypeChange =() => {
        setFormType(!formType);
    }

    const handleChange = (e) => {
        if(formType){
        setGoalData({...goalData, [e.target.name]: e.target.value});
        } else {
            setAcomplishmentData({...accomplishmentData, [e.target.name]: e.target.value});
        }
        }

    const handleSubmit = (e) => {
      e.preventDefault();
      let type;
      if(formType){
        type = "goals"
      } else {
        type = "accomplishments"
      }
    
     
    fetch(`http://localhost:3000/${type}`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(formType ? goalData : accomplishmentData)
      })
          .then(res => res.json())
          .then(newData => onFormSubmit(newData, type))

  FormType ? 
  setGoalData({name: "", progress: ""}) : 
  setAccomplishmentData({name: "", completed: ""})

    };

    return(
      <section id = "form-section" >
        <h2>Add a new goal or an accomplishment:</h2>
        <form onSubmit={handleSubmit}>
          
          <select
          name="type"
          onChange={handleFormTypeChange}>
            <option value="goals">Goal</option>
            <option value="accomplishments">Accomplishment</option>
          </select>
          <input
             onChange={handleChange}
             className='description'
             type="text"
             placeholder="Description"
             name="name"
             value={formType? goalData.name : accomplishmentData.name}
             />


{ 
                // Ternary operator to determine which kind of form we are completing, based off of the dropdown selection.
                FormType ?
                    <label>% Complete
                    <input 
                        onChange={handleChange}
                        type="number"
                        placeholder="0"
                        name="progress"
                        value={goalData.progress}
                        />
                    </label> : 
                    <label>Completion Date:
                    <input 
                        onChange={handleChange}
                        type="text"
                        placeholder="Ex. May 2020"
                        name="completed"
                        value={accomplishmentData.completed}
                        />
                    </label>
                }
                <button type="submit">Add</button>


        </form>
      
      </section>
    );
  }



    export default Form;








        


