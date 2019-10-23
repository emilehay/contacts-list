import React, { useContext, useEffect } from 'react'
import './contact-item.scss';
import ContactsContext from './../../context/contacts/contactsContext';

const ContactItem = ({ index, contact }) => {

    const contactsContext = useContext(ContactsContext);
    const { deleteContact } = contactsContext;

    return (
        <div className='contact-item card mb-4'>
            <div className='card-body'>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col'>
                            <span>{contact.name} {contact.surname}</span>
                        </div>
                        <div className='col text-center'>
                            <span>{contact.email}</span>
                        </div>
                        <div className='col text-right'>
                            <div className='btn-group' role='group'>
                                <button type='button' className='btn btn-outline-secondary'>
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
