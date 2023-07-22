// Firebase is a cloud platform
// axios is third party community library
// npm i axios

import React,{useState} from 'react'
import axios from 'axios';
import './Style.css';

function App() {
  const [data,setData]=useState({
      name : '',
      school : '',
      class : '',
      section : ''
  })

  const MyEvent =((e)=>{
    setData({...data,[e.target.name] : e.target.value})
  })

  const handlesubmit =((e)=>{
    e.preventDefault();
    //console.log(data);
     //alert('Your data has been submitted successfully!');
     
    // Check if all fields are filled
    if (data.name && data.school && data.class && data.section) {
      axios
        .post('https://sample-project-229e1-default-rtdb.firebaseio.com/registor.json', data)
        .then(() => alert('Submitted successfully!'));
    } else {
      alert('Please fill in all the fields before submitting.');
    }
  })
  return (
    <div className="container">
      <h1>Realtime Database</h1>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type='text'name='name' placeholder='Enter the your name' onChange={MyEvent}/>
      </div>
      <div className='form-group'>
        <label htmlFor='school'>school</label>
        <input type='text' name='school' placeholder='Enter the school' onChange={MyEvent}/>
      </div>
      <div className='form-group'>
        <label htmlFor='class'>Class</label>
        <input type='text' name='class' placeholder='Enter the  class' onChange={MyEvent}/>
      </div>
      <div className='form-group'>
        <label htmlFor='section'>Section</label>
        <input type='text' name='section' placeholder='Enter the  section'onChange={MyEvent}/>
      </div>
      <button className='button' onClick={handlesubmit}>submit</button>
    </div>
  );
}

export default App;
