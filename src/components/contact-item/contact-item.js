import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './contact-item.scss'
import ContactsContext from './../../context/contacts/contactsContext'

const ContactItem = ({ index, contact }) => {

    const contactsContext = useContext(ContactsContext);
    const { deleteContact } = contactsContext;
    
    const [toEditForm, setToEditForm] = useState(false);

    const prepForEdit = () => {
        setToEditForm(true);
    }
    
    return (
        <div className='contact-item card mb-4'>
            {
                toEditForm && <Redirect to={`/contact/${index}`} />
            }
            <div className='card-body'>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-12 col-md-4 text-center text-md-left'>
                            <span>{contact.first_name} {contact.last_name}</span>
                        </div>
                        <div className='col-12 col-md-4 text-center text-md-center'>
                            <span>{contact.email}</span>
                        </div>
                        <div className='col-12 col-md-4 text-center text-md-right'>
                            <div className='btn-group' role='group'>
                                <button type='button' className='btn btn-outline-secondary' onClick={prepForEdit.bind(null, index)}>
                                    <img src={require('../../assets/edit.svg')} alt='Edit' title='Edit Contact' />
                                </button>
                                <button type='button' className='btn btn-outline-secondary' onClick={deleteContact.bind(null, index)}>
                                    <img src={require('../../assets/trash.svg')} alt='Delete' title='Delete Contact' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
