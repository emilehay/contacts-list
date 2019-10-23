import React from 'react';
import './../styles/styles.scss';
import ContactList from '../components/contact-list/contact-list';

const App = () => {
  return (
    <div className='contacts-list'>
      <div className='container'>
        <div className='row mt-5 mb-4'>
          <div className='col text-center'>
            <h2 className='text-white'>My contacts</h2>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-8 m-auto'>
            <ContactList />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8 m-auto text-right'>
            <button className='btn btn-light'>Add a contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
