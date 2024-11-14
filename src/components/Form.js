import React from 'react';

function Form({onFormSubmit});

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
    }
     
    fetch(${type}`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(formType ? goalData : accomplishmentData)
      })
          .then(res => res.json())
          .then(newData => onFormSubmit(newData, type))

  formType ? 
  setGoalData({name: "", progress: ""}) : 
  setAccomplishmentData({name: "", completed: ""})
};

        


