import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import ContactList from '../components/contact-list/contact-list';
import ContactForm from '../components/contact-form/contact-form';

import ContactsState from '../context/contacts/ContactsState';

const App = () => {

  const [toContactForm, setToContactForm] = useState(false);

  useEffect(()=>{
    return () => {
      setToContactForm(false);
    };
  })

  const goToContactForm = () => {
    setToContactForm(true);
  }

  return (
    <ContactsState>
      <Router>
        {
          toContactForm && <Redirect to='/contact/' />
        }
        <div className='contacts-list'>
          <div className='container'>
            <div className='row mt-5 mb-4'>
              <div className='col text-center'>
                <h2 className='text-white'>My contacts</h2>
              </div>
            </div>
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <div className='row mb-3'>
                    <div className='col-12 col-md-8 m-auto'>
                      <ContactList />
                    </div>
                  </div>
                  <div className='row mb-5'>
                    <div className='col-12 col-md-8 m-auto text-right'>
                      <button className='btn btn-light' onClick={goToContactForm.bind(null)}>Add a contact</button>
                    </div>
                  </div>
                </Fragment>
              )} />
              <Route path='/contact/:id?' render={props => (
                <Fragment>
                  <div className='row mb-3'>
                    <div className='col-12 col-md-8 m-auto'>
                      <Link className='btn btn-outline-light' to='/'>Back</Link>
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-12 col-md-8 m-auto'>
                      <ContactForm />
                    </div>
                  </div>
                </Fragment>
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </ContactsState>
  );
}

export default App;
