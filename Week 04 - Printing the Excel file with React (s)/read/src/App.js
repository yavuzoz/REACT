import './App.css';
import ReadExcel from './services/excelService';
//import React, {useState} from 'react'
//import Table from './components/excelTable'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" onChange={(e) => {
          const file = e.target.files[0];
          ReadExcel(file)
        }} />
      </header>
    </div>
  );


}

export default App;
