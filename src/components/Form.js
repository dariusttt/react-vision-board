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

        


