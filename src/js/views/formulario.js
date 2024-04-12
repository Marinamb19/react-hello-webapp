import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Formulario = () => {

    const [contact, setContact] = useState({
        "name": "",
        "email": "",
        "address": "",
        "phone": ""
    })

    const newContact = (e) => {
        e.preventDefault()
        fetch("https://playground.4geeks.com/contact/agendas/agenda_marina/contacts", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        }
        )
        setContact({
            "name": "",
            "email": "",
            "address": "",
            "phone": ""
        })
    }


    return (
        <div className='container'>
            <form onSubmit={newContact}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={e => setContact({ ...contact, name: e.target.value })}
                        value={contact.name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={e => setContact({ ...contact, email: e.target.value })}
                        value={contact.email}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={e => setContact({ ...contact, phone: e.target.value })}
                        value={contact.phone}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={e => setContact({ ...contact, address: e.target.value })}
                        value={contact.address}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/">
                <button className="btn btn-primary">Volver a la agenda</button>
            </Link>
        </div>
    )
}

export default Formulario
