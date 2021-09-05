import './App.css';
import React, { useState } from 'react';
import * as api from './calculate.service';

function App() {
  const [result, setResult] = useState(0);

  const [data, setData] = useState({
    firstName: '',
    secondName: '',
    keyword: '',
  });
  const { firstName, secondName, keyword } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(api.calculate(data));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className='App'>
      <h3 className='title'>Relationship Calculator</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <div>
            <label>Enter first name</label>
          </div>
          <div>
            <input
              type='text'
              value={firstName}
              name='firstName'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <select onChange={handleChange} required name='keyword'>
            <option value=''>SELECT</option>
            <option value='LOVES'>LOVES</option>
            <option value='FRIENDS'>FRIENDS</option>
          </select>
        </div>
        <div className='form-group'>
          <div>
            <label>Enter second name</label>
          </div>
          <div>
            <input
              type='text'
              name='secondName'
              required
              onChange={handleChange}
              value={secondName}
            />
          </div>
        </div>
        <div className='form-group-btn'>
          <button type='submit' className='btn btn-primary'>
            Caluclate
          </button>
        </div>
      </form>
      {result !== 0 && (
        <div className='result'>
          <p className='keyword'>{keyword}</p>
          <h5 className='result-value'>{result}</h5>
        </div>
      )}
    </div>
  );
}

export default App;
