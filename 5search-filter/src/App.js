import React, { useState } from 'react';
import './App.css';
import JSONDATA from './data.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let sp = '';
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search.."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === '') return val;
        else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
          return val.first_name;
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>
              {val.first_name} {sp}
              {val.last_name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
