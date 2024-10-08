import React from 'react';
import "./style.css";

const Index: React.FC = () => {
  return (
    <div className='submit-message'>
        <h1>Lets build something cool together</h1>
        <label>Name</label>
        <input type='text' placeholder='Hilman Mauludin'></input>
        <label>Email</label>
        <input type='text' placeholder='hilmaul@gmail.com'></input>
        <label>Subject</label>
        <input type='text' placeholder='For web design work Enquire'></input>
        <label>Message</label>
        <textarea className="textarea" placeholder='Type your message'></textarea>
        <button>Submit</button>
    </div>
  );
}

export default Index;
