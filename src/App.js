import React from 'react';
import './project.css';
import BreadCrumb from './components/BreadCrumb';
import UploadForm from './components/UploadForm';
import UserSwitch from './components/UserSwitch';

function App() {
  return (
    <div>
      <header>
          <h2></h2>
          <h2 className="name">Binariers</h2>
          <div className='bar'>        
          <BreadCrumb></BreadCrumb>
          <button className="buttonPopup">Login</button>
          </div>
      </header>
      <div className="switch">
        <UserSwitch></UserSwitch>
      </div>
      <div className="wrapper">
      <UploadForm></UploadForm>
      </div>
      <div className="response">REPONSE</div>





    </div>

  );
}

export default App;
