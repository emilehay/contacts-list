import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './contact-form.scss';
import ContactsContext from './../../context/contacts/contactsContext';

const ContactForm = props => {

    const [inputs, setInputs] = useState({});
    const [edit, setEdit] = useState(false);
    const [toHome, setToHome] = useState(false);

    const contactsContext = useContext(ContactsContext);
    const { contacts, addContact, editContact, listContacts } = contactsContext;

    let { id } = useParams();

    useEffect(() => {
        if(contacts.length === 0){
            listContacts();
        }

        if(id !== null){
            setEdit(true);
        }

    }, [])

    const onChange = (e) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(edit){
            editContact(id, inputs.first_name, inputs.last_name, inputs.email);
        } else {
            addContact(inputs.first_name, inputs.last_name, inputs.email);
        }

        goToHome();
    }

    const goToHome = () => {
        setToHome(true);
    }

    return (
        <div className='contact-form card'>
            {
                toHome && <Redirect to='/' />
            }
            <div className='card-body'>
                <form onSubmit={onSubmit}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <div className='form-group'>
                                    <label htmlFor='first_name'>First name:</label>
                                    <input className='form-control' type='text' name='first_name' onChange={onChange} value={inputs.first_name} />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='form-group'>
                                    <label htmlFor='last_name'>Last name:</label>
                                    <input className='form-control' type='text' name='last_name' onChange={onChange} value={inputs.last_name} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email address:</label>
                                    <input className='form-control' type='text' name='email' onChange={onChange} value={inputs.email} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-right'>
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>       
        </div>
    )
}

export default ContactForm
