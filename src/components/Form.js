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
    
