import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useParams } from "react-router"
import './contact-form.scss'
import ContactsContext from './../../context/contacts/contactsContext'

const ContactForm = props => {

    const [inputs, setInputs] = useState({ first_name: '', last_name: '', email: '' });
    const [edit, setEdit] = useState(false);
    const [toHome, setToHome] = useState(false);

    const contactsContext = useContext(ContactsContext);
    const { addContact, contacts, editContact, listContacts } = contactsContext;

    let { id } = useParams();

    useEffect(() => {
        if(contacts.length === 0){
            listContacts();
        }
    }, [])

    useEffect(() => {
        if(id !== void(0)){
            setEdit(true);

            if(contacts.length > 0){
                setInputs({
                    ...inputs,
                    first_name: contacts[id].first_name,
                    last_name: contacts[id].last_name,
                    email: contacts[id].email,
                });
            }
        }
    }, [contacts])

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
                                    <input className='form-control' type='text' name='first_name' required onChange={onChange} value={inputs.first_name} />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='form-group'>
                                    <label htmlFor='last_name'>Last name:</label>
                                    <input className='form-control' type='text' name='last_name' required onChange={onChange} value={inputs.last_name} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email address:</label>
                                    <input className='form-control' type='email' name='email' required onChange={onChange} value={inputs.email} />
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
