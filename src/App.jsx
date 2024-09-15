
import React, { useEffect, useState } from 'react';
import './App.css';
import AddWorker from './components/Workers/AddWorker';
import WorkerList from './components/Workers/WorkerList';

function App() {
  const [workers, setWorkers]= useState(localStorage.getItem("workers") ? JSON.parse(localStorage.getItem("workers")): [])

  useEffect(()=>{
    localStorage.setItem("workers", JSON.stringify(workers))
  },[workers])
  
  return (
    <React.Fragment>
      <h1 className='text-white mt-6 text-3xl font-medium text-center'>Maaş Otomasyonu</h1>
        <AddWorker setWorkers={setWorkers}/>
        <WorkerList workers={workers} setWorkers={setWorkers}/>
    </React.Fragment>
  );
}

export default App;
